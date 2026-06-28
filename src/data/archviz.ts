import type { ArchvizRender, ArchvizVideo } from '@/types'
import { driveImg } from '@/lib/drive'

export const ARCHVIZ_RENDERS: ArchvizRender[] = [
  { id: '1CvTgpIA9FiIvY8MNbFtbitIn64cZFjxt', cap: 'Interior render — warm evening light' },
  { id: '17Aoxaio_aYYgV0IwdrSrxrwC0WU9E9Cm', cap: 'Architectural visualization' },
  { id: '1R1z0qATaD9BzUN95k5jg7USPGascs39g', cap: 'Exterior study' },
  { id: '1PxUcq_9AtgmynK_uJu4UA1RjVU3wzWby', cap: 'Material study render' },
  { id: '111e6W10Dt-xAd0RKIDMoa6yQfG-HJxvj', cap: 'Interior visualization' },
  { id: '13CL5GR4mP4Z-aod-Og1xDTSLBIfYVPmG', cap: 'Daylight study' },
  { id: '1bM0-DuEWp5ahi2J_oWR8Vzrgpflh_NNG', cap: 'Exterior render — dusk' },
  { id: '1Xh0W4sqdrH_dWQRMOUzk7rk2yup6jaqz', cap: 'Perspective view' },
  { id: '1907b-2VBIe4wTBDxcpE6mXmj56WjO6u4', cap: 'Volumetric study' },
  { id: '1eRvCGzmpWmhg0VcviOy8TP2Pq1SbRnJ2', cap: 'Texture and material' },
  { id: '17C-rTW-vGqJLMs6hGgNn0CbOp8NWqumf', cap: 'Spatial composition' },
  { id: '1Cy0EzbNykqDJYpW6RxlCLC5NJqKKeOJw', cap: 'Render — golden hour' },
  { id: '1KTqzWfz8VsjtR6HEaFixTGpaXNCNZrka', cap: 'Architectural render' },
  { id: '13Q3ET4tv1KwQlYjF-xASOcMaeni5FMKB', cap: 'Detail render' },
  { id: '1wUoPjjH2NY2EOZqDUzV4YlLxIJ-C4vUW', cap: 'Studio visualization' },
  { id: '1uZcczBOKC-i1i6zo30Pga8Fv-YW4FhQL', cap: 'Interior study' },
  { id: '1iRLQVz5vs_JsdwKeW3G0Xfs0zM7GW854', cap: 'Exterior elevation' },
  { id: '10g4zzge1r-jdxvAEOVzMcS21V5xNjEt6', cap: 'Photorealistic render' },
  { id: '1TMwlBU4SopekE4cFR3tItikycCANGYVD', cap: 'Night render' },
  { id: '1GwJpBmHYyHwMGYv3yU23XMKyxl34dZc7', cap: 'Composition study' },
  { id: '1-3uHlG5OHShaFvA3FPBKEzecMYpo7_FH', cap: 'Architectural detail' },
  { id: '1UdlFMDs3k1Qe3z24EXFpzzekgpxy90Ta', cap: 'Render study 4' },
  { id: '1UvFxZ4WN27R8CIwgZCqf0DWjAkbtC0Rv', cap: 'Spatial render' },
  { id: '1OOr2BH3w4atY3qr2ggt9Ke4fAwDiCiE9', cap: 'Volume study' },
  { id: '10n48hkPUfHWQy41nA4eU-ofpvE9w5cSV', cap: 'Final render' },
]

export const ARCHVIZ_VIDEOS: ArchvizVideo[] = [
  {
    id: '1esPT1R7ENzM-eR07EPTjr1dVjtfgeiT4',
    cap: 'Walkthrough — Visualization 01',
    thumb: driveImg('17Aoxaio_aYYgV0IwdrSrxrwC0WU9E9Cm', 'w400'),
  },
  {
    id: '1_70mw-EwpP_G1y0-6s9Kb4LU_uKNfd-n',
    cap: 'Walkthrough — Visualization 02',
    thumb: driveImg('1CvTgpIA9FiIvY8MNbFtbitIn64cZFjxt', 'w400'),
  },
  {
    id: '12SiJNBssYge37uonZcn-ig4uG-huQP9J',
    cap: 'Walkthrough — Visualization 03',
    thumb: driveImg('1bM0-DuEWp5ahi2J_oWR8Vzrgpflh_NNG', 'w400'),
  },
]
