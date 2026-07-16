import Image from 'next/image'
import Link from 'next/link'
import { localImg } from '@/lib/drive'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealText from '@/components/ui/RevealText'

interface FeaturedItem {
  title: string
  href: string
  img: string
  sheet?: string
}

const FEATURED: FeaturedItem[] = [
  {
    title: 'Ando Museum',
    href: '/projects?tab=academic',
    img: localImg('ap-03-ando.jpg'),
    sheet: 'AP-03',
  },
  {
    title: 'Nexus-77 — Skyscraper',
    href: '/projects?tab=academic',
    img: localImg('ap-05-nexus.jpg'),
    sheet: 'AP-05',
  },
  {
    title: 'Highway Restaurant & Fuel Station',
    href: '/projects?tab=academic',
    img: localImg('ap-04-highway.jpg'),
    sheet: 'AP-04',
  },
  {
    title: 'Low-Cost Housing',
    href: '/projects?tab=academic',
    img: localImg('ap-08-housing.jpg'),
    sheet: 'AP-08',
  },
  {
    title: 'Urban Bazar Redesign',
    href: '/projects?tab=academic',
    img: localImg('ap-07-urban.jpg'),
    sheet: 'AP-07',
  },
  {
    title: 'Landscape Redesign',
    href: '/projects?tab=academic',
    img: localImg('ap-09-landscape.jpg'),
    sheet: 'AP-09',
  },
  {
    title: 'Pedestrian Design',
    href: '/projects?tab=academic',
    img: localImg('ap-06-pedestrian.jpg'),
    sheet: 'AP-06',
  },
]

const FEATURED_ROW2: FeaturedItem[] = [
  {
    title: 'Interior Design for Deshal',
    href: '/projects?tab=academic',
    img: localImg('ap-10-interior.jpg'),
    sheet: 'AP-10',
  },
  {
    title: 'Studio Apartment on Mars',
    href: '/projects?tab=academic',
    img: localImg('ap-01-mars.jpg'),
    sheet: 'AP-01',
  },
  {
    title: 'Archviz Render 1',
    href: '/projects?tab=archviz',
    img: localImg('av-01.jpg'),
    sheet: 'RENDER',
  },
  {
    title: 'Archviz Render 2',
    href: '/projects?tab=archviz',
    img: localImg('av-03.jpg'),
    sheet: 'RENDER',
  },
  {
    title: 'Archviz Render 3',
    href: '/projects?tab=archviz',
    img: localImg('av-05.jpg'),
    sheet: 'RENDER',
  },
  {
    title: 'Archviz Render 4',
    href: '/projects?tab=archviz',
    img: localImg('av-07.jpg'),
    sheet: 'RENDER',
  },
  {
    title: 'Archviz Render 5',
    href: '/projects?tab=archviz',
    img: localImg('av-09.jpg'),
    sheet: 'RENDER',
  },
]

function CardGrid({ items, rowIndex }: { items: FeaturedItem[]; rowIndex: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-0 w-full">
      {items.map((item, i) => (
        <RevealText key={item.title} delay={i * 0.05 + rowIndex * 0.15}>
          <Link href={item.href} className="block reveal-item group cursor-pointer">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-paper-dim">
              {item.img && (
                <div className="absolute inset-0 transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]">
                  <Image src={item.img} alt={item.title} fill className="object-cover" unoptimized />
                </div>
              )}

              <div className="absolute inset-0 bg-black/0 transition-colors duration-[400ms] ease-out group-hover:bg-black/35" />

              <span className="absolute top-3 right-3 text-white text-lg opacity-0 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                ↗
              </span>

              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent-red transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
            </div>

            <div className="flex items-center justify-between px-3 py-2">
              <p className="font-mono text-xs uppercase tracking-widest transition-transform duration-300 ease-out group-hover:-translate-y-1 truncate">
                {item.title}
              </p>
              {item.sheet && (
                <span className="font-mono text-xs text-ink-faint transition-colors duration-200 group-hover:text-accent-red flex-shrink-0 ml-2">
                  {item.sheet}
                </span>
              )}
            </div>
          </Link>
        </RevealText>
      ))}
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <section className="pt-4 md:pt-16 pb-16">
      <div className="max-w-site mx-auto px-6 mb-6">
        <SectionLabel label="Featured Work" count="14 Selected" />
      </div>

      <div>
        <CardGrid items={FEATURED} rowIndex={0} />
        <CardGrid items={FEATURED_ROW2} rowIndex={1} />
      </div>
    </section>
  )
}
