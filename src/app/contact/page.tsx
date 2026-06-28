import type { Metadata } from 'next'
import ContactPanel from '@/components/contact/ContactPanel'

export const metadata: Metadata = {
  title: 'Contact — Mahmudul Hasan Bappy',
  description: 'Get in touch with Mahmudul Hasan Bappy for freelance visualization, remote work, and collaboration.',
}

export default function ContactPage() {
  return <ContactPanel />
}
