'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageLightboxProps {
  src: string
  caption?: string
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export default function ImageLightbox({ src, caption, onClose, onPrev, onNext }: ImageLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9996] bg-ink/95 dark:bg-paper-dark/98 flex flex-col items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-6 right-6 text-paper text-2xl"
        >
          ×
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative max-w-[90vw] max-h-[80vh] w-[90vw] h-[70vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={src} alt={caption ?? ''} fill className="object-contain" />
        </motion.div>

        {caption && (
          <p className="mt-4 font-mono text-xs text-paper/80 text-center">{caption}</p>
        )}

        {onPrev && (
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-paper text-3xl"
          >
            ‹
          </button>
        )}
        {onNext && (
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-paper text-3xl"
          >
            ›
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
