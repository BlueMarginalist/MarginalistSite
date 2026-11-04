import Link from 'next/link'
import type { ContentItem } from '@/lib/types'
import { sectionConfig } from '@/lib/config'
import { formatDateShort } from '@/lib/utils'

interface ContentCardProps {
  item: ContentItem
  showType?: boolean
}

export function ContentCard({ item, showType = false }: ContentCardProps) {
  const href = `/${item.contentType}/${item.slug}`

  return (
    <article className="group relative grid gap-x-8 gap-y-2 py-8 px-3 -mx-3 border-t border-line sm:grid-cols-[7.5rem_1fr_auto] transition-colors duration-200 hover:bg-surface">
      <div className="font-mono text-xs text-mute tabular pt-1.5 flex sm:flex-col gap-x-3 gap-y-1.5">
        <time>{formatDateShort(item.date)}</time>
        {showType && (
          <span className="text-ink">{sectionConfig[item.contentType].label}</span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-snug text-ink text-balance">
          <Link href={href} className="after:absolute after:inset-0">
            {item.title}
          </Link>
          {item.status && (
            <span className="ml-3 align-middle inline-block bg-volt text-onvolt font-sans text-xs font-semibold px-2 py-0.5">
              {item.status}
            </span>
          )}
        </h3>

        <p className="mt-2 max-w-[65ch] text-sm sm:text-[0.9375rem] text-mute leading-relaxed">
          {item.summary}
        </p>

        {item.tags && item.tags.length > 0 && (
          <p className="mt-3 font-mono text-xs text-mute flex flex-wrap gap-x-3 gap-y-1">
            {item.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </p>
        )}

        {item.links && (
          <div className="relative z-10 mt-4 flex flex-wrap gap-x-5 gap-y-1 w-fit">
            {item.links.paper && <ExtLink href={item.links.paper} label="Paper" />}
            {item.links.arxiv && <ExtLink href={item.links.arxiv} label="arXiv" />}
            {item.links.github && <ExtLink href={item.links.github} label="GitHub" />}
            {item.links.demo && <ExtLink href={item.links.demo} label="Live demo" accent />}
            {item.links.external && <ExtLink href={item.links.external} label="View" accent />}
          </div>
        )}
      </div>

      <span
        aria-hidden
        className="hidden sm:block self-start font-display text-xl text-mute transition-all duration-300 ease-out group-hover:text-ink group-hover:translate-x-1"
      >
        →
      </span>
    </article>
  )
}

function ExtLink({
  href,
  label,
  accent,
}: {
  href: string
  label: string
  accent?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        accent
          ? 'py-2 text-sm font-semibold text-ink underline decoration-volt decoration-[3px] underline-offset-4 hover:bg-volt hover:text-onvolt transition-colors'
          : 'text-sm font-medium text-mute underline decoration-line decoration-2 underline-offset-4 hover:text-ink hover:decoration-volt transition-colors'
      }
    >
      {label}
    </a>
  )
}
