'use client'

import { useState } from 'react'
import { CONTACT } from '@/data/contact'
import RevealText from '@/components/ui/RevealText'

export default function ContactPanel() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="max-w-site mx-auto px-6 py-24">
      <RevealText>
        <h1 className="font-serif italic text-4xl md:text-5xl max-w-2xl">
          Let&apos;s build something worth building.
        </h1>
        <p className="text-sm text-ink-soft dark:text-ink-soft-dark mt-4 max-w-xl">
          Available for freelance visualization, remote work, and internships — from Dhaka to
          anywhere.
        </p>
      </RevealText>

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <RevealText direction="left">
          <div className="flex flex-col gap-6">
            <button type="button" onClick={copyEmail} className="text-left group">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-ink-faint-dark block mb-1">
                Email
              </span>
              <span className="font-serif text-xl group-hover:text-accent-red transition-colors">
                {CONTACT.email}
              </span>
              {copied && (
                <span className="font-mono text-[10px] text-accent-red block mt-1">Copied!</span>
              )}
            </button>

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
              <span className="font-serif text-xl">{CONTACT.location}</span>
            </div>
          </div>
        </RevealText>

        <RevealText>
          <div className="grid grid-cols-2 gap-y-4">
            {CONTACT.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block font-mono text-sm w-fit"
              >
                {social.label} ↗
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-accent-red transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </RevealText>
      </div>

      <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-20 border-t border-rule dark:border-rule-dark pt-6">
        Response within 24 hours · Based in Dhaka, Bangladesh · UTC+6
      </p>
    </section>
  )
}
