'use client'

import { useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AcademicList from './AcademicList'
import BuiltProjects from './BuiltProjects'
import ArchvizGrid from './ArchvizGrid'

type Tab = 'academic' | 'built' | 'archviz'

const TABS: { key: Tab; label: string }[] = [
  { key: 'academic', label: 'Academic Work' },
  { key: 'built', label: 'Built Projects' },
  { key: 'archviz', label: 'Archviz & Visualization' },
]

export default function ProjectTabs() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tab = (searchParams.get('tab') as Tab) ?? 'academic'
  const contentRef = useRef<HTMLDivElement>(null)

  const setTab = (next: Tab) => {
    router.push(`/projects?tab=${next}`, { scroll: false })
  }

  useGSAP(
    () => {
      if (!contentRef.current) return
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
    },
    { dependencies: [tab], scope: contentRef }
  )

  return (
    <div className="max-w-site mx-auto px-6 py-16">
      <div className="flex gap-2 mb-10">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`font-mono text-xs uppercase tracking-widest px-4 py-2 transition-colors ${
              tab === t.key
                ? 'bg-ink text-paper'
                : 'text-ink-soft hover:border hover:border-ink:border-ink-dark'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div ref={contentRef}>
        {tab === 'academic' && <AcademicList />}
        {tab === 'built' && <BuiltProjects />}
        {tab === 'archviz' && <ArchvizGrid />}
      </div>
    </div>
  )
}
