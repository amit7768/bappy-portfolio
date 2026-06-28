'use client'

import { useEffect, useRef } from 'react'

/** Architectural crosshair cursor: tight dot + lagging ring, hidden on touch devices. */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`

      const target = e.target as HTMLElement
      const isInteractive = !!target.closest('a, button')
      const isImage = !!target.closest('img, [data-cursor-view]')
      ring.classList.toggle('hovering', isInteractive)
      ring.textContent = isImage ? 'VIEW' : ''
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} data-no-transition />
      <div id="cursor-ring" ref={ringRef} data-no-transition />
    </>
  )
}
