import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        ink: token('ink'),
        mute: token('mute'),
        line: token('line'),
        link: token('link'),
        volt: token('volt'),
        onvolt: token('on-volt'),
        orbit: token('orbit'),
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--ink) / 0.86)',
            '--tw-prose-headings': 'rgb(var(--ink))',
            '--tw-prose-lead': 'rgb(var(--mute))',
            '--tw-prose-links': 'rgb(var(--link))',
            '--tw-prose-bold': 'rgb(var(--ink))',
            '--tw-prose-counters': 'rgb(var(--mute))',
            '--tw-prose-bullets': 'rgb(var(--mute))',
            '--tw-prose-hr': 'rgb(var(--line))',
            '--tw-prose-quotes': 'rgb(var(--ink))',
            '--tw-prose-quote-borders': 'rgb(var(--volt))',
            '--tw-prose-captions': 'rgb(var(--mute))',
            '--tw-prose-code': 'rgb(var(--ink))',
            '--tw-prose-pre-code': 'rgb(var(--ink))',
            '--tw-prose-pre-bg': 'rgb(var(--surface))',
            '--tw-prose-th-borders': 'rgb(var(--line))',
            '--tw-prose-td-borders': 'rgb(var(--line))',
            maxWidth: 'none',
            fontSize: '1rem',
            lineHeight: '1.8',
            h2: {
              fontFamily: 'var(--font-display)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop: '3em',
            },
            h3: { fontFamily: 'var(--font-display)', fontWeight: '600', letterSpacing: '-0.01em' },
            a: {
              fontWeight: '500',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              '&:hover': { textDecorationColor: 'rgb(var(--volt))', textDecorationThickness: '3px' },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: { fontFamily: 'var(--font-mono)', fontSize: '0.875em' },
            pre: { border: '1px solid rgb(var(--line))', borderRadius: '0' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
