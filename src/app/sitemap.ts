import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://mahmudulbappy.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://mahmudulbappy.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://mahmudulbappy.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://mahmudulbappy.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
