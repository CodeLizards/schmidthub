# Home POC verification

2026-09-16. Local development preview compared with the live v5 wireframe.

## Testing follow-up

An automated Vitest suite and scripts are now available; see [testing guidance](testing.md).
The missing-script result below records the original POC verification, before that addition.

## Original POC command checks

- `npm run lint`: passed.
- `npm run build -- --webpack`: passed, including TypeScript and generation of
  all 34 static pages (including framework pages and explicit preview destinations).
- `git diff --check`: passed.
- `npm test`: attempted; cannot run because package.json has no test script.
  No automated unit/browser suite was added in this POC.
- Default `npm run build` was blocked by Turbopack's internal port binding in
  this environment. Webpack verified production compilation without changing
  the default build command.

The unused Arimo Google Font loader was removed after font fetching failed.
No component consumed that font variable; rendered typography remains the
existing system sans and Cambria/Georgia stacks. Production compilation no longer
requires a font fetch. No new dependencies were installed.

## Browser regression cases executed

| Case | Steps | Observed result |
| --- | --- | --- |
| Type filter | Home → Patents | One of six entries, matching patent card |
| Combined filters | Select neuroscience, then Scientific Datasets | Zero results and explicit empty state |
| Recovery | Clear all filters | Six entries restored |
| Entry navigation | Open Adaptive Neural Interface | Matching title/description and POC access notice |
| Mobile menu | At 390 × 844, open menu | All four main links, sign-in, submission CTA visible |
| Escape | Open menu → Escape | Menu closed, toggle focused, aria-expanded false |
| Menu navigation | Open menu → Sign in | POC notice; menu closes |
| Preview return | Back to home | Home restored |
| License deep link | Commercial Licenses | /licensing#commercial with matching family section |
| Mobile overflow | Inspect home and licensing at 390 px | Document width and scroll width both 390 px |
| Desktop geometry | Home at 1280 px | No horizontal document overflow; expected seven section headings |
| Visual review | Desktop hero, full section structure, footer; mobile hero/menu | Wireframe structure retained; placeholder assets intentional |
| Unknown path | /not-a-ship-page | 404, not a generic preview |
| Console | Inspect preview errors after primary checks | No browser console errors observed |

Temporary viewport overrides were reset. Long full-page screenshots showed
capture stitching artifacts; viewport screenshots and DOM geometry were used
for layout confirmation. This is not an exhaustive accessibility audit.

## Behavior and limits

Interactive chips expose pressed state and maintain readable hover styles.
Filter results use a polite status region. The mobile navigation supports Escape
and link-selection dismissal. License descriptions can be revealed through
keyboard focus, and partner overlays through link focus. A skip link targets main.

The home POC uses sample data. Submission, account, contact, policy, social and
other unfinished destinations are explicit preview notices, not working backend
features. Legal documents are not fabricated. Static entry previews do not grant
licenses or serve files. Images and partner logos remain placeholders.

Public chip behavior change: `active` controls `aria-pressed`; solid/active chips
retain light text on hover instead of switching to dark text on a dark background.
The full backend remains future implementation; the testing harness has since been added.

## Portfolio follow-up

The portfolio now uses 12 sample entries from the v5 wireframe. Search, subject,
entity, license and tag filters, sorting, grid/list view and empty-state recovery
run against local fixture data. Footer policy names say “(unavailable)” and no
longer link to generic preview pages. The six-entry home section remains intact.
The new interaction suite passes with lint and typecheck (13 tests total), and
the production build succeeds. A browser check confirmed search and license
filtering on the built portfolio; at 390 px the page had no horizontal overflow.

## IP detail follow-up

Both home and portfolio cards now open the same detail route. The twelve sample
URLs, IDs, and filing dates match the v5 portfolio wireframe. Each page shows
its own title, subject, description, license label, gallery count and related
entries. The representative neural-interface sample includes the wireframe's
extended description, inventor names and attachment labels. Other samples do
not inherit those unrelated details. Tabs and gallery selection work; access,
messaging, license terms and file downloads are explicitly unavailable.
The suite now has 18 passing tests across five files, and the production build
prerenders all 12 detail routes.
