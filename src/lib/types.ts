export type ContentType = 'research' | 'projects' | 'writing'

export interface ContentLinks {
  paper?: string
  arxiv?: string
  github?: string
  demo?: string
  external?: string
}

export interface Frontmatter {
  title: string
  date: string
  type: ContentType
  summary: string
  tags: string[]
  featured: boolean
  status?: 'working-paper' | 'published' | 'preprint'
  links?: ContentLinks
  iframe?: string
}

export interface ContentItem extends Frontmatter {
  slug: string
  contentType: ContentType
}
