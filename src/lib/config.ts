import type { ContentType } from './types'

export const siteConfig = {
  name: 'Jacky Yang',
  handle: 'Marginalist',
  tagline: 'Mathematics & Economics',
  description:
    'Undergraduate researcher in mathematics and economics, building tools at the intersection of theory and markets.',
  url: 'https://jackyyang.com',
  social: {
    github: 'https://github.com/jackyyang',
    linkedin: 'https://linkedin.com/in/jackyyang',
    email: 'mmgjackyyang@gmail.com',
  },
} as const

// ─── Section configuration ────────────────────────────────────────────────────
// To rename a section everywhere on the site, change only the `label` field.
export const sectionConfig: Record<
  ContentType,
  { label: string; description: string; path: string }
> = {
  research: {
    label: 'Research',
    description: 'Working papers, published work, and research notes.',
    path: '/research',
  },
  projects: {
    label: 'Projects',
    description: 'Tools, apps, and code experiments.',
    path: '/projects',
  },
  writing: {
    label: 'Marginalist',
    description: 'Notes, essays, and reading responses on economics, markets, and ideas.',
    path: '/writing',
  },
}
