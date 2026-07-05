interface SectionLabelProps {
  label: string
  count?: string
}

export default function SectionLabel({ label, count }: SectionLabelProps) {
  return (
    <div className="flex justify-between items-center border-t border-rule pt-4 pb-6 w-full">
      <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
        — {label}
      </span>
      {count && (
        <span className="font-mono text-xs text-ink-faint">{count}</span>
      )}
    </div>
  )
}
