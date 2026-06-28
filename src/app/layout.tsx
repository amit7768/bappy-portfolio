import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/layout/CustomCursor'
import ScrollProgress from '@/components/layout/ScrollProgress'
import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahmudul Hasan Bappy — Architect & Visualizer',
  description:
    'Portfolio of Md. Mahmudul Hasan Bappy — Architect, Architectural Visualizer, and Interior Designer based in Dhaka, Bangladesh. KUET Department of Architecture.',
  openGraph: {
    title: 'Mahmudul Hasan Bappy — Architect & Visualizer',
    description: 'Architecture that lives between the sketch and the sky.',
    images: [{ url: '/assets/monument-render.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmudul Hasan Bappy — Architect & Visualizer',
    images: ['/assets/monument-render.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${dmSans.variable} ${ibmMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div id="scroll-progress" />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
