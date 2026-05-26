'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface TagFilterProps {
  tags: string[]
  activeTag?: string
}

export function TagFilter({ tags, activeTag }: TagFilterProps) {
  const pathname = usePathname()

  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2" role="navigation" aria-label="Filter by tag">
      <Link
        href={pathname}
        className={cn(
          'px-3 py-1 rounded-full text-xs font-medium transition-colors',
          !activeTag
            ? 'bg-blue-700 text-white'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
        )}
      >
        All
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`${pathname}?tag=${encodeURIComponent(tag)}`}
          className={cn(
            'px-3 py-1 rounded-full text-xs font-medium transition-colors',
            activeTag === tag
              ? 'bg-blue-700 text-white'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          )}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}
