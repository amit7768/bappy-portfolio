'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ACADEMIC_PROJECTS } from '@/data/academic'
import SheetRef from '@/components/ui/SheetRef'
import SectionLabel from '@/components/ui/SectionLabel'

export default function AcademicList() {
  const listRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!listRef.current) return
      gsap.from(listRef.current.querySelectorAll('.academic-row'), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      })
    },
    { scope: listRef }
  )

  return (
    <div ref={listRef}>
      <SectionLabel label="Academic Work" count={`${ACADEMIC_PROJECTS.length} Projects`} />

      <div className="flex flex-col">
        {ACADEMIC_PROJECTS.map((project) => {
          const image = project.behanceImg ?? project.img

          return (
            <div
              key={project.sheet}
              className="academic-row group grid md:grid-cols-[80px_1fr_240px] gap-6 items-start border-b border-rule dark:border-rule-dark py-8"
            >
              <SheetRef sheet={project.sheet} />

              <div>
                <h3 className="font-serif text-2xl">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark border border-rule dark:border-rule-dark px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-ink-soft dark:text-ink-soft-dark mt-3 max-w-2xl">
                  {project.desc}
                </p>
                <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-3">
                  {project.year} · {project.location}
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper-dim dark:bg-paper-dim-dark">
                {image ? (
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[6000ms] ease-linear group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-1/3 h-1/3 opacity-30" stroke="currentColor" fill="none">
                      <rect x="10" y="10" width="80" height="80" strokeWidth="1" />
                      <line x1="10" y1="10" x2="90" y2="90" strokeWidth="1" />
                      <line x1="90" y1="10" x2="10" y2="90" strokeWidth="1" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
