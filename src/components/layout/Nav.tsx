'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { siteConfig, sectionConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

const navLinks = [
  ...Object.entries(sectionConfig).map(([, cfg]) => ({
    label: cfg.label,
    href: cfg.path,
  })),
  { label: 'About', href: '/about' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-ink"
        >
          <span
            aria-hidden
            className="block size-3 bg-volt transition-transform duration-300 ease-out group-hover:rotate-90"
          />
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'relative py-1 text-sm font-medium transition-colors',
                'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:bg-volt after:origin-left after:transition-transform after:duration-300 after:ease-out',
                isActive(link.href)
                  ? 'text-ink after:scale-x-100'
                  : 'text-mute hover:text-ink after:scale-x-0 hover:after:scale-x-100'
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex sm:hidden items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="size-11 inline-flex items-center justify-center text-mute hover:text-ink transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden border-t border-line bg-bg px-5 pb-4 pt-2 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'py-3 font-display text-xl font-semibold tracking-tight border-b border-line last:border-0 transition-colors',
                isActive(link.href) ? 'text-ink' : 'text-mute hover:text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
