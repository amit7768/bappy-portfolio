'use client'

import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

/** Tracks raw mouse position for custom cursor rendering. */
export function useCursor(): CursorPosition {
  const [pos, setPos] = useState<CursorPosition>({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return pos
}
