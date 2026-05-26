import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            a: {
              color: '#1d4ed8',
              '&:hover': { color: '#1e40af' },
              textDecorationColor: '#93c5fd',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            a: {
              color: '#60a5fa',
              '&:hover': { color: '#93c5fd' },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
