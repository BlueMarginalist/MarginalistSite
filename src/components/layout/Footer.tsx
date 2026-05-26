import { siteConfig } from '@/lib/config'

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </span>
          {' · '}
          <span className="italic text-zinc-400 dark:text-zinc-500">
            {siteConfig.handle}
          </span>
        </p>
        <div className="flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
