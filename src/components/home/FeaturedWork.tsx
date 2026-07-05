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
    img: localImg('featured-ando.jpg'),
    sheet: 'AP-03',
  },
  {
    title: 'Monument of Resistance',
    href: '/projects?tab=academic',
    img: '/assets/monument-render.jpg',
  },
  {
    title: 'Archviz — Visualization Work',
    href: '/projects?tab=archviz',
    img: localImg('av-01.jpg'),
  },
  {
    title: 'Nexus-77 — Skyscraper',
    href: '/projects?tab=academic',
    img: localImg('ap-05-nexus.jpg'),
    sheet: 'AP-05',
  },
  {
    title: 'Apartment Complex at Narinda',
    href: '/projects?tab=built',
    img: localImg('bp-01-narinda-1.jpg'),
    sheet: 'BP-01',
  },
  {
    title: 'Duplex Villa at Jatrabari',
    href: '/projects?tab=built',
    img: localImg('bp-02-villa-1.jpg'),
    sheet: 'BP-02',
  },
  {
    title: 'Cultural Community Club',
    href: '/projects?tab=academic',
    img: localImg('ap-02-cultural.jpg'),
    sheet: 'AP-02',
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-16">
      <div className="max-w-site mx-auto px-6 mb-6">
        <SectionLabel label="Featured Work" count="7 Selected" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-0 w-full">
        {FEATURED.map((item, i) => (
          <RevealText key={item.title} delay={i * 0.05}>
            <Link href={item.href} className="block reveal-item group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
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
    </section>
  )
}
