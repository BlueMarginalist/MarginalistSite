import { compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import type { Frontmatter } from './types'

export async function compileMDXContent(source: string) {
  return compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
    components: mdxComponents,
  })
}
