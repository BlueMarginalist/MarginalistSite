import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { ContentType, ContentItem, Frontmatter } from './types'

const contentRoot = path.join(process.cwd(), 'content')

export function getAllContent(type: ContentType): ContentItem[] {
  const dir = path.join(contentRoot, type)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
      const { data } = matter(raw)
      return { ...(data as Frontmatter), slug, contentType: type }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = path.join(contentRoot, type)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getRawContent(type: ContentType, slug: string): string {
  return fs.readFileSync(path.join(contentRoot, type, `${slug}.mdx`), 'utf-8')
}

export function getFeaturedContent(): ContentItem[] {
  const types: ContentType[] = ['research', 'projects', 'writing']
  return types
    .flatMap((type) => getAllContent(type))
    .filter((item) => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllTags(type: ContentType): string[] {
  const tagSet = new Set(getAllContent(type).flatMap((item) => item.tags ?? []))
  return Array.from(tagSet).sort()
}
