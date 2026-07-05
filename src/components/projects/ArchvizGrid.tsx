'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ARCHVIZ_RENDERS, ARCHVIZ_VIDEOS } from '@/data/archviz'
import { driveVideo } from '@/lib/drive'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageLightbox from '@/components/ui/ImageLightbox'
import VideoLightbox from '@/components/ui/VideoLightbox'
import MoreComingPanel from '@/components/ui/MoreComingPanel'

const INITIAL_SHOW = 16

type Filter = 'all' | 'renders' | 'walkthrough'

type GridItem =
  | { type: 'render'; src: string; cap: string }
  | { type: 'video'; id: string; cap: string; thumb: string }

export default function ArchvizGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const shouldAnimateNewRef = useRef(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const items: GridItem[] = useMemo(() => {
    const renders: GridItem[] = ARCHVIZ_RENDERS.map((r) => ({ type: 'render', ...r }))
    const videos: GridItem[] = ARCHVIZ_VIDEOS.map((v) => ({ type: 'video', ...v }))
    if (filter === 'renders') return renders
    if (filter === 'walkthrough') return videos
    return [...renders, ...videos]
  }, [filter])

  const visibleItems = showAll ? items : items.slice(0, INITIAL_SHOW)
  const hasMore = !showAll && items.length > INITIAL_SHOW

  // Reset show-all when filter changes
  useEffect(() => {
    setShowAll(false)
  }, [filter])

  // Animate newly revealed items after load more
  useEffect(() => {
    if (!shouldAnimateNewRef.current || !gridRef.current) return
    shouldAnimateNewRef.current = false
    const newItems = gridRef.current.querySelectorAll('.archviz-new-item')
    if (!newItems.length) return
    gsap.fromTo(
      Array.from(newItems),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    )
  }, [showAll])

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

  const handleLoadMore = () => {
    shouldAnimateNewRef.current = true
    setShowAll(true)
  }

  return (
    <div>
      <SectionLabel
        label="Archviz & Visualization"
        count={`${ARCHVIZ_RENDERS.length} Renders · ${ARCHVIZ_VIDEOS.length} Videos`}
      />

      <div className="flex gap-3 mb-6">
        {(['all', 'renders', 'walkthrough'] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 border ${
              filter === f
                ? 'bg-ink text-paper border-ink'
                : 'border-rule text-ink-soft'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-1">
        {visibleItems.map((item, idx) => {
          const isNew = showAll && idx >= INITIAL_SHOW
          const itemClass = `${isNew ? 'archviz-new-item' : 'archviz-item'} mb-1 break-inside-avoid`

          return (
            <div key={`${item.type}-${idx}`} className={itemClass}>
              {item.type === 'render' ? (
                <button
                  type="button"
                  onClick={() => setActiveImage(item.src)}
                  className="group relative block w-full"
                  data-cursor-view
                >
                  <Image
                    src={item.src}
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
          )
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={handleLoadMore}
            className="font-mono text-xs uppercase tracking-widest px-6 py-3 border border-rule text-ink-soft hover:border-ink:border-ink-dark hover:text-ink:text-ink-dark transition-colors duration-200"
          >
            Load More ({items.length - INITIAL_SHOW} remaining)
          </button>
        </div>
      )}

      <MoreComingPanel
        heading="More renders being added."
        sub="New visualization work is uploaded regularly — follow on Behance for the latest."
        ctaText="Follow on Behance ↗"
        ctaHref="https://behance.net/md_mahmudul_bappy"
        ctaExternal
      />

      {activeImage && (
        <ImageLightbox
          src={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
      {activeVideo && (
        <VideoLightbox src={driveVideo(activeVideo)} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  )
}
