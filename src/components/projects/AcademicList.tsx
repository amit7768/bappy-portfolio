'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ACADEMIC_PROJECTS } from '@/data/academic'
import SheetRef from '@/components/ui/SheetRef'
import SectionLabel from '@/components/ui/SectionLabel'
import AcademicCarousel from '@/components/projects/AcademicCarousel'

gsap.registerPlugin(ScrollTrigger)

export default function AcademicList() {
  const containerRef = useRef<HTMLDivElement>(null)
  const closingRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      containerRef.current.querySelectorAll('.academic-row').forEach((row) => {
        const leftEls = Array.from(row.querySelectorAll('.row-left'))
        const rightEl = row.querySelector('.row-right')

        if (leftEls.length) {
          gsap.from(leftEls, {
            opacity: 0,
            x: -60,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        }

        if (rightEl) {
          gsap.from(rightEl, {
            opacity: 0,
            x: 60,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        }
      })

      if (closingRef.current) {
        gsap.from(closingRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .pulse-dot { animation: dot-pulse 1.2s ease-in-out infinite; }
        .pulse-dot:nth-child(2) { animation-delay: 0.4s; }
        .pulse-dot:nth-child(3) { animation-delay: 0.8s; }
        .behance-link { position: relative; display: inline-block; }
        .behance-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .behance-link:hover::after { transform: scaleX(1); }
      `}</style>

      <SectionLabel label="Academic Work" count={`${ACADEMIC_PROJECTS.length} Projects`} />

      <div className="flex flex-col">
        {ACADEMIC_PROJECTS.map((project) => (
          <div
            key={project.sheet}
            className="academic-row group relative grid md:grid-cols-[80px_1fr_240px] gap-6 items-start border-b border-rule py-8"
          >
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-red origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

            <div className="row-left">
              <SheetRef sheet={project.sheet} />
            </div>

            <div className="row-left">
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest text-ink-faint border border-rule px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-ink-soft mt-3 max-w-2xl">
                {project.desc}
              </p>
              <p className="font-mono text-xs text-ink-faint mt-3">
                {project.location}
              </p>
            </div>

            <div className="row-right w-full">
              <AcademicCarousel images={project.images} title={project.title} />
            </div>
          </div>
        ))}
      </div>

      {/* More coming section */}
      <div
        ref={closingRef}
        className="w-full border-t border-rule py-16 px-8 flex flex-col items-center"
      >
        <div className="w-16 h-px bg-accent-red mx-auto mb-8" />

        <span className="font-mono text-xs text-accent-red">AP-∞</span>

        <h2 className="font-serif text-2xl md:text-3xl mt-3 text-center">
          More work in progress.
        </h2>

        <p className="font-sans text-sm text-ink-soft mt-3 text-center">
          New projects being documented — check back soon or reach out directly.
        </p>

        <div className="flex gap-2 mt-6 items-center">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
        </div>

        <Link
          href="https://behance.net/md_mahmudul_bappy"
          target="_blank"
          rel="noopener noreferrer"
          className="behance-link mt-8 font-mono text-sm text-ink-soft hover:text-accent-red transition-colors duration-200"
        >
          View all on Behance ↗
        </Link>
      </div>
    </div>
  )
}
