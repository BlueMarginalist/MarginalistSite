import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — mathematics and economics at Duke University.`,
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 pt-14 sm:pt-24">
      <div className="flex items-end justify-between gap-6 mb-14">
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] text-ink">
          About
        </h1>
        <div className="relative w-28 sm:w-36 shrink-0">
          <Image
            src="/profile.jpg"
            alt={siteConfig.name}
            width={240}
            height={300}
            className="w-full aspect-[4/5] object-cover grayscale contrast-105"
            priority
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1.5 bg-volt" />
        </div>
      </div>

      <div className="prose max-w-none">
        <p>
          I&apos;m a student at Duke University studying mathematics and economics. My interests sit at the intersection of
          macro, markets, and investments: my passion is to understand the grand paradigm
          moving economies, and how that will affect market pricing.
        </p>

        <h2>Academics</h2>
        <p>
          My academic work sits at intersection of mathematics and economics. Completed courses
          include: Linear Algebra (Math 221), Advanced Introduction to Probability (Math 340),
          Intermediate Microeconomics I (Econ 201), Introduction to Machine Learning, Economics Principles (Econ 101)
        </p>
        <p>
          I&apos;m also a research assistant in the Duke Economics Analytical Lab, where
          I work with Professor Aguilar on macroeconomics and financial market research.
          I built an automated macroeconomic data dashboard using Python and FRED time
          series data — it&apos;s now used in both monetary policy research and advanced
          macro coursework.
        </p>

        <h2>Beyond Work</h2>
        <dl className="not-prose mt-8 border-t border-ink">
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-8 py-6 border-b border-line">
            <dt className="font-mono text-xs text-mute pt-1.5">Fencing</dt>
            <dd>
              <p className="font-display text-xl font-semibold tracking-tight text-ink text-balance">
                My favorite sport.
              </p>
              <p className="mt-2 text-base leading-relaxed text-mute">
                Started in middle school. I co-founded the Duke Fencing Club and coach épée.
              </p>
              <div className="mt-5 flex items-start gap-3">
                <Image
                  src="/about/fencing.jpg"
                  alt="Fencing teammates and a coach posing with the Duke Blue Devil mascot in front of blue lockers and fencing trophies"
                  width={1500}
                  height={2000}
                  sizes="170px"
                  className="h-44 sm:h-56 w-auto"
                />
                <div className="h-44 sm:h-56 bg-white border border-line">
                  <Image
                    src="/about/duke-club-fencing.png"
                    alt="Club Fencing at Duke logo"
                    width={691}
                    height={681}
                    className="h-full w-auto"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-8 py-6 border-b border-line">
            <dt className="font-mono text-xs text-mute pt-0.5">Other sports</dt>
            <dd className="text-base leading-relaxed text-ink">
              <p>I love most sports: soccer (a Man City fan since 2025), badminton, hiking, and more.</p>
              <Image
                src="/about/soccer.jpg"
                alt="Players and staff gathered on the pitch at a stadium, with a pink Gracias Jordi banner behind them"
                width={1500}
                height={1125}
                sizes="(min-width: 640px) 360px, 100vw"
                className="mt-5 w-full max-w-sm h-auto"
              />
            </dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-8 py-6 border-b border-line">
            <dt className="font-mono text-xs text-mute pt-0.5">Off the piste</dt>
            <dd className="text-base leading-relaxed text-ink">
              Cooking, and exploring local restaurants in Durham!
            </dd>
          </div>
        </dl>

        <h2>CV</h2>
        <p>
          Download my CV:{' '}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            CV (PDF)
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          The best way to reach me is by email at{' '}
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>.
          I&apos;m also on{' '}
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          and{' '}
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  )
}
