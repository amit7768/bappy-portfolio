import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import SkillDots from '@/components/about/SkillDots'
import AwardsSection from '@/components/about/AwardsSection'
import EducationTimeline from '@/components/about/EducationTimeline'

export const metadata: Metadata = {
  title: 'About — Md. Mahmudul Hasan Bappy',
  description: 'Architect and visualizer at KUET — background, skills, awards, and education.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillDots />
      <AwardsSection />
      <EducationTimeline />
    </>
  )
}
