import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — mathematics and economics researcher.`,
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-10">
        About
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          <strong>[Your name and position.]</strong> I am an undergraduate at [University]
          studying mathematics and economics. My research interests span [your interests].
        </p>

        <h2>Research</h2>
        <p>
          [Describe your research focus, current projects, and academic interests. Who do
          you work with? What questions are you working on?]
        </p>

        <h2>Background</h2>
        <p>
          [Brief bio — where you are from, what you study, relevant experience,
          what you care about outside of work.]
        </p>

        <h2>CV</h2>
        <p>
          Download my CV: <a href="/cv.pdf">CV (PDF)</a>.{' '}
          <em>
            (Add your CV to <code>public/cv.pdf</code> to activate this link.)
          </em>
        </p>

        <h2>Contact</h2>
        <p>
          The best way to reach me is by email at{' '}
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>.
        </p>
      </div>
    </div>
  )
}
