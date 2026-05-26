import type { MetadataRoute } from 'next'
import { getAllContent } from '@/lib/content'
import { siteConfig } from '@/lib/config'

const base = siteConfig.url
const types = ['research', 'projects', 'writing'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const contentPages = types.flatMap((type) =>
    getAllContent(type).map((item) => ({
      url: `${base}/${type}/${item.slug}`,
      lastModified: new Date(item.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/research`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/writing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...contentPages,
  ]
}
