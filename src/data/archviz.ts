import type { ArchvizRender, ArchvizVideo } from '@/types'
import { localImg, driveImg } from '@/lib/drive'

export const ARCHVIZ_RENDERS: ArchvizRender[] = [
  { src: localImg('av-01.jpg'), cap: 'Interior — warm evening light' },
  { src: localImg('av-02.jpg'), cap: 'Architectural visualization' },
  { src: localImg('av-03.jpg'), cap: 'Exterior study' },
  { src: localImg('av-04.jpg'), cap: 'Material study render' },
  { src: localImg('av-05.jpg'), cap: 'Interior visualization' },
  { src: localImg('av-06.jpg'), cap: 'Daylight study' },
  { src: localImg('av-07.jpg'), cap: 'Exterior render — dusk' },
  { src: localImg('av-08.jpg'), cap: 'Perspective view' },
  { src: localImg('av-09.jpg'), cap: 'Volumetric study' },
  { src: localImg('av-10.jpg'), cap: 'Texture and material' },
  { src: localImg('av-11.jpg'), cap: 'Spatial composition' },
  { src: localImg('av-12.jpg'), cap: 'Golden hour render' },
  { src: localImg('av-13.jpg'), cap: 'Architectural render' },
  { src: localImg('av-14.jpg'), cap: 'Detail render' },
  { src: localImg('av-15.jpg'), cap: 'Studio visualization' },
  { src: localImg('av-16.jpg'), cap: 'Interior study' },
  { src: localImg('av-17.jpg'), cap: 'Exterior elevation' },
  { src: localImg('av-18.jpg'), cap: 'Photorealistic render' },
  { src: localImg('av-19.jpg'), cap: 'Night render' },
  { src: localImg('av-20.jpg'), cap: 'Composition study' },
  { src: driveImg('1-3uHlG5OHShaFvA3FPBKEzecMYpo7_FH', 'w400'), cap: 'Architectural detail' },
  { src: driveImg('1UdlFMDs3k1Qe3z24EXFpzzekgpxy90Ta', 'w400'), cap: 'Render study' },
  { src: driveImg('1UvFxZ4WN27R8CIwgZCqf0DWjAkbtC0Rv', 'w400'), cap: 'Spatial render' },
  { src: driveImg('1OOr2BH3w4atY3qr2ggt9Ke4fAwDiCiE9', 'w400'), cap: 'Volume study' },
  { src: driveImg('10n48hkPUfHWQy41nA4eU-ofpvE9w5cSV', 'w400'), cap: 'Final render' },
  { src: driveImg('17Puqo-nTXha6JCIes3__a0AI-BiIA0E7', 'w400'), cap: 'Visualization study' },
  { src: driveImg('13EyNQxQpwDkRCzskvcgWm3vDTHr2gFnj', 'w400'), cap: 'Perspective study' },
  { src: driveImg('1OOr2BH3w4atY3qr2ggt9Ke4fAwDiCiE9', 'w400'), cap: 'Render composition' },
]

export const ARCHVIZ_VIDEOS: ArchvizVideo[] = [
  {
    id: '1esPT1R7ENzM-eR07EPTjr1dVjtfgeiT4',
    cap: 'Walkthrough — Visualization 01',
    thumb: localImg('av-02.jpg'),
  },
  {
    id: '1_70mw-EwpP_G1y0-6s9Kb4LU_uKNfd-n',
    cap: 'Walkthrough — Visualization 02',
    thumb: localImg('av-01.jpg'),
  },
  {
    id: '12SiJNBssYge37uonZcn-ig4uG-huQP9J',
    cap: 'Walkthrough — Visualization 03',
    thumb: localImg('av-07.jpg'),
  },
]
