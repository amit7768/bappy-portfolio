import Image from 'next/image'
import { AWARDS } from '@/data/awards'
import SheetRef from '@/components/ui/SheetRef'
import SectionLabel from '@/components/ui/SectionLabel'
import RevealText from '@/components/ui/RevealText'

export default function AwardsSection() {
  return (
    <section className="max-w-site mx-auto px-6 py-16">
      <SectionLabel label="Awards & Recognition" count={`${AWARDS.length} Entries`} />

      <div className="flex flex-col">
        {AWARDS.map((award) => (
          <RevealText key={award.sheet}>
            <div className="grid md:grid-cols-[80px_1fr_160px] gap-6 items-start border-b border-rule dark:border-rule-dark py-8">
              <SheetRef sheet={award.sheet} />

              <div>
                {award.badge && (
                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-accent-gold border border-accent-gold px-2 py-1 mb-2">
                    {award.badge}
                  </span>
                )}
                <h3 className="font-serif text-xl">{award.title}</h3>
                <p className="text-sm text-ink-soft dark:text-ink-soft-dark mt-2 max-w-2xl">
                  {award.note}
                </p>
                <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-2">
                  {award.year}
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper-dim dark:bg-paper-dim-dark">
                {award.img && (
                  <Image src={award.img} alt={award.title} fill className="object-cover" />
                )}
              </div>
            </div>
          </RevealText>
        ))}
      </div>
    </section>
  )
}
