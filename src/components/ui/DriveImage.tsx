'use client'

import { useState } from 'react'
import Image from 'next/image'
import { driveImg } from '@/lib/drive'
import { cn } from '@/lib/utils'

type DriveImageSize = 'w400' | 'w800' | 'w1200' | 'w1400'

interface DriveImageBaseProps {
  fileId: string
  size?: DriveImageSize
  alt: string
  className?: string
}

interface DriveImageFillProps extends DriveImageBaseProps {
  fill: true
  width?: never
  height?: never
}

interface DriveImageFixedProps extends DriveImageBaseProps {
  fill?: false
  width: number
  height: number
}

type DriveImageProps = DriveImageFillProps | DriveImageFixedProps

/** Next/Image wrapper for Google Drive thumbnail URLs, with skeleton + error fallback. */
export default function DriveImage(props: DriveImageProps) {
  const { fileId, size = 'w800', alt, className } = props
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const src = driveImg(fileId, size)

  if (errored) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-paper-dim dark:bg-paper-dim-dark',
          className
        )}
        data-cursor-view
      >
        <svg viewBox="0 0 100 100" className="w-1/3 h-1/3 opacity-30" stroke="currentColor" fill="none">
          <rect x="10" y="10" width="80" height="80" strokeWidth="1" />
          <line x1="10" y1="10" x2="90" y2="90" strokeWidth="1" />
          <line x1="90" y1="10" x2="10" y2="90" strokeWidth="1" />
        </svg>
      </div>
    )
  }

  const imageProps = props.fill
    ? { fill: true as const }
    : { width: props.width, height: props.height }

  return (
    <div className={cn('relative overflow-hidden', className)} data-cursor-view>
      {!loaded && <div className="absolute inset-0 bg-paper-dim dark:bg-paper-dim-dark animate-pulse" />}
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        className={cn('object-cover', props.fill ? 'w-full h-full' : '')}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  )
}
