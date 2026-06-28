import { Suspense } from 'react'
import type { Metadata } from 'next'
import ProjectTabs from '@/components/projects/ProjectTabs'

export const metadata: Metadata = {
  title: 'Projects — Mahmudul Hasan Bappy',
  description: 'Academic studio work, built projects, and architectural visualization by Mahmudul Hasan Bappy.',
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectTabs />
    </Suspense>
  )
}
