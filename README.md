# Trugro

Public website for **Trugro Advisors LLP** — defence strategy consulting for enterprises entering India’s defence ecosystem.

**Building Defence Enterprises Today.**

Trugro consults companies from product readiness through procurement: market entry, GSQR and trial positioning, iDEX/MAKE navigation, and OEM–DPSU relationships. Offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad.

## Stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Framer Motion for restrained motion

## Run locally

```bash
npm install
npm run dev
```

The app listens on [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run build
npm start
```

`npm start` serves the production build on the same port.

## Design system

Tokens live in `app/globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| Navy | `#012160` | Official wordmark color; primary ink, dark sections, logo |
| Paper | `#F5F5F1` | Page ground |
| Growth | `#B9F227` | Sparse accent: CTAs, focus, data |
| Stone | `#5C6673` | Supporting copy |

The header and footer use the official Trugro serif wordmark in `/public/brand`.

Typography: Instrument Serif for display headlines, Geist for interface and body.

Capabilities, domains, engagements, leadership and navigation live in `lib/content.ts`.

## On-site SEO

- Unique titles, descriptions and canonicals on every route (`lib/seo.ts`)
- `robots.txt` and XML sitemap at `/robots.txt` and `/sitemap.xml`
- JSON-LD for Organization, WebSite, FAQ, Service, Article, HowTo and breadcrumbs
- Open Graph / Twitter cards and a generated social image
- `lang="en-IN"`, breadcrumb trails, descriptive image alts, and `/domains` URLs (with 301s from `/industries`)

## Notes

- Sector statistics (defence budget, indigenisation, iDEX, exports) describe India’s market, not Trugro’s own performance.
- The contact form validates in the browser and does not persist submissions. Enquiries in production should go to connect@trugro.in.
- Cookie analytics remain off until a visitor opts in via Cookie Preferences.
