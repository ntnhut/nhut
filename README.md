# Nhut Nguyen's Homepage

Open-source code for my personal homepage and blog, built with [Astro](https://astro.build/).

## Tech Stack

- Astro
- Markdown and MDX content
- RSS and sitemap generation
- Local font loading with Astro font providers

## Project Layout

```text
.
├── public/                  # Static assets copied as-is
├── src/
│   ├── assets/              # Images and local font files
│   ├── components/          # Shared UI components (header, footer, etc.)
│   ├── content/blog/        # Blog posts in Markdown/MDX
│   ├── layouts/             # Page and post layouts
│   ├── pages/               # Route files (.astro, .md, .mdx)
│   ├── styles/              # Global styles
│   └── utils/               # Utilities (for example URL/base helpers)
├── astro.config.mjs
├── package.json
└── README.md
```

## Development

Requirements:

- Node.js >= 22.12.0

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Deployment

This site is configured for GitHub Pages project deployment with:

- `site: https://ntnhut.github.io/nhut/`
- `base: /nhut`

If the repository name or deployment path changes, update both values in `astro.config.mjs`.

## Content Editing

- Home/about pages can be authored in Markdown under `src/pages/`.
- Blog posts live in `src/content/blog/`.
- Shared page shell and metadata are managed in `src/layouts/` and `src/components/`.
