# SHIP · schmidthub.org

Home-page proof of concept and future full application for the Schmidt Hub for
Intellectual Property. The [v5 wireframes](https://ship-wireframes-v5.netlify.app/)
are the product source of truth. The unrelated IPLicensing POC is excluded.

## Run

Requires Node.js 22.22.2+, 24.15.0+, or 26+ (the test tooling’s supported release lines).

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000 (or the port printed by Next.js). Stack: Next.js 16
App Router, React 19, TypeScript, Tailwind 4, Lucide, system sans with a Cambria/Georgia
serif display stack. No backend or new production dependencies have been added.

## Current POC

- Home: hero, three entry paths, six sample IP entries, type/tag filtering,
  licensing overview, founding partners, community CTA, navigation and footer.
- Portfolio: 12 wireframe sample entries with search, subject/entity/license/tag
  filters, sorting and grid/list views. Filters operate on local sample data.
- Responsive navigation with Escape dismissal, keyboard focus, filter feedback,
  and reduced-motion support.
- Home, portfolio, and related-entry cards open the same reusable IP detail page
  with wireframe-style tabs, a gallery, sample metadata, and related entries.
  Access, messaging, license terms, and file downloads are unavailable in the POC.
- Known unfinished destinations show an explicit POC notice and link to the
  wireframes. Unknown routes remain 404s. No login, upload, or download is simulated.
- Existing About, Learning Hub, Glossary, and Resources pages remain
  preliminary. Images and partner marks retain the wireframe placeholders.
- Footer policy names are marked unavailable until real documents exist.
- Sample entries are wireframe data, not verified live IP listings. Descriptive
  copy replacing wireframe lorem ipsum is provisional.

## Architecture and delivery

- [Backend architecture](docs/backend-architecture.md): fresh proposal, domain
  model, role boundaries, workflow, API, files, operations, and open decisions.
- [Implementation plan](docs/implementation-plan.md): full wireframe scope,
  staged delivery, acceptance gates, and first implementation backlog.
- [POC verification](docs/poc-verification.md): checks and manual regressions.
- `docs/12-week-plan.html` and `/plan.html`: historical only, visibly marked as
  superseded. Their inherited-stack assumptions and feature cuts do not apply.

## Structure and checks

`src/app/` contains routes, `src/components/marketing/` contains home sections,
`src/components/site/` the shared shell, `src/components/ui/` the primitives,
and `src/lib/content.ts` the sample content.

```sh
npm test                 # Run the regression suite once
npm run test:watch       # Re-run affected tests while editing
npm run test:coverage    # Coverage in terminal and coverage/index.html
npm run typecheck       # Generate Next.js route types and check TypeScript
npm run check           # Lint + typecheck + tests
npm run build           # Production build
```

See [testing guidance](docs/testing.md) for coverage, scope, and adding tests.
Confirm before adding production dependencies. Nothing is deployed automatically.
