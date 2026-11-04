import { siteConfig } from '@/lib/config'

const linkClass =
  'inline-block py-3 text-sm font-medium text-mute hover:text-ink underline decoration-transparent hover:decoration-volt decoration-[3px] underline-offset-[6px] transition-colors'

export function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-mute">
            Also writing as <span className="font-mono text-ink">{siteConfig.handle}</span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.social.email}`} className={linkClass}>
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
