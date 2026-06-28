'use client'

import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type RevealDirection = 'up' | 'left' | 'clip'

interface RevealTextProps {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
}

export default function RevealText({ children, direction = 'up', delay = 0, className }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    const trigger = {
      trigger: ref.current,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }

    if (direction === 'clip') {
      gsap.fromTo(
        ref.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.7, delay, ease: 'power2.out', scrollTrigger: trigger }
      )
      return
    }

    gsap.from(ref.current, {
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : 0,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power2.out',
      scrollTrigger: trigger,
    })
  }, [direction, delay])

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      {children}
    </div>
  )
}
