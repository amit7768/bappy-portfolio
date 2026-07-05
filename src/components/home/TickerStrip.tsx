const TICKER_TEXT =
  'ARCHITECTURE · VISUALIZATION · INTERIOR DESIGN · KUET 2020–21 · DHAKA, BD · PUBLIC SPACE · COMPETITION WINNER · OPEN FOR FREELANCE · AUTOCAD · V-RAY · D5 RENDER · '

export default function TickerStrip() {
  return (
    <div className="group h-11 flex items-center overflow-hidden bg-ink">
      <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
        <span className="font-mono text-xs tracking-widest uppercase text-paper/60 px-2">
          {TICKER_TEXT}
        </span>
        <span className="font-mono text-xs tracking-widest uppercase text-paper/60 px-2">
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  )
}
