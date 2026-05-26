import Link from 'next/link'
import type { ContentItem } from '@/lib/types'
import { sectionConfig } from '@/lib/config'
import { formatDateShort, cn } from '@/lib/utils'

interface ContentCardProps {
  item: ContentItem
  showType?: boolean
}

const typeBadge: Record<string, string> = {
  research:
    'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400',
  projects:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400',
  writing:
    'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400',
}

export function ContentCard({ item, showType = false }: ContentCardProps) {
  const href = `/${item.contentType}/${item.slug}`

  return (
    <article className="group border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-zinc-900/40">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {showType && (
            <span
              className={cn(
                'text-xs font-medium px-2 py-0.5 rounded-full',
                typeBadge[item.contentType]
              )}
            >
              {sectionConfig[item.contentType].label}
            </span>
          )}
          {item.status && (
            <span className="text-xs text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-full">
              {item.status}
            </span>
          )}
        </div>
        <time className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0 pt-0.5">
          {formatDateShort(item.date)}
        </time>
      </div>

      <Link href={href}>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 leading-snug mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
      </Link>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
        {item.summary}
      </p>

      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.links && (
        <div className="flex flex-wrap gap-4 pt-1 border-t border-zinc-100 dark:border-zinc-800 mt-3">
          {item.links.paper && <ExtLink href={item.links.paper} label="Paper" />}
          {item.links.arxiv && <ExtLink href={item.links.arxiv} label="arXiv" />}
          {item.links.github && <ExtLink href={item.links.github} label="GitHub" />}
          {item.links.demo && <ExtLink href={item.links.demo} label="Live demo →" accent />}
          {item.links.external && (
            <ExtLink href={item.links.external} label="View →" accent />
          )}
        </div>
      )}
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
      className={cn(
        'text-xs font-medium transition-colors',
        accent
          ? 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
      )}
    >
      {label}
    </a>
  )
}
