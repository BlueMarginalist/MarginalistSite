import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedContent } from '@/lib/content'
import { FeaturedGrid } from '@/components/content/FeaturedGrid'
import { siteConfig, sectionConfig } from '@/lib/config'

export default function HomePage() {
  const featured = getFeaturedContent()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-start gap-6 mb-6">
          {/* Profile photo — place your image at public/profile.jpg to activate */}
          <Image
            src="/profile.jpg"
            alt={siteConfig.name}
            width={80}
            height={80}
            className="rounded-full object-cover shrink-0 hidden sm:block"
            priority
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
              {siteConfig.name}
            </h1>
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-400 tracking-widest uppercase">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap gap-5 text-sm font-medium">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            GitHub →
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            Email →
          </a>
        </div>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">
            Featured Work
          </h2>
          <FeaturedGrid items={featured} />
        </section>
      )}

      {/* Section links */}
      <section>
        <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-6">
          Browse
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {Object.entries(sectionConfig).map(([type, cfg]) => (
            <Link
              key={type}
              href={cfg.path}
              className="group block p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mb-1">
                {cfg.label}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-500 leading-snug">
                {cfg.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
