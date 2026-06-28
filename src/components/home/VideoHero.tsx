'use client'

import { useEffect, useRef, useState } from 'react'

const VIDEOS = ['/videos/walkthrough-1.mp4', '/videos/walkthrough-2.mp4', '/videos/walkthrough-3.mp4']
const INTERVAL_MS = 8000
const FADE_MS = 400

const OVERLAY_GRADIENT =
  'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)'

/** Full-bleed auto-advancing crossfade hero video, cycling 3 local walkthrough clips. */
export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % VIDEOS.length)
      }, FADE_MS)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.load()
    v.play().catch(() => {})
    setVisible(true)
  }, [index])

  return (
    <>
      <div className="hero-canvas absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={false}
          playsInline
          preload={index === 0 ? 'auto' : 'none'}
          src={VIDEOS[index]}
          className={`w-full h-full object-cover object-center transition-opacity duration-[400ms] ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: OVERLAY_GRADIENT }} />

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {VIDEOS.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Play video ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </>
  )
}
