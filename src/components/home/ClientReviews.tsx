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
    verified: true,
  },
  {
    id: 3,
    name: 'jopify1135',
    country: 'United States',
    countryCode: 'US',
    rating: 5,
    text: 'Great communication, very happy with the final product.',
    service: 'Poster Design',
    verified: true,
  },
  {
    id: 4,
    name: 'creative_arch01',
    country: 'United Kingdom',
    countryCode: 'GB',
    rating: 5,
    text: 'Excellent quality renders. He understood the brief perfectly and delivered beyond expectations. Clean, precise, and professional throughout.',
    service: '3D Modeling & Rendering',
    verified: true,
  },
  {
    id: 5,
    name: 'designstudio_ae',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    rating: 5,
    text: 'Outstanding work on our architectural visualization project. Very detail-oriented and responsive. Will definitely work with him again.',
    service: 'Architectural Visualization',
    verified: true,
  },
  {
    id: 6,
    name: 'realestate_pro',
    country: 'Canada',
    countryCode: 'CA',
    rating: 5,
    text: 'Delivered high quality floor plans and renders on time. Great attention to detail and very easy to communicate with. Highly satisfied.',
    service: '2D Drawings & Site Plans',
    verified: true,
  },
  {
    id: 7,
    name: 'archi_renders',
    country: 'Netherlands',
    countryCode: 'NL',
    rating: 5,
    text: 'Perfect execution of our interior visualization project. The lighting and material quality was superb. Prompt delivery and excellent revisions.',
    service: '3D Modeling & Rendering',
    verified: true,
  },
  {
    id: 8,
    name: 'build_concepts',
    country: 'Singapore',
    countryCode: 'SG',
    rating: 5,
    text: 'Fantastic work! The renders captured exactly what we envisioned. Professional, fast, and very skilled. Our client loved the results.',
    service: 'Architectural Visualization',
    verified: true,
  },
  {
    id: 9,
    name: 'homeplans_us',
    country: 'United States',
    countryCode: 'US',
    rating: 5,
    text: 'Great experience from start to finish. He asked all the right questions, understood the project fully, and delivered a stunning result.',
    service: 'Poster Design',
    verified: true,
  },
  {
    id: 10,
    name: 'arch_studio_fr',
    country: 'France',
    countryCode: 'FR',
    rating: 5,
    text: 'Very talented visualizer. The quality of the 3D renders was exceptional — photorealistic and on-brand. Communication was smooth throughout.',
    service: '3D Modeling & Rendering',
    verified: true,
  },
  {
    id: 11,
    name: 'designhub_sg',
    country: 'Singapore',
    countryCode: 'SG',
    rating: 5,
    text: 'Delivered exactly what was requested. Clean floor plans and great presentation boards. Very professional attitude and quick turnaround.',
    service: '2D Drawings & Site Plans',
    verified: true,
  },
  {
    id: 12,
    name: 'interiors_ca',
    country: 'Canada',
    countryCode: 'CA',
    rating: 5,
    text: 'Bappy created beautiful interior renders for our residential project. Realistic lighting, perfect material textures. Exceeded expectations.',
    service: 'Architectural Visualization',
    verified: true,
  },
  {
    id: 13,
    name: 'planmaker_uk',
    country: 'United Kingdom',
    countryCode: 'GB',
    rating: 5,
    text: 'Excellent 2D drawings — accurate dimensions, professional layout, and delivered ahead of schedule. Very impressed with the quality.',
    service: '2D Drawings & Site Plans',
    verified: true,
  },
  {
    id: 14,
    name: 'visionarch_de',
    country: 'Germany',
    countryCode: 'DE',
    rating: 5,
    text: 'High quality 3D architectural renders delivered with great professionalism. He incorporated all our feedback perfectly. Strongly recommended.',
    service: '3D Modeling & Rendering',
    verified: true,
  },
  {
    id: 15,
    name: 'render_studio',
    country: 'Australia',
    countryCode: 'AU',
    rating: 5,
    text: 'Superb work on our commercial building visualization. The exterior render was photorealistic and captured the design intent beautifully.',
    service: 'Architectural Visualization',
    verified: true,
  },
  {
    id: 16,
    name: 'buildpro_nz',
    country: 'New Zealand',
    countryCode: 'NZ',
    rating: 5,
    text: 'Great quality and very fast. Bappy was easy to work with and understood our requirements without needing extensive explanation. Will return.',
    service: 'Poster Design',
    verified: true,
  },
  {
    id: 17,
    name: 'arch_visuals',
    country: 'United States',
    countryCode: 'US',
    rating: 5,
    text: 'Professional service, clean output, and delivered within the agreed timeline. The presentation board was exactly what we needed for our client pitch.',
    service: 'Poster Design',
    verified: true,
  },
  {
    id: 18,
    name: 'studio_renders',
    country: 'India',
    countryCode: 'IN',
    rating: 5,
    text: 'Excellent architectural visualization work. Very detailed, realistic renders with great lighting. Communication was clear and professional throughout.',
    service: '3D Modeling & Rendering',
    verified: true,
  },
]


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
    <div className="w-80 flex-shrink-0 mr-4 p-6 bg-paper-card border border-rule shadow-sm flex flex-col min-h-[280px]">
      <div className="flex-shrink-0">
        <StarRating rating={review.rating} />
      </div>

      <div className="mt-3">
        <div className="font-serif text-4xl text-accent-red/20 leading-none mb-1 select-none">
          &ldquo;
        </div>
        <p className="text-sm leading-relaxed text-ink line-clamp-5">
          {review.text}
        </p>
      </div>

      <div className="border-t border-rule mt-auto pt-4 flex-shrink-0">
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
            </div>
            <span className="font-mono text-xs text-ink-faint">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/20x15/${review.countryCode.toLowerCase()}.png`}
                alt={review.country}
                width={20}
                height={15}
                style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}
              />
              {review.country}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex-shrink-0">
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
        <SectionLabel label="Client Reviews" count="18 Reviews" />

        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <span className="font-serif text-5xl text-ink leading-none">5.0</span>
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
