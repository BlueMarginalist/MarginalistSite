import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getRawContent } from '@/lib/content'
import { compileMDXContent } from '@/lib/mdx'
import { sectionConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  return getAllSlugs('writing').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!getAllSlugs('writing').includes(slug)) return {}
  const { frontmatter } = await compileMDXContent(getRawContent('writing', slug))
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: { title: frontmatter.title, description: frontmatter.summary },
  }
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getAllSlugs('writing').includes(slug)) notFound()

  const { content, frontmatter } = await compileMDXContent(getRawContent('writing', slug))

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
      <Link
        href={sectionConfig.writing.path}
        className="inline-block mb-10 font-mono text-xs text-mute hover:text-ink transition-colors"
      >
        ← {sectionConfig.writing.label}
      </Link>

      <header className="mb-12">
        <time className="font-mono text-xs text-mute block mb-4">
          {formatDate(frontmatter.date)}
        </time>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-ink leading-[1.1] text-balance mb-6">
          {frontmatter.title}
        </h1>
        <p className="text-base sm:text-lg text-mute leading-relaxed text-pretty">
          {frontmatter.summary}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-5">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs text-mute"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose max-w-none">
        {content}
      </article>
    </div>
  )
}
