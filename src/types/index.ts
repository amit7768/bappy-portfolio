export interface AcademicProject {
  sheet: string
  title: string
  tags: string[]
  year: string
  location: string
  desc: string
  img: string | null
  behanceImg?: string | null
}

export interface BuiltProjectImage {
  id: string
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
  id: string
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
