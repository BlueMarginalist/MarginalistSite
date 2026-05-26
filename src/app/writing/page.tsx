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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          {label}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">{description}</p>
        <TagFilter tags={tags} activeTag={tag} />
      </div>

      {items.length === 0 ? (
        <p className="text-zinc-400 dark:text-zinc-500">No items found.</p>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
