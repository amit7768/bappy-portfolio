export default function KUETLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <svg
        viewBox="0 0 200 200"
        className="w-4/5 h-4/5"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle ring */}
        <circle cx="100" cy="100" r="94" fill="none" stroke="#1B3A6B" strokeWidth="6" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="#C9A84C" strokeWidth="1.5" />

        {/* KUET text on arc top */}
        <path id="top-arc" d="M 22,100 A 78,78 0 0,1 178,100" fill="none" />
        <text fontSize="14" fontFamily="serif" letterSpacing="6" fill="#1B3A6B" fontWeight="bold">
          <textPath href="#top-arc" startOffset="50%" textAnchor="middle">KUET</textPath>
        </text>

        {/* EST. 1967 text on arc bottom */}
        <path id="bot-arc" d="M 30,110 A 78,78 0 0,0 170,110" fill="none" />
        <text fontSize="10" fontFamily="monospace" letterSpacing="3" fill="#C9A84C">
          <textPath href="#bot-arc" startOffset="50%" textAnchor="middle">EST. 1967</textPath>
        </text>

        {/* Gear shape in center */}
        <g transform="translate(100,95)">
          {/* Gear teeth */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180
            const x1 = Math.cos(angle) * 28
            const y1 = Math.sin(angle) * 28
            const x2 = Math.cos(angle) * 38
            const y2 = Math.sin(angle) * 38
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#1B3A6B" strokeWidth="5" strokeLinecap="round"
              />
            )
          })}
          {/* Gear body */}
          <circle cx="0" cy="0" r="24" fill="#1B3A6B" />
          <circle cx="0" cy="0" r="10" fill="white" />
          {/* Inner dot */}
          <circle cx="0" cy="0" r="4" fill="#C9A84C" />
        </g>

        {/* KUET text below gear */}
        <text
          x="100"
          y="154"
          textAnchor="middle"
          fontSize="12"
          fontFamily="monospace"
          letterSpacing="4"
          fill="#1B3A6B"
          fontWeight="bold"
        >
          KUET
        </text>
      </svg>
    </div>
  )
}
