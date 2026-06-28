'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import VideoHero from './VideoHero'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.4, ease: 'power2.out' })
      .from(
        '.hero-word',
        { y: '100%', opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
        '-=0.1'
      )
      .from('.hero-tagline', { opacity: 0, x: 20, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from('.hero-meta', { opacity: 0, duration: 0.4 }, '-=0.2')
      .from('.hero-cta', { opacity: 0, scale: 0.95, duration: 0.4, stagger: 0.1 }, '-=0.2')
      .from('.hero-canvas', { opacity: 0, duration: 1.2, ease: 'power1.out' }, 0.4)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <VideoHero />

      <div className="relative z-10 max-w-2xl w-full px-8 md:px-16">
        <p className="hero-eyebrow font-mono text-xs uppercase tracking-widest text-white/70 mb-6">
          Architect · Visualizer · Interior Designer
        </p>

        <h1 className="font-serif text-white text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.0]">
          <span className="block overflow-hidden">
            <span className="hero-word inline-block whitespace-nowrap max-[380px]:whitespace-normal">
              Md. Mahmudul
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block whitespace-nowrap max-[380px]:whitespace-normal">
              Hasan Bappy
            </span>
          </span>
        </h1>

        <p className="hero-tagline font-serif italic text-xl md:text-2xl mt-6 text-white/85 whitespace-normal sm:whitespace-nowrap">
          Architecture that lives between the sketch and the sky.
        </p>

        <div className="hero-meta mt-8">

          <p className="font-sans text-sm font-light italic text-white/70 mt-1">
            Designing spaces that breathe — where structure meets soul.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="hero-cta inline-block px-5 py-3 bg-white text-black hover:bg-white/90 font-mono text-xs uppercase tracking-widest transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="hero-cta inline-block px-5 py-3 border border-white text-white hover:bg-white/10 font-mono text-xs uppercase tracking-widest transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
