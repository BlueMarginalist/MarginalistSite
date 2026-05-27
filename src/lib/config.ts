import type { ContentType } from './types'

export const siteConfig = {
  name: 'Jacky Yang',
  handle: 'Marginalist',
  tagline: 'Mathematics & Economics',
  description:
    'Rising sophomore in mathematics and economics at Duke University, interested in macro, market, and investments',
  url: 'https://jackyyang.com',
  social: {
    github: 'https://github.com/BlueMarginalist',
    linkedin: 'https://www.linkedin.com/in/jacky-yang-duke',
    email: 'jacky.yang@duke.edu',
  },
} as const

// ─── Section configuration ────────────────────────────────────────────────────
// To rename a section everywhere on the site, change only the `label` field.
export const sectionConfig: Record<
  ContentType,
  { label: string; description: string; path: string }
> = {
  research: {
    label: 'Academics',
    description: 'Working papers, published work, and class projects.',
    path: '/research',
  },
  projects: {
    label: 'Projects',
    description: 'Tools, apps, and code experiments.',
    path: '/projects',
  },
  writing: {
    label: 'Writing',
    description: 'Notes, essays, and reading responses on economics, markets, and ideas.',
    path: '/writing',
  },
}
