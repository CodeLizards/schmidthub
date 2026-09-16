# SHIP · schmidthub.org

A landing-page prototype for the **Schmidt Hub for Intellectual Property** —
an invite-only pitch surface that shows what the product will look like
before implementation begins, alongside the twelve-week delivery plan.

> This is the **pitch repo**, not the build repo. Real implementation
> continues in the inherited `IPLicensing` codebase per the plan.

## Run it

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The plan is at <http://localhost:3000/plan.html>
(also linked from the footer under "For the sponsor").

## What's in here

- `src/app/` — landing page (`page.tsx`), root layout with fonts + nav +
  footer, global tokens
- `src/components/` — `site-nav`, `site-footer`
- `src/lib/content.ts` — featured entries, founding partners, and
  license types. All strings pulled from the SHIP wireframes so the pitch
  site shows real, recognisable content — not lorem
- `public/plan.html` — the twelve-week delivery plan, served statically
- `docs/12-week-plan.html` — source of truth for the plan (identical to
  `public/plan.html`; edit here and copy across, or later render both from
  a single source)

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind 4 · Newsreader + IBM Plex Sans
+ IBM Plex Mono via `next/font/google`.

## Not included

Anything the plan lists in "Out — deferred past the demo". This repo is
the marketing homepage and the plan doc, nothing else. The submitter
wizard, review queue, admin panels, and the full portfolio browse all
land in the build repo starting W1.
