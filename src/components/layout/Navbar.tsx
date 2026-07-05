'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.6, ease: 'power3.out' })
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={navRef}
      className={`nav sticky top-0 z-50 border-b border-rule backdrop-blur-md bg-paper/90 transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-site mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="font-mono font-medium text-sm tracking-wide">
          <span className="name-gradient hidden sm:inline">Md. Mahmudul Hasan Bappy</span>
          <span className="name-gradient sm:hidden">M. H. Bappy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-sans text-ink"
              >
                <span className="flex flex-col items-center gap-1">
                  {link.label}
                  <span
                    className={`block h-[5px] w-[5px] rounded-full bg-accent-red transition-opacity ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </span>
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block h-px w-5 bg-ink" />
          <span className="block h-px w-5 bg-ink" />
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col border-t border-rule px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
