# SHIP codebase and delivery-plan audit

17 September 2026. Companion to the [revised demo plan](10-week-demo-plan.md) and [architecture](demo-architecture.md).

## Conclusion

Keep the presentation components and tests. Build the application backend in NestJS rather than extending the earlier Next.js-only backend proposal. This repository is a useful UI starting point, not a partially implemented transactional application. A ten-week seeded demo is plausible with the explicit reductions in the revised plan; full operational parity with every wireframe action is not a credible commitment at this capacity.

## Evidence and limits

- Audited local checkout `/Users/elizabethharris/Development/schmidthub`, commit `40b60e35d6c9b409c8065ea3a37ee3080b08eeb6`. A read-only `git ls-remote origin HEAD` returned that same SHA. GitHub connector access returned 404; the authenticated git remote check succeeded. No checkout or application source was changed.
- Existing uncommitted work in `docs/10-week-preview-proposal.md` and `docs/wireframe-action-inventory.md` was preserved. The proposal changed during this audit; this review covers the observed versions, not an immutable snapshot of another task's work.
- Read README, package/configuration files, route inventory, public catalog/detail/auth/content implementations, representative tests, current planning documents, and the generic, architecture-review and React/NestJS guidance under `~/Development/Agents`.
- Direct browser inspection: requested submitter profile; single-submission fields; organization overview/team/add-member modal; program submission governance; technical queue/detail; legal decision detail; platform overview; one-time invites; batch submission; account settings; portfolio, detail and download gate. Broader public-content, guest-form and inbox scope is also drawn from the existing [wireframe action inventory](wireframe-action-inventory.md). Its unresolved dialogs remain unverified, not confirmed behavior.
- This is a source/readiness audit and planning exercise, not a penetration test, dependency vulnerability scan, or full browser regression run. No real agreement was accepted, invitation sent, or external message submitted.

## Findings, ordered by delivery impact

| Priority / classification | Evidence | Consequence and recommended action |
| --- | --- | --- |
| High — confirmed implementation gap | `package.json:16`; `src/app/[...preview]/page.tsx:1`; no backend/migration files in the inspected source inventory | The app has Next/React/Lucide but no Nest API, database, identity integration, workflow engine or file service. Budget backend work from zero. Do not estimate completion by counting existing pages. |
| High — confirmed planning mismatch | `docs/backend-architecture.md`, Recommended shape and Proposed stack decisions | Earlier proposal puts domain logic in Next.js and proposes Prisma migrations. The latest user requirement is NestJS + Alembic + Postgres. Replace the proposed backend boundary and migration ownership before implementation; avoid running two migration systems. |
| High — confirmed planning overload | Existing ten-week proposal, weeks 3, 6, 7 and 8 | A 36-hour week combines the wizard and 500 MB file infrastructure; another combines guest security and CSV/XLSX/ZIP imports. Week 6 groups catalog, licensing, correspondence, content and settings. These are integration-heavy systems, not just forms. Define baseline cuts before scheduling and demonstrate a complete workflow earlier. |
| High — confirmed dynamic-data blocker | `src/app/portfolio/[id]/page.tsx:9`, `:11`, `:47` | Detail routes are restricted to generated fixture IDs and look up a module array. A newly published database record cannot resolve. Replace static allowlisting and fixture lookup with the catalog API; acceptance must create and open a new ID without rebuilding. This is an intentional POC limitation, not a current authentication vulnerability. |
| High — confirmed functional gaps | `src/components/participate/sign-in-form.tsx:22`; `src/app/sign-up/page.tsx:16`; `src/components/marketing/entry-detail.tsx:124` | Login/interest actions are disabled; terms, file access and messaging are unavailable. Preserve their honest status until services work. Never convert them to success toasts without database effects and permission checks. |
| Medium — confirmed sorting limitation | `src/components/marketing/portfolio-catalog.tsx:82–94`; `src/lib/content.ts:150–231` | “Newest first” returns fixture order: the November 2023 battery entry precedes the May 2024 sampling entry. Publication dates are absent, so actual newest-publication ordering cannot be verified; filing dates are not sorted either. Introduce a real publication timestamp and stable descending ordering, with an acceptance test where input order differs from date order. Current alphabetical-sort test does not catch this. |
| Medium — confirmed filter URL inconsistency | `src/components/marketing/portfolio-catalog.tsx:69–79`, `:97–104`; `src/app/portfolio/page.tsx:19–25` | Starting at plain `/portfolio`, choosing a license writes a query parameter. Clear all resets state but removes the URL only when an initial license group exists. Reload can reapply a filter the user cleared. Use one URL-driven filter model when connecting the API; test select → clear → reload. |
| Medium — confirmed data-model gap | `src/lib/content.ts:20–36` | `Entry` contains presentation strings and counts, not ownership IDs, revisions, publication state, license versions or real asset records. Use it as fixture input/UI inspiration, not as the database schema. Normalize org/program references and derive attachment counts from real associations. |
| Medium — confirmed content limitations | `src/components/resources/resources-catalog.tsx:33`; `src/components/learning/learning-hub.tsx:69–74` | Some resources deliberately announce unavailability; Learning Hub renders the entire small fixture set without pagination. Add real sample assets and bounded pagination for retained demo journeys; do not copy prototype counts such as 3,847 results. |
| Medium — confirmed verification gap | `vitest.config.mts:9–14`; `tests/` | Existing tests run in jsdom and cover frontend behavior. They do not establish server authorization, database transactions, concurrent reviews, real file permissions, or browser journeys. Add integration and end-to-end gates incrementally with the backend. |
| Medium — observed specification conflicts | Live technical detail, Program Admin submissions and inherited WF09/WF18 inventory | Technical approval requests legal review, but Program Admin exposes direct publication. Admin edits are immediate; submitter edit consequences are ambiguous. Define separate, audited commands and the proposed policies in the architecture. Do not let a generic update endpoint assign workflow status. |

These findings distinguish current defects from features intentionally absent in a POC. Missing auth is not evidence of a bypass when no protected application exists yet.

## Reuse and replacement

| Keep/adapt | Replace/build |
| --- | --- |
| Navy/white palette, serif headings, CSS tokens, shell, navigation, small UI primitives | Role-aware dashboard shell, forms, queues and admin screens |
| Portfolio cards, grid/list, detail tabs, keyboard handling and empty-state patterns | Fixture imports at runtime, static detail allowlist, guessed file counts |
| About, learning, glossary and resource page layouts | Actual demo assets, pagination and missing form effects |
| Existing component tests, lint/typecheck scripts and pnpm lockfile | Nest integration tests, permission matrix tests, migrations, API contracts, deployment pipeline |
| Fixture titles/taxonomies as labeled sample inspiration | Claims of real scientific results or verified rights; use clearly synthetic demo content |

A fresh Vite frontend would remove some Next.js complexity but spend time porting routing, links, metadata and tests without improving the demo's core workflow. Keep Next as a React presentation host. Conversely, a Next-only backend is simpler operationally but does not satisfy the requested NestJS boundary.

## Review of the old ten-week plan

Retain its staged review workflow, server-side scope checks, versioned approvals, weekly acceptance gates and 80-hour contingency. Revise these assumptions:

1. Replace the real-IP pilot/content-approval dependency with a synthetic seed pack and explicit demo notice. Real-data operation is phase 2.
2. Replace “all features until cuts are approved later” with a stated, costed baseline and phase-2 parity backlog. The requested cut list is a recommendation, not a claim that omissions have already been approved for implementation.
3. Move catalog integration before broad administration so publication is visibly useful by week 4–5.
4. Reduce file formats/size, batch scope, external routing, guest access and email. Removing already-built Grid/List or simple share links saves little compared with backend integration.
5. Reserve week 9–10 for multiuser rehearsal, repair and handover. Do not schedule new feature families there.
6. Preserve all six role experiences through shared scoped components, rather than six independent dashboard implementations.

## Verification performed

| Check | Result |
| --- | --- |
| `npm run check` | Passed: ESLint, Next route type generation/TypeScript, 8 test files and 36 tests. |
| `npm run build` | Blocked in this execution environment: Turbopack/PostCSS process attempted to bind a port and received `Operation not permitted`. Retried with escalation; same failure. Production-build success is **not verified**. Re-run on the normal development host/CI in week 1. |
| Git remote HEAD | Matches local audited commit. |
| Live wireframe navigation | Read-only screen/control inspection as listed above; no assertion of exhaustive interaction coverage. |

The build failure has an explicit environment error; it is not classified here as a proven application-code defect. No JavaScript/TypeScript was edited, no dependencies were installed, and no commit or deployment was made.
