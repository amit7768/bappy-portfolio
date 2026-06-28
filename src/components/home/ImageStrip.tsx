import Image from 'next/image'
import { driveImg } from '@/lib/drive'

const IMAGES = [
  '1BPm_jx9ZMMfrFi76KPBpu4Oy9ZCrqWRi',
  '1cLC6edWzue-EkjhT1Q2xIZVxwvMfiZAL',
  '1ScYhBZHz6D1te-tPzuHo9eRLBCf9TKRw',
]

export default function ImageStrip() {
  return (
    <div className="w-full grid grid-cols-3 gap-0 h-48 md:h-72">
      {IMAGES.map((id) => (
        <div key={id} className="relative overflow-hidden">
          <Image
            src={driveImg(id, 'w1200')}
            alt="Architectural visualization"
            fill
            sizes="33vw"
            unoptimized
            className="object-cover object-center transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
