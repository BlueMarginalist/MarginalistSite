# jackyyang.com

Personal research and portfolio site. Built with Next.js 15 (App Router), Tailwind CSS, and MDX.

---

## Adding new content

Drop an `.mdx` file into the right folder. That's it — no code changes needed.

### Folders

| Folder | URL pattern | Use for |
|--------|-------------|---------|
| `content/research/` | `/research/[slug]` | Papers, working papers, RA work |
| `content/projects/` | `/projects/[slug]` | Tools, apps, code experiments |
| `content/writing/` | `/writing/[slug]` | Essays, notes, reading responses |

### Frontmatter fields

Every `.mdx` file starts with a YAML block between `---` delimiters:

```yaml
---
title: "Your Title Here"
date: "2025-12-01"          # ISO 8601 date — used for sorting
type: research              # research | projects | writing
summary: "One or two sentences shown on listing cards and in meta tags."
tags: [tag-one, tag-two]    # used for the filterable tag buttons
featured: false             # true → appears in the "Featured Work" grid on the home page

# Research only:
status: working-paper       # working-paper | published | preprint

# Links (all optional, include only what applies):
links:
  paper: /papers/myfile.pdf
  arxiv: https://arxiv.org/abs/...
  github: https://github.com/you/repo
  demo: https://tools.jackyyang.com/tool-name
  external: https://any-other-url.com

# Projects only — renders an iframe embed on the detail page:
iframe: https://tools.jackyyang.com/embed/tool-name
---
```

Then write the body of your content in Markdown / MDX below the closing `---`.

### Custom MDX components available in any content file

| Component | Usage |
|-----------|-------|
| `<IframeEmbed>` | `<IframeEmbed src="https://..." title="Demo name" height={500} />` |

---

## Renaming sections

Open `src/lib/config.ts` and edit the `label` field in `sectionConfig`:

```ts
export const sectionConfig = {
  research: { label: 'Research', ... },
  projects: { label: 'Projects', ... },
  writing:  { label: 'Marginalist', ... },  // ← change any of these
}
```

The nav, page headings, breadcrumbs, and type badges all pick up the change automatically.

---

## Adding a new top-level section

1. Create `content/newsection/` and add `.mdx` files.
2. Add `'newsection'` to the `ContentType` union in `src/lib/types.ts`.
3. Add an entry to `sectionConfig` in `src/lib/config.ts`.
4. Copy `src/app/research/` → `src/app/newsection/` and change the one `'research'` argument to `'newsection'` in both files.

The sitemap, featured grid, and tag filters pick up the new section automatically.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.

No environment variables are needed. The site is fully static at build time.

### Custom domain

In the Vercel dashboard → **Settings → Domains**, add `jackyyang.com` and follow the DNS instructions for your registrar.

---

## Placeholders to replace

| File | What to do |
|------|-----------|
| `public/favicon.svg` | Replace with your actual favicon |
| `public/og-default.png` | Add a 1200×630 PNG for Open Graph previews |
| `public/cv.pdf` | Add your CV to activate the download link on `/about` |
| `src/lib/config.ts` | Update `siteConfig` with your real GitHub/LinkedIn URLs |
| `src/app/about/page.tsx` | Fill in your actual bio |
