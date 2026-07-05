'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface Stat {
  value: number
  suffix: string
  label: [string, string]
}

const STATS: Stat[] = [
  { value: 10, suffix: '+', label: ['Academic', 'Projects'] },
  { value: 2, suffix: '', label: ['Built', 'Projects'] },
  { value: 3, suffix: '', label: ['Competition', 'Awards'] },
  { value: 25, suffix: '+', label: ['Archviz', 'Renders'] },
]

function StatCounter({ stat }: { stat: Stat }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const suffixRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!rootRef.current || !numRef.current) return
    const target = { value: 0 }
    gsap.to(target, {
      value: stat.value,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reset',
      },
      onUpdate: () => {
        const rounded = Math.round(target.value)
        if (numRef.current) numRef.current.textContent = rounded.toString()
        if (suffixRef.current) {
          suffixRef.current.style.opacity = rounded >= stat.value ? '1' : '0'
        }
      },
    })
  }, [stat.value])

  return (
    <div ref={rootRef} className="flex-1 text-center py-10">
      <div className="font-serif text-[clamp(2.5rem,6vw,4rem)]">
        <span ref={numRef}>0</span>
        <span ref={suffixRef} className="opacity-0">
          {stat.suffix}
        </span>
      </div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-faint mt-2">
        {stat.label[0]}
        <br />
        {stat.label[1]}
      </div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <div className="flex flex-wrap border-t border-b border-rule max-w-site mx-auto px-6">
      {STATS.map((stat) => (
        <StatCounter key={stat.label.join('-')} stat={stat} />
      ))}
    </div>
  )
}
