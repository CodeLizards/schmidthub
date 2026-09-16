# schmidthub — pitch repo

Landing page + delivery-plan pitch surface for the Schmidt Hub for IP
(SHIP). Next.js 16 App Router, React 19, Tailwind 4, TypeScript.

## Standards

This project follows the shared engineering standards in the AGENTS.md
library at `~/Development/AGENTS/`. Two links surface them in this tree:

- `./AGENTS-shared.md` → generic engineering standards
  (scope, error handling, security, testing, comments, naming, git,
  dependency hygiene). Read this first.
- `./src/AGENTS.md` → React/Next.js best practices (Vercel).
  Load automatically when working under `src/`.

Where the two overlap, the stack-specific one wins.

## Project details

- **Purpose**: pitch surface — the actual product build lives in the
  inherited `IPLicensing` repo. Do not conflate.
- **Setup**: `pnpm install`, then `pnpm dev` (dev server on port 3000).
- **Build/lint**: `pnpm build`, `pnpm lint`.
- **Directory structure**:
  - `src/app/` — routes (App Router). `page.tsx` is the landing page.
  - `src/components/site/` — nav + footer shell.
  - `src/components/marketing/` — landing-page sections.
  - `src/components/ui/` — reusable primitives (Card, Chip, Button, etc.).
  - `src/lib/content.ts` — landing-page content data (entries, partners,
    licenses).
  - `docs/12-week-plan.html` — delivery plan (source of truth).
  - `public/plan.html` — served copy of the plan.
- **Conventions**:
  - Package manager: **pnpm**. Confirm before adding production deps.
  - Icons: `lucide-react` (Next.js optimizes standard imports per rule
    2.1 of the React AGENTS).
  - No design system yet; primitives live in `components/ui/` and stay
    small — extract when a shape repeats 3+ times, not on speculation.

## Deployment

Not yet deployed. Vercel deploy when the sponsor's ready to see the URL.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
