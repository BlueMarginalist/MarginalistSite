import { IframeEmbed } from '@/components/content/IframeEmbed'

// Custom components available inside any .mdx file
export const mdxComponents = {
  // Open external links in a new tab automatically
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  },
  // Embedded interactive demo — use as <IframeEmbed src="..." title="..." /> in MDX
  IframeEmbed,
}
