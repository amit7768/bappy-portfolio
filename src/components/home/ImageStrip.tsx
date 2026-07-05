import Image from 'next/image'
import { localImg } from '@/lib/drive'

const IMAGES = [
  localImg('strip-1.jpg'),
  localImg('strip-2.jpg'),
  localImg('strip-3.jpg'),
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
