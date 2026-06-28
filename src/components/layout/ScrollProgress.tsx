'use client'

import { useEffect } from 'react'

/** Drives the #scroll-progress bar width from page scroll position. */
export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const update = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.width = `${total > 0 ? (scrolled / total) * 100 : 0}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return null
}
