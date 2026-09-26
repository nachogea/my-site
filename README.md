# my-site

Personal website and blog for Ignacio Gea.

Built with [Nuxt 3](https://nuxt.com), [Tailwind CSS](https://tailwindcss.com),
and [Nuxt Content](https://content.nuxt.com). The design is intentionally
minimal: a narrow text column, restrained typography, and light/dark themes.

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

```bash
npm run build     # build for production
npm run preview   # preview the production build
npm run generate  # static generation
```

## Writing posts

Posts live in `content/blog/` as Markdown files. Frontmatter is validated by
`content.config.ts`:

```yaml
---
title: "Post title"
description: "One-line summary used in listings and meta tags."
date: 2026-01-07
tags: ["career"]
readingTime: 3
---
```

## Structure

- `layouts/default.vue` - page shell (header, content column, footer)
- `components/` - `AppHeader` (nav + theme toggle) and `AppFooter`
- `pages/` - `index` (about), `blog/` (list + post), `hard-skills`
- `composables/useTheme.ts` - light/dark theme state
- `server/routes/rss.xml.ts` - RSS feed generated from the blog collection
