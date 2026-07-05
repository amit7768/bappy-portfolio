'use client'

import { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface MoreComingPanelProps {
  heading: string
  sub: string
  ctaText: string
  ctaHref: string
  ctaExternal?: boolean
}

export default function MoreComingPanel({
  heading,
  sub,
  ctaText,
  ctaHref,
  ctaExternal = false,
}: MoreComingPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!panelRef.current) return
      gsap.from(panelRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: panelRef }
  )

  return (
    <div
      ref={panelRef}
      className="w-full border-t border-rule py-16 px-8 flex flex-col items-center"
    >
      <style>{`
        @keyframes mcp-dot-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .mcp-pulse-dot { animation: mcp-dot-pulse 1.2s ease-in-out infinite; }
        .mcp-pulse-dot:nth-child(2) { animation-delay: 0.4s; }
        .mcp-pulse-dot:nth-child(3) { animation-delay: 0.8s; }
        .mcp-cta-link { position: relative; display: inline-block; }
        .mcp-cta-link::after {
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
        .mcp-cta-link:hover::after { transform: scaleX(1); }
      `}</style>

      <div className="w-16 h-px bg-accent-red mx-auto mb-8" />

      <span className="font-mono text-xs text-accent-red">AP-∞</span>

      <h2 className="font-serif text-2xl md:text-3xl mt-3 text-center">{heading}</h2>

      <p className="font-sans text-sm text-ink-soft mt-3 text-center max-w-md">
        {sub}
      </p>

      <div className="flex gap-2 mt-6 items-center">
        <span className="mcp-pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
        <span className="mcp-pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
        <span className="mcp-pulse-dot w-1.5 h-1.5 rounded-full bg-ink-faint" />
      </div>

      <Link
        href={ctaHref}
        {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="mcp-cta-link mt-8 font-mono text-sm text-ink-soft hover:text-accent-red transition-colors duration-200"
      >
        {ctaText}
      </Link>
    </div>
  )
}
