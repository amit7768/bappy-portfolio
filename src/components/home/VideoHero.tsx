'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEOS = ['/videos/walkthrough-1.mp4', '/videos/walkthrough-2.mp4', '/videos/walkthrough-3.mp4']
const INTERVAL_MS = 8000

const OVERLAY_GRADIENT =
  'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)'

/** Full-bleed hero video — two stacked <video> elements crossfade so a frame is always visible. */
export default function VideoHero() {
  const videoRefA = useRef<HTMLVideoElement>(null)
  const videoRefB = useRef<HTMLVideoElement>(null)
  const activeSlotRef = useRef<'A' | 'B'>('A')
  const indexRef = useRef(0)

  const [srcA, setSrcA] = useState(VIDEOS[0])
  const [srcB, setSrcB] = useState(VIDEOS[1 % VIDEOS.length])
  const [activeSlot, setActiveSlot] = useState<'A' | 'B'>('A')
  const [displayIndex, setDisplayIndex] = useState(0)

  const advanceTo = useRef((nextIndex: number) => {
    const goingToB = activeSlotRef.current === 'A'
    const inactiveRef = goingToB ? videoRefB : videoRefA
    const setInactiveSrc = goingToB ? setSrcB : setSrcA

    setInactiveSrc(VIDEOS[nextIndex])
    indexRef.current = nextIndex
    setDisplayIndex(nextIndex)

    requestAnimationFrame(() => {
      const v = inactiveRef.current
      if (!v) return
      v.load()
      const onCanPlay = () => {
        v.play().catch(() => {})
        const newSlot = goingToB ? 'B' : 'A'
        activeSlotRef.current = newSlot
        setActiveSlot(newSlot)
        v.removeEventListener('canplay', onCanPlay)
      }
      v.addEventListener('canplay', onCanPlay)
    })
  }).current

  useEffect(() => {
    videoRefA.current?.play().catch(() => {})
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      advanceTo((indexRef.current + 1) % VIDEOS.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [advanceTo])

  return (
    <>
      <div className="hero-canvas absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRefA}
          autoPlay
          muted
          playsInline
          preload="auto"
          src={srcA}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[800ms] ease-in-out ${
            activeSlot === 'A' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <video
          ref={videoRefB}
          autoPlay
          muted
          playsInline
          preload="auto"
          src={srcB}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[800ms] ease-in-out ${
            activeSlot === 'B' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: OVERLAY_GRADIENT }} />

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {VIDEOS.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Play video ${i + 1}`}
            onClick={() => i !== indexRef.current && advanceTo(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === displayIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </>
  )
}
