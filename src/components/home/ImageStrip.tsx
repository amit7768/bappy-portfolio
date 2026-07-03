import Image from 'next/image'
import { driveImg } from '@/lib/drive'

const IMAGES = [
  driveImg('1BPm_jx9ZMMfrFi76KPBpu4Oy9ZCrqWRi', 'w1200'),
  'https://drive.google.com/thumbnail?id=12rkCQ6YpY5H6IVHBzylomz-SbWsYJfDy&sz=w1200',
  driveImg('1ScYhBZHz6D1te-tPzuHo9eRLBCf9TKRw', 'w1200'),
]

export default function ImageStrip() {
  return (
    <div className="w-full grid grid-cols-[repeat(3,1fr)] gap-0 h-56 md:h-80">
      {IMAGES.map((src) => (
        <div key={src} className="relative overflow-hidden h-full">
          <Image
            src={src}
            alt="Architectural visualization"
            fill
            sizes="33vw"
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            className="transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
