import { BUILT_PROJECTS } from '@/data/built'
import SheetRef from '@/components/ui/SheetRef'
import SectionLabel from '@/components/ui/SectionLabel'
import BuiltCarousel from './BuiltCarousel'
import MoreComingPanel from '@/components/ui/MoreComingPanel'

export default function BuiltProjects() {
  return (
    <div>
      <SectionLabel label="Built Projects" count={`${BUILT_PROJECTS.length} Projects`} />

      <div className="flex flex-col gap-16">
        {BUILT_PROJECTS.map((project) => (
          <div key={project.sheet} className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <SheetRef sheet={project.sheet} />
              <h3 className="font-serif text-3xl mt-2">{project.title}</h3>
              <p className="font-mono text-xs text-ink-faint mt-2">
                {project.role} · {project.year} · {project.location}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest text-ink-faint border border-rule px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-ink-soft mt-4 max-w-xl">{project.desc}</p>
            </div>

            <BuiltCarousel images={project.images} projectTitle={project.title} />
          </div>
        ))}
      </div>

      <MoreComingPanel
        heading="More commissions in progress."
        sub="Currently working with residential and commercial clients in Dhaka. Inquiries welcome."
        ctaText="Get in touch →"
        ctaHref="/contact"
      />
    </div>
  )
}
