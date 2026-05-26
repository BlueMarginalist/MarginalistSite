import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { getAllSlugs, getRawContent } from '@/lib/content'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { sectionConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'
import type { Frontmatter } from '@/lib/types'

export async function generateStaticParams() {
  return getAllSlugs('research').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!getAllSlugs('research').includes(slug)) return {}
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: getRawContent('research', slug),
    options: { parseFrontmatter: true },
  })
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: { title: frontmatter.title, description: frontmatter.summary },
  }
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getAllSlugs('research').includes(slug)) notFound()

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: getRawContent('research', slug),
    options: { parseFrontmatter: true },
    components: mdxComponents,
  })

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <Link
        href={sectionConfig.research.path}
        className="inline-block mb-8 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
      >
        ← {sectionConfig.research.label}
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          {frontmatter.status && (
            <span className="text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 px-2 py-0.5 rounded-full">
              {frontmatter.status}
            </span>
          )}
          <time className="text-sm text-zinc-400 dark:text-zinc-500">
            {formatDate(frontmatter.date)}
          </time>
        </div>

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

        {frontmatter.links && (
          <div className="flex flex-wrap gap-5 mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            {frontmatter.links.paper && (
              <a
                href={frontmatter.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-700 dark:text-blue-400 hover:underline"
              >
                Download PDF
              </a>
            )}
            {frontmatter.links.arxiv && (
              <a
                href={frontmatter.links.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                arXiv
              </a>
            )}
            {frontmatter.links.github && (
              <a
                href={frontmatter.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                Code
              </a>
            )}
          </div>
        )}
      </header>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        {content}
      </article>
    </div>
  )
}
