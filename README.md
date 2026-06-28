# Mahmudul Hasan Bappy — Architecture Portfolio

A production-grade portfolio website built for Md. Mahmudul Hasan Bappy,
architect and visualizer at KUET, Bangladesh.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** GSAP 3 + ScrollTrigger, Framer Motion
- **3D:** Three.js via @react-three/fiber + @react-three/drei
- **Language:** TypeScript (strict mode)
- **Fonts:** DM Serif Display, DM Sans, IBM Plex Mono (Google Fonts via next/font)
- **Images:** Google Drive Thumbnail API + Next.js Image optimization
- **Deployment:** Vercel (recommended)

## Features

- Three.js parametric flame sculpture in hero (homage to monument competition entry)
- GSAP page-load sequence with word-by-word H1 animation
- GSAP ScrollTrigger reveals on all sections
- Custom architectural crosshair cursor
- Animated stats counters
- CSS marquee ticker strip
- Scroll progress bar
- Image carousel with touch swipe (built projects)
- Masonry archviz gallery with filter tabs
- Google Drive video lightbox for 3D walkthroughs
- Dark mode (next-themes, class strategy)
- Fully responsive (mobile-first)
- TypeScript strict mode throughout
- Clean data layer (src/data/) — easy to update content

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/            # Routes: home, projects, about, contact
├── components/     # layout, home, projects, about, contact, ui
├── data/           # All content — academic, built, archviz, awards, contact
├── hooks/          # useGSAP, useCursor, useTheme
├── lib/            # drive.ts (Drive URL builders), utils.ts
└── types/          # Shared TypeScript interfaces
```

## Content Updates

All content lives in `src/data/`. To update:
- Projects: edit `academic.ts` or `built.ts`
- Gallery: edit `archviz.ts`
- Awards: edit `awards.ts`
- Contact: edit `contact.ts`

## Google Drive Assets

Images are served via Google Drive Thumbnail API:
`https://drive.google.com/thumbnail?id=FILE_ID&sz=w800`

Videos are embedded via Drive preview:
`https://drive.google.com/file/d/FILE_ID/preview`

## Deployment

```bash
npm run build
```

Deploy to Vercel with zero config — Next.js is auto-detected.

## License

Design and content © 2026 Md. Mahmudul Hasan Bappy.
