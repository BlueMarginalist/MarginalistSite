import { ContentCard } from './ContentCard'
import type { ContentItem } from '@/lib/types'

export function FeaturedGrid({ items }: { items: ContentItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <ContentCard
          key={`${item.contentType}-${item.slug}`}
          item={item}
          showType
        />
      ))}
    </div>
  )
}
