export interface AcademicProject {
  sheet: string
  title: string
  tags: string[]
  year?: string
  location: string
  desc: string
  img: string | null
  images: string[]
  behanceImg?: string | null
}

export interface BuiltProjectImage {
  src: string
  cap: string
}

export interface BuiltProject {
  sheet: string
  title: string
  tags: string[]
  year: string
  location: string
  role: string
  desc: string
  images: BuiltProjectImage[]
}

export interface ArchvizRender {
  src: string
  cap: string
}

export interface ArchvizVideo {
  id: string
  cap: string
  thumb: string
}

export interface Award {
  sheet: string
  badge: string | null
  title: string
  note: string
  year: string
  img: string | null
}

export interface SocialLink {
  label: string
  url: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  socials: SocialLink[]
}

export interface ClientReview {
  id: number
  name: string
  country: string
  countryCode: string
  rating: number
  text: string
  service: string
  duration?: string
  verified: boolean
  repeatClient?: boolean
}
