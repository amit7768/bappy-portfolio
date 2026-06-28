import Image from 'next/image'
import { driveImg } from '@/lib/drive'
import RevealText from '@/components/ui/RevealText'

export default function AboutHero() {
  return (
    <section className="max-w-site mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
      <RevealText direction="left">
        <div className="relative aspect-[3/4] bg-paper-dim dark:bg-paper-dim-dark overflow-hidden">
          <Image
            src={driveImg('1TH5ylm_tHMfxHV2czxDYou3CRKMif5lb', 'w800')}
            alt="Md. Mahmudul Hasan Bappy"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </RevealText>

      <RevealText>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-ink-soft-dark mb-4">
          — About
        </p>
        <h1 className="font-serif text-4xl mb-2">Mahmudul Hasan Bappy</h1>
        <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mb-6">
          Architect · Visualizer · Interior Designer
        </p>

        <p className="text-sm text-ink-soft dark:text-ink-soft-dark mb-4 leading-relaxed">
          I&apos;m a fifth-year architecture student at KUET — one semester from graduation, already
          deep in work that spans studio projects, client commissions, visualization contracts, and
          competition entries. My primary interest is public space: how a well-designed street corner
          or gathering hall can alter the texture of a city and the quality of a life.
        </p>

        <p className="text-sm text-ink-soft dark:text-ink-soft-dark mb-6 leading-relaxed">
          My toolkit runs from hand sketch to V-Ray render to AutoCAD construction set, but the thread
          connecting them is the same conviction: every space, from a single room to a city block, can
          be made more human. I&apos;m open to freelance visualization work, remote projects, and
          meaningful collaboration. If you have something worth building, I want to hear about it.
        </p>

        <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark">
          Off the drawing board: cricket fan, devoted tea drinker, video game player, adequate sleeper.
        </p>
      </RevealText>
    </section>
  )
}
