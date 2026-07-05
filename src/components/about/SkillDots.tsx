'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SectionLabel from '@/components/ui/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  { name: 'AutoCAD', pct: 98 },
  { name: 'SketchUp', pct: 96 },
  { name: 'Photoshop', pct: 95 },
  { name: 'V-Ray', pct: 88 },
  { name: 'D5 Render', pct: 88 },
  { name: 'InDesign', pct: 86 },
  { name: 'Lumion', pct: 80 },
  { name: 'Procreate', pct: 70 },
]

export default function SkillDots() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const bars = Array.from(
        sectionRef.current.querySelectorAll<HTMLElement>('.skill-bar-fill')
      )
      const labels = Array.from(
        sectionRef.current.querySelectorAll<HTMLElement>('.skill-pct-label')
      )

      bars.forEach((bar, i) => {
        const target = Number(bar.dataset.pct)
        const labelEl = labels[i]
        const counterObj = { val: 0 }

        gsap.to(bar, {
          width: target + '%',
          duration: 1.2,
          ease: 'power2.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reset',
          },
        })

        gsap.to(counterObj, {
          val: target,
          duration: 1.2,
          ease: 'power2.out',
          delay: i * 0.1,
          onUpdate() {
            if (labelEl) labelEl.textContent = Math.round(counterObj.val) + '%'
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reset',
          },
        })

        gsap.fromTo(
          labelEl,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            delay: i * 0.1 + 1.0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reset',
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="max-w-site mx-auto px-6 py-16">
      <SectionLabel label="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group flex items-center gap-4">
            <span className="font-sans font-medium text-sm text-ink min-w-[100px] transition-colors duration-300 group-hover:text-accent-red">
              {skill.name}
            </span>
            <div className="relative flex-1 h-px bg-rule">
              <div
                className="skill-bar-fill absolute top-[-1px] left-0 h-[3px] bg-ink transition-colors duration-300 group-hover:bg-accent-red"
                data-pct={skill.pct}
                style={{ width: '0%' }}
              />
            </div>
            <span className="skill-pct-label font-mono text-xs text-ink-faint min-w-[36px] text-right opacity-0">
              0%
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
