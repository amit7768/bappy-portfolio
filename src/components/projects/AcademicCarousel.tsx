'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import ImageLightbox from '@/components/ui/ImageLightbox'

interface AcademicCarouselProps {
  images: string[]
  title: string
}

export default function AcademicCarousel({ images, title }: AcademicCarouselProps) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef(0)

  const multi = images.length > 1
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

  return (
    <div>
      <div
        className="relative w-full aspect-[4/3] overflow-hidden bg-paper-dim cursor-pointer group"
        onTouchStart={multi ? onTouchStart : undefined}
        onTouchEnd={multi ? onTouchEnd : undefined}
        onClick={() => setLightboxOpen(true)}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={title}
              fill
              unoptimized
              className="object-cover transition-transform duration-[500ms] ease-out group-hover:scale-105"
            />
          </div>
        ))}

        {multi && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-paper/80 p-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-paper/80 p-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {multi && (
        <div className="flex gap-1.5 justify-center mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${i === active ? 'bg-accent-red' : 'bg-ink-faint'}`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          src={images[active]}
          onClose={() => setLightboxOpen(false)}
          onPrev={multi ? prev : undefined}
          onNext={multi ? next : undefined}
        />
      )}
    </div>
  )
}
