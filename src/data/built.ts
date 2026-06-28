import type { BuiltProject } from '@/types'

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
      { id: '1XQ6XlwmgF4HMzSbx7EvqwXFlBwx6XDOG', cap: 'Axonometric overview' },
      { id: '1pb0aU5B2J9pxirDBpI7DLAsR0UWs-fp6', cap: 'Front elevation' },
      { id: '1KJg65jiSXxu0CFyAs9CnxjcNfoWQ6MU9', cap: 'Side view — north' },
      { id: '11zyjO67A1TH4GxalgkEGRiS-NjIHsSmS', cap: 'Rear view' },
      { id: '1kSGVfVKP25OVrQWloucd2aSNMnphoGy6', cap: 'Balcony detail' },
      { id: '1oJLEMfBrjn7H-avxIPw5Gu_5PJ9xtbMx', cap: 'Street-level perspective' },
      { id: '1MMaj3sP3N3hR0h7d1fGxOUw6KITPH2Ft', cap: 'Floor plan' },
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
      { id: '1cJTKu0robTGx21hNOBYs-EV8j-Bvnrwv', cap: '3D concept study' },
      { id: '1-w3jvwgA8Wafpm5LruE4W2k3e2vz6Ay4', cap: 'Ground floor plan' },
      { id: '1yTw4A6DQynjcRhJMTIAwg6icTfd5j_qS', cap: 'First floor plan' },
      { id: '1ZvTr5-wcWmni09VxuoRRxW4eqCIOymhz', cap: 'Duplex ground floor' },
      { id: '1kCl527i5MKOuOwGvM7yLvU67jEnvZ_kx', cap: 'Duplex first floor' },
    ],
  },
]
