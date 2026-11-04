import type { Metadata } from 'next'
import { getAllContent, getAllTags } from '@/lib/content'
import { ContentCard } from '@/components/content/ContentCard'
import { TagFilter } from '@/components/content/TagFilter'
import { sectionConfig } from '@/lib/config'

const { label, description } = sectionConfig.writing

export const metadata: Metadata = {
  title: label,
  description,
}

export default async function WritingPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const { tag } = await searchParams
  const all = getAllContent('writing')
  const tags = getAllTags('writing')
  const items = tag ? all.filter((i) => i.tags?.includes(tag)) : all

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 sm:pt-24">
      <div className="mb-12">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] text-ink mb-5">
          {label}
        </h1>
        <p className="text-base sm:text-lg text-mute max-w-xl mb-10">{description}</p>
        <TagFilter tags={tags} activeTag={tag} />
      </div>

      {items.length === 0 ? (
        <p className="text-mute">No items found.</p>
      ) : (
        <div className="border-b border-line">
          {items.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
