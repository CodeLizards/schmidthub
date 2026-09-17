# Testing

## Commands

Requires Node.js 22.22.2+, 24.15.0+, or 26+ and dependencies installed with `pnpm install`.
No database, browser binary, network access, or running Next.js server is needed
for the component suite.

| Command | Purpose |
| --- | --- |
| `npm test` | Run all tests once; exit nonzero on a failure |
| `npm run test:watch` | Watch files and rerun affected tests; press q to quit |
| `npm run test:coverage` | Run tests and write terminal, HTML and LCOV coverage |
| `npm run typecheck` | Generate Next route types and run TypeScript checking |
| `npm run check` | Run lint, typecheck and tests, stopping on the first failure |
| `npm test -- tests/site-nav.test.tsx` | Run one test file |

Equivalent `pnpm` commands work. The coverage HTML report is at
`coverage/index.html` and LCOV at `coverage/lcov.info`; generated reports are
ignored by Git and ESLint. `npm test` is deliberately a single run for scripts/CI,
while watch mode is explicit.

## Current regression coverage

Vitest runs TypeScript/React tests in JSDOM. React Testing Library queries by
accessible role/name and user-event drives interactions. Setup loads DOM matchers
and cleans up rendered components after each test. The config resolves `@/` to
`src/` and isolates the suite under `tests/`.

- `featured-entries.test.tsx`: type filtering and pressed state; combined filters;
  empty results and reset; intersection of multiple tags and tag removal.
- `portfolio-catalog.test.tsx`: search, combined subject/entity/license/tag
  filters, empty results, sorting, view selection and unavailable legal links.
- `entry-detail.test.tsx`: card links and separate tag actions; detail tabs,
  keyboard navigation, gallery selection, entry-specific content and related links.
- `site-nav.test.tsx`: keyboard activation, Escape dismissal and focus restoration;
  correct submission link and dismissal after selection.
- `preview-pages.test.tsx`: explicit POC notice and destinations; correct entry
  selection; rejection of unknown entry IDs and preview paths.

The preview tests directly await simple page functions before rendering their
returned elements. Only `notFound` is mocked with a throwing sentinel. They test
page-function contracts, **not** Next.js HTTP status codes, route matching,
streaming, hydration, or async Server Component support in Vitest. Next.js notes
that async Server Components need end-to-end coverage in its
[Vitest guide](https://nextjs.org/docs/app/guides/testing/vitest).

JSDOM does not apply responsive CSS or perform real navigation. The menu tests
exercise behavior; they do not prove breakpoint visibility. A test prevents the
browser's default link navigation while leaving the actual component click
handler in place. Real desktop/mobile and routing checks remain in
[the POC verification record](poc-verification.md).

## Adding tests

Place tests in `tests/*.test.ts(x)` and import `describe`, `it`, `expect`, and mocks
explicitly from Vitest. Test observable behavior, not internal state or class-name
snapshots. Await user interactions and assertions; do not use arbitrary sleeps.
Keep tests independent of order, a live server, or external services. Add a
regression for every behavior bug. Run `npm run check` before considering a change
verified; Vitest transpiles TypeScript but does not itself typecheck it.

Coverage includes all source TS/TSX except the framework root layout, and therefore
shows untested static pages as well as tested interactions. It is a diagnostic
report, not a claim of complete application coverage; no arbitrary percentage
gate has been added. Add browser end-to-end tests for routing/hydration and real
Postgres integration tests when those application features are implemented.

## Verification of the initial suite

The current suite has eighteen tests across five files. The coverage command generates all three
reports. Development dependencies are pinned for the test tools; Node type
definitions were aligned with Node 22. No production dependencies were added.

References: [Vitest](https://vitest.dev/guide/),
[React Testing Library setup](https://testing-library.com/docs/react-testing-library/setup/).
