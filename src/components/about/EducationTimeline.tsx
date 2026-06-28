import SectionLabel from '@/components/ui/SectionLabel'
import RevealText from '@/components/ui/RevealText'

const EDUCATION = [
  { school: 'KUET, Dept. of Architecture', detail: 'Session 2020–21', note: 'Current (5th Year)' },
  { school: "St. Gregory's College, Dhaka", detail: 'HSC 2020', note: null },
  { school: 'Dhaka Collegiate School', detail: 'SSC 2018', note: null },
]

export default function EducationTimeline() {
  return (
    <section className="max-w-site mx-auto px-6 py-16">
      <SectionLabel label="Education" />
      <RevealText>
        <div className="flex flex-col mt-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="flex justify-between items-baseline border-b border-rule dark:border-rule-dark py-4"
            >
              <div>
                <p className="font-serif text-lg">{edu.school}</p>
                <p className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark mt-1">
                  {edu.detail}
                </p>
              </div>
              {edu.note && (
                <span className="font-mono text-xs text-accent-red uppercase tracking-widest">
                  {edu.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </RevealText>
    </section>
  )
}
