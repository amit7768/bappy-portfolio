'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ARCHVIZ_RENDERS, ARCHVIZ_VIDEOS } from '@/data/archviz'
import { driveImg, driveVideo } from '@/lib/drive'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageLightbox from '@/components/ui/ImageLightbox'
import VideoLightbox from '@/components/ui/VideoLightbox'

type Filter = 'all' | 'renders' | 'walkthrough'

type GridItem =
  | { type: 'render'; id: string; cap: string }
  | { type: 'video'; id: string; cap: string; thumb: string }

export default function ArchvizGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const items: GridItem[] = useMemo(() => {
    const renders: GridItem[] = ARCHVIZ_RENDERS.map((r) => ({ type: 'render', ...r }))
    const videos: GridItem[] = ARCHVIZ_VIDEOS.map((v) => ({ type: 'video', ...v }))
    if (filter === 'renders') return renders
    if (filter === 'walkthrough') return videos
    return [...renders, ...videos]
  }, [filter])

  useGSAP(
    () => {
      if (!gridRef.current) return
      gsap.fromTo(
        gridRef.current.querySelectorAll('.archviz-item'),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out' }
      )
    },
    { dependencies: [filter], scope: gridRef }
  )

  return (
    <div>
      <SectionLabel label="Archviz & Visualization" count={`${items.length} Items`} />

      <div className="flex gap-3 mb-6">
        {(['all', 'renders', 'walkthrough'] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 border ${
              filter === f
                ? 'bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark border-ink dark:border-ink-dark'
                : 'border-rule dark:border-rule-dark text-ink-soft dark:text-ink-soft-dark'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-3">
        {items.map((item) => (
          <div key={`${item.type}-${item.id}`} className="archviz-item mb-3 break-inside-avoid">
            {item.type === 'render' ? (
              <button
                type="button"
                onClick={() => setActiveImage(item.id)}
                className="group relative block w-full"
                data-cursor-view
              >
                <Image
                  src={driveImg(item.id, 'w400')}
                  alt={item.cap}
                  width={400}
                  height={500}
                  unoptimized
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                  <span className="font-mono text-xs text-paper">{item.cap}</span>
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setActiveVideo(item.id)}
                className="group relative block w-full"
              >
                <Image
                  src={item.thumb}
                  alt={item.cap}
                  width={400}
                  height={500}
                  unoptimized
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0D0D0B">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      {activeImage && (
        <ImageLightbox
          src={driveImg(activeImage, 'w1200')}
          onClose={() => setActiveImage(null)}
        />
      )}
      {activeVideo && (
        <VideoLightbox src={driveVideo(activeVideo)} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  )
}
