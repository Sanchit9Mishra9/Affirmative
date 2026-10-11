# Trugro

Public website for **Trugro Advisors LLP** — defence strategy consulting for enterprises entering India’s defence ecosystem.

**Building defence enterprises today**

Trugro consults companies from Product Readiness through procurement: capabilities across aftermarket, digital, alliances, marketing, productivity, strategy, talent and transformation; technology across UAV/CUAS, satellite, combat platforms, RCWS, electro-optics, quantum and directed energy. Offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad.

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
| Growth | `#B9F227` | Sparse accent: CTAs, focus, separators |
| Stone | `#5C6673` | Supporting copy |

The header and footer use the official Trugro serif wordmark in `/public/brand`.

Typography: Instrument Serif for display headlines, Geist for interface and body.

Capabilities, technology, engagements, partners and navigation live in `lib/content.ts`.

The homepage is a non-scrolling McKinsey-style carousel (Capability, Partners, Insight, Services, Podcast, Connect) over a Kartavya Path / India Gate photograph. Primary navigation is a left hamburger overlay.

## On-site SEO

- Unique titles, descriptions and canonicals on every route (`lib/seo.ts`)
- `robots.txt` and XML sitemap at `/robots.txt` and `/sitemap.xml`
- JSON-LD for Organization, WebSite, FAQ, Service, Article, HowTo and breadcrumbs
- Open Graph / Twitter cards and a generated social image
- `lang="en-IN"`, breadcrumb trails, descriptive image alts
- `/technology` URLs, with 301s from `/domains` and `/industries`
- Capability pages at `/capabilities/[slug]`, with 301s from former `/what-we-do/[slug]` routes

## Notes

- Firm impact figures on capability pages: 3 countries served, 3 of top defence companies served, more than 10 A & D experts.
- Client marks on About describe types of organisations (mid-size tech, large enterprises, defence startups, foreign OEMs). They are not reproductions of client brand identities.
- The contact form validates in the browser and does not persist submissions. Enquiries in production should go to connect@trugro.in.
- Cookie analytics remain off until a visitor opts in via Cookie Preferences.
- Trugro Blog and Trugro Podcast are published as Coming Soon.
