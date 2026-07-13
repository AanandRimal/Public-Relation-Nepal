# Public Relation Nepal

Premium enterprise website for **Public Relation Nepal** — a South Asia PR, branding, film production, and digital transformation agency.

## Tech Stack

- **Next.js 16** (App Router, SSG/ISR)
- **TypeScript** + **Tailwind CSS v4**
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for forms
- **Sanity CMS** (via abstraction layer)

## Architecture

The frontend is **CMS-agnostic**. All content flows through:

```
Page Components → lib/cms/queries → ContentRepository → Mock | Sanity
```

Switch CMS providers via `CMS_PROVIDER` env variable. UI never imports Sanity directly.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
CMS_PROVIDER=mock
NEXT_PUBLIC_SITE_URL=https://publicrelationnepal.com
```

## CMS Setup (Sanity)

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Set env vars in `.env.local`
3. Set `CMS_PROVIDER=sanity`
4. Schemas are in `sanity/schemas/`

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/about` | Company story, team, timeline |
| `/services` | All services |
| `/services/[slug]` | Service landing pages (40+) |
| `/portfolio` | Portfolio with category filters |
| `/portfolio/[slug]` | Case study pages |
| `/industries` | Industry expertise |
| `/blog` | SEO blog |
| `/resources` | Downloads, media kit |
| `/contact` | Lead generation forms |

## Adding Your Content

Replace placeholder data in `src/data/` or connect Sanity CMS. Logo, portfolio images, and team photos can be added through the CMS without code changes.

## License

Proprietary — Public Relation Nepal
