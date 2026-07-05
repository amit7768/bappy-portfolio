import Image from 'next/image'
import RevealText from '@/components/ui/RevealText'

export default function AboutHero() {
  return (
    <section className="max-w-site mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
      <RevealText direction="left">
        <div className="relative aspect-[3/4] bg-paper-dim overflow-hidden">
          <Image
            src="/assets/projects/about-photo.jpg"
            alt="Md. Mahmudul Hasan Bappy"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </RevealText>

      <RevealText>
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-4">
          — About
        </p>
        <h1 className="font-serif text-4xl mb-2">Mahmudul Hasan Bappy</h1>
        <p className="font-mono text-xs text-ink-faint mb-6">
          Architect · Visualizer · Interior Designer
        </p>

        <p className="text-sm text-ink-soft mb-4 leading-relaxed">
          I grew up in Old Dhaka — where history doesn&apos;t sit behind glass in museums, but lives in the walls,
          alleys, and rooftops you pass every morning. Born in Chandpur and raised among centuries-old mosques,
          havelis, and weathered facades, I had architecture as my first teacher long before I ever stepped into
          a studio. Those narrow lanes and sun-cut courtyards taught me things no textbook could: that light has
          memory, that a doorway can carry a generation&apos;s worth of story, that space is never just space.
        </p>

        <p className="text-sm text-ink-soft mb-4 leading-relaxed">
          That upbringing became the foundation of everything I design. I&apos;m a fifth-year architecture student
          at KUET — one semester from graduation, already deep in work that spans studio projects, client
          commissions, visualization contracts, and competition entries. My interest centres on public space and
          the relationship between heritage and the present: how a well-designed street corner or gathering hall
          can honour where it comes from while serving where it&apos;s going.
        </p>

        <p className="text-sm text-ink-soft mb-6 leading-relaxed">
          My toolkit runs from hand sketch to V-Ray render to AutoCAD construction set — but the thread connecting
          all of it is the same conviction: every space, from a single room to a city block, deserves to feel
          like it belongs to its place and its people. I&apos;m open to freelance visualization work, remote
          projects, and meaningful collaboration. If you have something worth building, I want to hear about it.
        </p>

        <p className="font-mono text-xs text-ink-faint">
          Off the drawing board: cricket fan, devoted tea drinker, video game player, adequate sleeper.
        </p>
      </RevealText>
    </section>
  )
}
