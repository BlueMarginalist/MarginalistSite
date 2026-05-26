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
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link
        href={sectionConfig.writing.path}
        className="inline-block mb-8 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
      >
        ← {sectionConfig.writing.label}
      </Link>

      <header className="mb-12">
        <time className="text-sm text-zinc-400 dark:text-zinc-500 block mb-4">
          {formatDate(frontmatter.date)}
        </time>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {frontmatter.summary}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-500 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        {content}
      </article>
    </div>
  )
}
