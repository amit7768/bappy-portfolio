'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { driveImg } from '@/lib/drive'
import ImageLightbox from '@/components/ui/ImageLightbox'
import type { BuiltProjectImage } from '@/types'

interface BuiltCarouselProps {
  images: BuiltProjectImage[]
  projectTitle: string
}

export default function BuiltCarousel({ images, projectTitle }: BuiltCarouselProps) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef(0)

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length)
  const next = () => setActive((i) => (i + 1) % images.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 40) prev()
    if (delta < -40) next()
  }

  const current = images[active]

  return (
    <div>
      <div
        className="relative aspect-[4/3] overflow-hidden bg-paper-dim dark:bg-paper-dim-dark"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
            aria-label={`Open ${img.cap}`}
          >
            <Image src={driveImg(img.id, 'w800')} alt={img.cap} fill unoptimized className="object-cover" />
          </button>
        ))}

        <button
          type="button"
          aria-label="Previous image"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-paper/80 dark:bg-paper-dark/80 p-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-paper/80 dark:bg-paper-dark/80 p-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 w-1.5 rounded-full ${i === active ? 'bg-accent-red' : 'bg-ink-faint dark:bg-ink-faint-dark'}`}
          />
        ))}
      </div>

      <p className="font-mono text-xs text-center text-ink-faint dark:text-ink-faint-dark mt-2">
        {current.cap}
      </p>

      {lightboxOpen && (
        <ImageLightbox
          src={driveImg(current.id, 'w1200')}
          caption={`${projectTitle} — ${current.cap}`}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  )
}
