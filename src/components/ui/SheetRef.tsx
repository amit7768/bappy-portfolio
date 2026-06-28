interface SheetRefProps {
  sheet: string
}

export default function SheetRef({ sheet }: SheetRefProps) {
  return <span className="font-mono text-xs text-accent-red">{sheet}</span>
}
