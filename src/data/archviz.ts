import type { ArchvizRender, ArchvizVideo } from '@/types'
import { localImg } from '@/lib/drive'

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
  { src: localImg('av-21.jpg'), cap: 'Architectural detail' },
  { src: localImg('av-22.jpg'), cap: 'Render study' },
  { src: localImg('av-23.jpg'), cap: 'Spatial render' },
  { src: localImg('av-24.jpg'), cap: 'Volume study' },
  { src: localImg('av-25.jpg'), cap: 'Final render' },
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
