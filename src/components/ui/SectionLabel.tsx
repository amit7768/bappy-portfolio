interface SectionLabelProps {
  label: string
  count?: string
}

export default function SectionLabel({ label, count }: SectionLabelProps) {
  return (
    <div className="flex justify-between items-center border-t border-rule dark:border-rule-dark pt-4 pb-6 w-full">
      <span className="font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-ink-soft-dark">
        — {label}
      </span>
      {count && (
        <span className="font-mono text-xs text-ink-faint dark:text-ink-faint-dark">{count}</span>
      )}
    </div>
  )
}
