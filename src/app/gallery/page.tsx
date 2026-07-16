'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SectionLabel from '@/components/ui/SectionLabel'
import ImageLightbox from '@/components/ui/ImageLightbox'

const GALLERY_IMAGES = [
  '/assets/projects/av-01.jpg',
  '/assets/projects/ap-03-ando.jpg',
  '/assets/projects/sketch-1.jpg',
  '/assets/projects/bp-01-narinda-1.jpg',
  '/assets/projects/av-02.jpg',
  '/assets/projects/ap-05-nexus.jpg',
  '/assets/projects/sketch-2.jpg',
  '/assets/projects/av-03.jpg',
  '/assets/projects/ap-01-mars.jpg',
  '/assets/projects/banner-nm.jpg',
  '/assets/projects/av-04.jpg',
  '/assets/projects/bp-02-villa-1.jpg',
  '/assets/projects/ap-04-highway.jpg',
  '/assets/projects/sketch-3.jpg',
  '/assets/projects/av-05.jpg',
  '/assets/projects/ap-08-housing.jpg',
  '/assets/projects/strip-1.jpg',
  '/assets/projects/av-06.jpg',
  '/assets/projects/bp-01-narinda-2.jpg',
  '/assets/projects/ap-07-urban.jpg',
  '/assets/projects/sketch-4.jpg',
  '/assets/projects/av-07.jpg',
  '/assets/projects/ap-02-cultural.jpg',
  '/assets/projects/banner-gsss.jpg',
  '/assets/projects/av-08.jpg',
  '/assets/projects/bp-02-villa-2.jpg',
  '/assets/projects/ap-09-landscape.jpg',
  '/assets/projects/sketch-5.jpg',
  '/assets/projects/av-09.jpg',
  '/assets/projects/ap-10-interior.jpg',
  '/assets/projects/strip-2.jpg',
  '/assets/projects/av-10.jpg',
  '/assets/projects/bp-01-narinda-3.jpg',
  '/assets/projects/sketch-6.jpg',
  '/assets/projects/av-11.jpg',
  '/assets/projects/ap-06-pedestrian.jpg',
  '/assets/projects/strip-3.jpg',
  '/assets/projects/av-12.jpg',
  '/assets/projects/award-main.jpg',
]

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      gsap.fromTo(
        containerRef.current.querySelectorAll('.gallery-img-wrap'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: 'power2.out' }
      )
    },
    { scope: containerRef }
  )

  return (
    <main className="min-h-screen bg-paper">
      <div className="max-w-site mx-auto px-6 py-12">
        <SectionLabel label="GALLERY" count="Photography & Sketches" />
      </div>

      <div
        ref={containerRef}
        className="px-4 columns-2 md:columns-3 lg:columns-4 gap-[4px] pb-16"
      >
        {GALLERY_IMAGES.map((src, idx) => (
          <div
            key={src}
            className="gallery-img-wrap mb-[4px] break-inside-avoid overflow-hidden cursor-pointer group relative"
            onClick={() => setActiveIdx(idx)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-auto block transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-[400ms] ease-out group-hover:bg-black/20 pointer-events-none" />
          </div>
        ))}
      </div>

      {activeIdx !== null && (
        <ImageLightbox
          src={GALLERY_IMAGES[activeIdx]}
          onClose={() => setActiveIdx(null)}
          onPrev={activeIdx > 0 ? () => setActiveIdx(activeIdx - 1) : undefined}
          onNext={activeIdx < GALLERY_IMAGES.length - 1 ? () => setActiveIdx(activeIdx + 1) : undefined}
        />
      )}
    </main>
  )
}
