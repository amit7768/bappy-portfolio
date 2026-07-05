import type { BuiltProject } from '@/types'
import { localImg } from '@/lib/drive'

export const BUILT_PROJECTS: BuiltProject[] = [
  {
    sheet: 'BP-01',
    title: 'Apartment Complex at Narinda',
    tags: ['Residential', 'Multi-Unit', 'SketchUp + AutoCAD', 'Client Work'],
    year: '2025',
    location: 'Narinda, Dhaka',
    role: 'Designer & Visualizer',
    desc: 'A multi-storey residential apartment building on a dense urban plot in Narinda, Dhaka. The design maximises habitable area on a constrained footprint while giving residents balconies, cross-ventilation, and a clear visual identity through material differentiation. Deliverables: AutoCAD floor plans, SketchUp 3D from 7 angles, master plan.',
    images: [
      { src: localImg('bp-01-narinda-1.jpg'), cap: 'Axonometric overview' },
      { src: localImg('bp-01-narinda-2.jpg'), cap: 'Front elevation' },
      { src: localImg('bp-01-narinda-3.jpg'), cap: 'Side view — north' },
      { src: localImg('bp-01-narinda-4.jpg'), cap: 'Rear view' },
      { src: localImg('bp-01-narinda-5.jpg'), cap: 'Balcony detail' },
      { src: localImg('bp-01-narinda-6.jpg'), cap: 'Street-level perspective' },
      { src: localImg('bp-01-narinda-7.jpg'), cap: 'Floor plan' },
    ],
  },
  {
    sheet: 'BP-02',
    title: 'Duplex Villa at Jatrabari',
    tags: ['Residential', 'Duplex', 'AutoCAD', 'Client Work'],
    year: '2025',
    location: 'Jatrabari, Dhaka',
    role: 'Designer',
    desc: 'A two-storey duplex villa centred on a double-height dining space connecting both floors visually and socially. Ground: master bedroom, bedroom, living, foyer, wash. First: mirrored bedrooms, kitchen, dining. Full AutoCAD floor plan set with duplex variants.',
    images: [
      { src: localImg('bp-02-villa-1.jpg'), cap: '3D concept study' },
      { src: localImg('bp-02-villa-2.jpg'), cap: 'Ground floor plan' },
      { src: localImg('bp-02-villa-3.jpg'), cap: 'First floor plan' },
      { src: localImg('bp-02-villa-4.jpg'), cap: 'Duplex ground floor' },
      { src: localImg('bp-02-villa-5.jpg'), cap: 'Duplex first floor' },
    ],
  },
]
