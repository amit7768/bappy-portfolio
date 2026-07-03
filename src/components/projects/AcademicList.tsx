'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ACADEMIC_PROJECTS } from '@/data/academic'
import SheetRef from '@/components/ui/SheetRef'
import SectionLabel from '@/components/ui/SectionLabel'

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
        {ACADEMIC_PROJECTS.map((project) => {
          const image = project.behanceImg ?? project.img

          return (
            <div
              key={project.sheet}
              className="academic-row group relative grid md:grid-cols-[80px_1fr_240px] gap-6 items-start border-b border-rule dark:border-rule-dark py-8 transition-colors duration-300 hover:bg-paper-dim dark:hover:bg-paper-dim-dark"
            >
              {/* Red left border scaleY on hover */}
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
                      className="font-mono text-[10px] uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark border border-rule dark:border-rule-dark px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-ink-soft dark:text-ink-dark/90 mt-3 max-w-2xl">
                  {project.desc}
                </p>
                <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-3">
                  {project.location}
                </p>
              </div>

              <div className="row-right relative w-full aspect-[4/3] overflow-hidden bg-paper-dim dark:bg-paper-dim-dark">
                {image ? (
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[500ms] ease-out group-hover:scale-105"
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

      {/* More coming section */}
      <div
        ref={closingRef}
        className="w-full border-t border-rule dark:border-rule-dark py-16 px-8 flex flex-col items-center"
      >
        <div className="w-16 h-px bg-accent-red mx-auto mb-8" />

        <span className="font-mono text-xs text-accent-red">AP-∞</span>

        <h2 className="font-serif text-2xl md:text-3xl mt-3 text-center">
          More work in progress.
        </h2>

        <p className="font-sans text-sm text-ink-soft dark:text-ink-soft-dark mt-3 text-center">
          New projects being documented — check back soon or reach out directly.
        </p>

        <div className="flex gap-2 mt-6 items-center">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint dark:bg-ink-faint-dark" />
        </div>

        <Link
          href="https://behance.net/md_mahmudul_bappy"
          target="_blank"
          rel="noopener noreferrer"
          className="behance-link mt-8 font-mono text-sm text-ink-soft dark:text-ink-soft-dark hover:text-accent-red transition-colors duration-200"
        >
          View all on Behance ↗
        </Link>
      </div>
    </div>
  )
}
