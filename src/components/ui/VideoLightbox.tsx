'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoLightboxProps {
  src: string
  onClose: () => void
}

export default function VideoLightbox({ src, onClose }: VideoLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9996] bg-ink/95 flex items-center justify-center px-6"
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
          style={{ width: 'min(90vw, 1200px)', aspectRatio: '16 / 9' }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-full"
            style={{ maxHeight: '80vh' }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
