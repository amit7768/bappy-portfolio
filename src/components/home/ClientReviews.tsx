'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionLabel from '@/components/ui/SectionLabel'
import type { ClientReview } from '@/types'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS: ClientReview[] = [
  {
    id: 1,
    name: 'samira_sam92',
    country: 'Germany',
    countryCode: 'DE',
    rating: 5,
    text: 'The collaboration was excellent throughout. The 3D model was delivered with exceptional precision, a high level of detail, and on time. Revisions were handled quickly and reliably. Very professional work with outstanding design quality — highly recommended without reservation.',
    service: '3D Modeling & Rendering',
    duration: '1 day',
    verified: true,
  },
  {
    id: 2,
    name: 'fahadjafari',
    country: 'Australia',
    countryCode: 'AU',
    rating: 5,
    text: 'Very good and very efficient with his work. I would highly recommend him for your creative work and if you have a time crunch — he delivers.',
    service: 'Architectural Graphics',
    duration: '2 days',
    verified: true,
  },
  {
    id: 3,
    name: 'sarahsatt',
    country: 'India',
    countryCode: 'IN',
    rating: 5,
    text: 'He was extremely understanding and knew exactly how to go about the task given. He was polite and had fast replies too. Great experience overall.',
    service: '3D Modeling & Rendering',
    duration: '6 days',
    verified: true,
    repeatClient: true,
  },
  {
    id: 4,
    name: 'jopify1135',
    country: 'United States',
    countryCode: 'US',
    rating: 5,
    text: 'Great communication, very happy with the final product.',
    service: 'Poster Design',
    duration: '3 days',
    verified: true,
  },
]


function flagEmoji(code: string): string {
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('')
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const full = i + 1 <= Math.floor(rating)
        const partial = !full && i < rating
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={full ? '#B91C1C' : 'none'}
              fillOpacity={partial ? 0.45 : undefined}
              stroke="#B91C1C"
              strokeWidth="1.5"
            />
          </svg>
        )
      })}
      <span className="font-mono text-xs text-ink-faint ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

function ReviewCard({ review }: { review: ClientReview }) {
  const initial = review.name[0].toUpperCase()
  return (
    <div className="w-80 flex-shrink-0 mr-4 p-6 bg-paper-card border border-rule shadow-sm">
      <StarRating rating={review.rating} />

      <div className="mt-3">
        <div className="font-serif text-4xl text-accent-red/20 leading-none mb-1 select-none">
          &ldquo;
        </div>
        <p className="text-sm leading-relaxed text-ink line-clamp-4">
          {review.text}
        </p>
      </div>

      <div className="border-t border-rule mt-4 pt-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
            <span className="font-mono text-sm text-paper leading-none">
              {initial}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-sans text-sm font-medium text-ink truncate">
                {review.name}
              </span>
              {review.repeatClient && (
                <span className="font-mono text-[10px] text-accent-red border border-accent-red/30 px-1.5 py-0.5 flex-shrink-0">
                  Repeat Client
                </span>
              )}
            </div>
            <span className="font-mono text-xs text-ink-faint">
              {flagEmoji(review.countryCode)} {review.country}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
          {review.service}
        </span>
      </div>
    </div>
  )
}

export default function ClientReviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const pauseMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'paused'
  }
  const resumeMarquee = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = 'running'
  }

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (rowRef.current) {
        gsap.from(rowRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="bg-paper-dim py-20">
      {/* Header */}
      <div ref={headerRef} className="max-w-site mx-auto px-6 mb-12">
        <SectionLabel label="Client Reviews" count="4 Reviews" />

        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <span className="font-serif text-5xl text-ink leading-none">4.6</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#B91C1C">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="font-sans text-sm text-ink-soft">
            from verified clients
          </span>
        </div>
      </div>

      {/* Single marquee row */}
      <div
        ref={rowRef}
        className="overflow-hidden"
        onMouseEnter={pauseMarquee}
        onMouseLeave={resumeMarquee}
      >
        <div ref={marqueeRef} className="flex gap-6 marquee-left w-max">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

    </section>
  )
}
