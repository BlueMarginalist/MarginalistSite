import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — mathematics and economics at Duke University.`,
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-10">
        About
      </h1>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          I&apos;m Jacky Yang, a rising sophomore at Duke University (Woodman Scholar)
          studying mathematics and economics. My interests sit at the intersection of
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

        <h2>Experience</h2>
        <p>
          I&apos;m currently an Investment Banking &amp; Financial Technology Intern at{' '}
          <strong>Gilbert &amp; Pardue Transaction Advisors</strong> in Houston. I&apos;ve
          been supporting sell-side M&amp;A processes — CIM creation, deal structuring —
          and built an automated outreach program using LLM APIs that eliminated over 20
          hours of manual work per week and saved the firm $15K annually in third-party
          subscriptions.
        </p>
        <p>
          Before that, I interned at <strong>Caprae Capital Partners</strong> (Private
          Equity, Glendale) and <strong>New Frontier Enterprise</strong> (Private Equity,
          Los Altos). At Caprae, I served five sponsor clients on Search-as-a-Service
          acquisition mandates, sourced 500+ leads, and compiled market reports in
          private credit and insurance that identified $50M+ in business development
          opportunities. At New Frontier, I screened 100+ acquisition targets across five
          deal platforms, built an LBO model for a hospice service provider, and ran
          commercial due diligence workstreams through to 5-year cash flow projections.
        </p>

        <h2>Beyond Work</h2>
        <p>
          Fencing is my favorite sport. Started fencing in middle school, I co-founded the Duke Fencing Club and coach épée. I love most sports, including soccer
          (became a Man City fan in 2025), badminton, hiking .etc. Outside of all that, I love cooking Szechuan food and meditation.
        </p>

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
