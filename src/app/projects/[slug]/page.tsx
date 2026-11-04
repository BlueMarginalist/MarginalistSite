import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSlugs, getRawContent } from '@/lib/content'
import { compileMDXContent } from '@/lib/mdx'
import { IframeEmbed } from '@/components/content/IframeEmbed'
import { sectionConfig } from '@/lib/config'
import { formatDate } from '@/lib/utils'
import type { Frontmatter } from '@/lib/types'
// Frontmatter import kept for type-only use via compileMDXContent

export async function generateStaticParams() {
  return getAllSlugs('projects').map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!getAllSlugs('projects').includes(slug)) return {}
  const { frontmatter } = await compileMDXContent(getRawContent('projects', slug))
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
    openGraph: { title: frontmatter.title, description: frontmatter.summary },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!getAllSlugs('projects').includes(slug)) notFound()

  const { content, frontmatter } = await compileMDXContent(getRawContent('projects', slug))

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20">
      <Link
        href={sectionConfig.projects.path}
        className="inline-block mb-10 font-mono text-xs text-mute hover:text-ink transition-colors"
      >
        ← {sectionConfig.projects.label}
      </Link>

      <header className="mb-10">
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

        {(frontmatter.links?.demo ||
          frontmatter.links?.github ||
          frontmatter.links?.external) && (
          <div className="flex flex-wrap gap-5 mt-6 pt-6 border-t border-line">
            {frontmatter.links.demo && (
              <a
                href={frontmatter.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-volt decoration-[3px] underline-offset-4 hover:bg-volt hover:text-onvolt transition-colors"
              >
                Open live demo →
              </a>
            )}
            {frontmatter.links.external && (
              <a
                href={frontmatter.links.external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-volt decoration-[3px] underline-offset-4 hover:bg-volt hover:text-onvolt transition-colors"
              >
                Open tool →
              </a>
            )}
            {frontmatter.links.github && (
              <a
                href={frontmatter.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-mute hover:text-ink transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </header>

      {/* Embedded demo — shown when `iframe` is set in frontmatter */}
      {frontmatter.iframe && (
        <div className="mb-10">
          <IframeEmbed src={frontmatter.iframe} title={frontmatter.title} />
        </div>
      )}

      <article className="prose max-w-none">
        {content}
      </article>
    </div>
  )
}
