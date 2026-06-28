'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NAV_LINKS = [
  { href: '/', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
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

  const isDark = resolvedTheme === 'dark'

  return (
    <header
      ref={navRef}
      className={`nav sticky top-0 z-50 border-b border-rule dark:border-rule-dark backdrop-blur-md bg-paper/90 dark:bg-paper-dark/90 transition-shadow ${
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
                className="group relative text-sm font-sans text-ink dark:text-ink-dark"
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

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-1"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="block h-px w-5 bg-ink dark:bg-ink-dark" />
            <span className="block h-px w-5 bg-ink dark:bg-ink-dark" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden flex flex-col border-t border-rule dark:border-rule-dark px-6 py-4 gap-4">
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
