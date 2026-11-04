'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface TagFilterProps {
  tags: string[]
  activeTag?: string
}

const chip =
  'px-3 py-1.5 font-mono text-xs border transition-colors'
const on = 'bg-volt text-onvolt border-volt font-semibold'
const off = 'border-line text-mute hover:text-ink hover:border-ink'

export function TagFilter({ tags, activeTag }: TagFilterProps) {
  const pathname = usePathname()

  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2" role="navigation" aria-label="Filter by tag">
      <Link href={pathname} className={cn(chip, !activeTag ? on : off)}>
        All
      </Link>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`${pathname}?tag=${encodeURIComponent(tag)}`}
          className={cn(chip, activeTag === tag ? on : off)}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}
