import SectionLabel from '@/components/ui/SectionLabel'
import RevealText from '@/components/ui/RevealText'

interface Skill {
  name: string
  level: number
}

const SKILLS: Skill[] = [
  { name: 'AutoCAD', level: 5 },
  { name: 'SketchUp', level: 5 },
  { name: 'Photoshop', level: 5 },
  { name: 'V-Ray', level: 4 },
  { name: 'D5 Render', level: 4 },
  { name: 'InDesign', level: 4 },
  { name: 'Lumion', level: 4 },
  { name: 'Procreate', level: 3 },
]

function Dots({ level }: { level: number }) {
  return (
    <span className="font-mono text-sm tracking-widest">
      {Array.from({ length: 5 }, (_, i) => (i < level ? '●' : '○')).join('')}
    </span>
  )
}

export default function SkillDots() {
  return (
    <section className="max-w-site mx-auto px-6 py-16">
      <SectionLabel label="Skills" />
      <RevealText>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mt-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex justify-between items-center border-b border-rule dark:border-rule-dark pb-3">
              <span className="font-sans text-sm">{skill.name}</span>
              <Dots level={skill.level} />
            </div>
          ))}
        </div>
      </RevealText>
    </section>
  )
}
