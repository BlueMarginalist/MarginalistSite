import Link from 'next/link'
import { getFeaturedContent } from '@/lib/content'
import { FeaturedGrid } from '@/components/content/FeaturedGrid'
import { SolarSystem } from '@/components/content/SolarSystem'
import { siteConfig, sectionConfig } from '@/lib/config'

const ledger = [
  { label: 'Studying', value: 'Mathematics & Economics, Duke University' },
  {
    label: 'Research',
    value: 'Duke Economics Analytical Lab and Economic Accounts Research Lab',
  },
]

const outlineBtn =
  'inline-flex items-center px-5 py-3 text-sm font-semibold border border-ink text-ink hover:bg-ink hover:text-bg transition-colors'

export default function HomePage() {
  const featured = getFeaturedContent()

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-28 pb-8">
      {/* Hero */}
      <section className="mb-28 sm:mb-40">
        <div className="grid gap-10 md:grid-cols-[1fr_16rem] lg:grid-cols-[1fr_26rem] md:gap-10 lg:gap-8 items-center">
          <div>
            <h1
              className="rise font-display font-extrabold text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[1] tracking-[-0.03em] text-ink"
              style={{ '--i': 0 } as React.CSSProperties}
            >
              {siteConfig.name}
              <span aria-hidden className="inline-block size-[0.16em] ml-[0.08em] bg-volt" />
            </h1>
            <p
              className="rise mt-5 font-display text-lg sm:text-xl font-medium tracking-tight text-mute"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              {siteConfig.tagline}
            </p>
            <p
              className="rise mt-8 max-w-[32rem] text-base sm:text-lg leading-relaxed text-ink/85 text-pretty"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              {siteConfig.description}
            </p>
            <div
              className="rise mt-10 flex flex-wrap gap-3"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="inline-flex items-center px-5 py-3 text-sm font-semibold bg-volt text-onvolt border border-volt hover:bg-ink hover:border-ink hover:text-bg transition-colors"
              >
                Get in touch
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                GitHub
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={outlineBtn}>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rise hidden md:block lg:mr-12" style={{ '--i': 2 } as React.CSSProperties}>
            <SolarSystem />
          </div>
        </div>

        <dl className="mt-20 sm:mt-28 border-t border-ink">
          {ledger.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-8 py-5 border-b border-line"
            >
              <dt className="font-mono text-xs text-mute pt-1">{row.label}</dt>
              <dd className="text-base text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured work */}
      {featured.length > 0 && (
        <section className="mb-28 sm:mb-40">
          <div className="flex items-baseline justify-between gap-4 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-ink">
              Selected work
            </h2>
          </div>
          <FeaturedGrid items={featured} />
        </section>
      )}

      {/* Section links */}
      <section>
        <h2 className="sr-only">Browse</h2>
        <nav className="border-t border-ink">
          {Object.entries(sectionConfig).map(([type, cfg]) => (
            <Link
              key={type}
              href={cfg.path}
              className="group flex items-center justify-between gap-6 py-7 sm:py-9 px-3 -mx-3 border-b border-line transition-colors duration-200 hover:bg-volt hover:text-onvolt"
            >
              <span>
                <span className="block font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
                  {cfg.label}
                </span>
                <span className="mt-1.5 block text-sm text-mute group-hover:text-onvolt/75">
                  {cfg.description}
                </span>
              </span>
              <span
                aria-hidden
                className="font-display text-2xl sm:text-3xl transition-transform duration-300 ease-out group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          ))}
        </nav>
      </section>
    </div>
  )
}
