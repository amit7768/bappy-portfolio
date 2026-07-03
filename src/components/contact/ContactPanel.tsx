'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CONTACT } from '@/data/contact'

const HERO_WORDS = ["Let’s", 'build', 'something', 'worth', 'building']

export default function ContactPanel() {
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const wordEls = sectionRef.current.querySelectorAll<HTMLElement>('.hero-word')
      const periodEl = sectionRef.current.querySelector<HTMLElement>('.hero-period')

      gsap.from(wordEls, {
        y: '100%',
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      })

      if (periodEl) {
        gsap.from(periodEl, {
          y: '100%',
          duration: 0.7,
          delay: HERO_WORDS.length * 0.08,
          ease: 'power3.out',
        })
        gsap.to(periodEl, {
          color: '#B91C1C',
          duration: 0.4,
          delay: 0.8,
        })
      }

      const links = sectionRef.current.querySelectorAll<HTMLElement>('.social-link')
      gsap.from(links, {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.4,
      })
    },
    { scope: sectionRef }
  )

  return (
    <>
      <style>{`
        @keyframes avail-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        .avail-dot { animation: avail-pulse 1.5s ease-in-out infinite; }
        .contact-grid-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23E0DFDA' stroke-width='0.5'%3E%3Cpath d='M40 0L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 40px 40px;
        }
        .dark .contact-grid-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232C2C28' stroke-width='0.5'%3E%3Cpath d='M40 0L0 0 0 40'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <div className="contact-grid-bg fixed inset-0 -z-10 opacity-[0.4] pointer-events-none" />

      <section ref={sectionRef} className="max-w-site mx-auto px-6 py-24">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 border border-rule dark:border-rule-dark px-3 py-1.5 mb-8">
          <span className="avail-dot block w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <span className="font-mono text-xs text-ink-soft dark:text-ink-soft-dark">
            Available for new projects
          </span>
        </div>

        {/* Hero heading — word-by-word slide up */}
        <h1 className="font-serif italic text-4xl md:text-5xl max-w-2xl leading-tight">
          {HERO_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <span className="hero-word inline-block">{word}</span>
              {i < HERO_WORDS.length - 1 && ' '}
            </span>
          ))}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="hero-period inline-block">.</span>
          </span>
        </h1>

        <p className="text-sm text-ink-soft dark:text-ink-soft-dark mt-4 max-w-xl">
          Available for freelance visualization, remote work, and internships — from Dhaka to
          anywhere.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {/* Email with copy tooltip */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark block mb-1">
                Email
              </span>
              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-serif text-xl hover:text-accent-red transition-colors duration-200 text-left"
                >
                  {CONTACT.email}
                </button>
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-mono text-xs bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark px-2 py-1 whitespace-nowrap pointer-events-none z-10">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark block mb-1">
                Phone
              </span>
              <span className="font-serif text-xl">{CONTACT.phone}</span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark block mb-1">
                Location
              </span>
              <span className="font-serif text-xl inline-flex items-start gap-1.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-ink-faint dark:text-ink-faint-dark flex-shrink-0 mt-[6px]"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {CONTACT.location}
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            {CONTACT.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group relative inline-flex items-center gap-2 font-mono text-sm pl-3 py-1 w-fit"
              >
                <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-red origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
                <span className="text-ink-soft dark:text-ink-soft-dark group-hover:text-ink dark:group-hover:text-ink-dark transition-colors duration-200">
                  {social.label}
                </span>
                <span className="inline-block text-ink-faint dark:text-ink-faint-dark transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-20 border-t border-rule dark:border-rule-dark pt-6">
          Response within 24 hours · Based in Dhaka, Bangladesh · UTC+6
        </p>
      </section>
    </>
  )
}
