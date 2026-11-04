import { ContentCard } from './ContentCard'
import type { ContentItem } from '@/lib/types'

export function FeaturedGrid({ items }: { items: ContentItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="border-b border-line">
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
