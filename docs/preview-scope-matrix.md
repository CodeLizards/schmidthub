# SHIP preview scope and acceptance matrix

The [10-week plan](10-week-preview-proposal.md) controls delivery. The [wireframe action inventory](wireframe-action-inventory.md) records observed controls and unresolved questions. WF references below are evidence; implementation safeguards are acceptance requirements, not additional UI.

All rows remain in scope unless an owner approves a named cut and updates this matrix and the schedule. Questions must be resolved before accepting the affected behavior.

| ID | Source / plan areas | Required behavior | Target and acceptance |
| --- | --- | --- | --- |
| P01 | WF01–02 / 10 | Home/partner links, featured filters, About navigation, walkthroughs, FAQs and observed destinations | W6: controls reach their intended content; displayed records reconcile to approved data. |
| P02 | WF03–04 / 11 | Search, two sort choices, Grid/List, observed filters, tags/cards; four detail tabs, views, gallery and related entries | W6: new records resolve without rebuild; direct access and search respect permissions. No invented program filter or pagination UI. |
| P03 | WF23–24 / 13 | Learning search/categories/pagination, topics/articles/glossary/share controls; resource categories and Download/View Page/Visit Site | W6: every retained action works with approved content; counts reflect actual data. |
| P04 | WF07–08 / 3 | Email/password and Google sign-in, Forgot?, participation links and Register Your Interest | W2/W6: identity/recovery works; interest fields persist and reach partnership handling. No unobserved interest-admin dashboard. |
| S01 | WF09 / 4 | Overview counts/links; My Submissions search/status tabs; record editor Save/Discard and attachment changes | W3–4: edits persist correctly; Q2 defines published-edit effects. No added history screen or archive command. |
| S02 | WF10–12 / 5 | Two-step wizard, five type variants, exact goals/terms/source fields, contributor/contact/visibility, Create Draft/Publish | W3: values survive save/reload; final routing connects in W4–5; no new fields inferred from backend schema. |
| S03 | WF09–11, WF04–05 / 6 | Shown file formats, 500 MB, Add/Remove, attachments/gallery and access | W3/W6: safe large-file upload; unvalidated/inaccessible files denied; real metadata displayed. |
| R01 | WF13 / 7 | Queue search/tabs, individual and bulk approval, return, request-info, attachment View, Published/overview links | W4: authorized decisions persist once with correct routing; bulk follows the resolved approval rule. |
| R02 | WF14 / 8 | Legal Approve → Publish and Request info | W5: exact content/terms publication; no invented rejection/reinstatement control. Q1 resolves admin overrides separately. |
| R03 | WF12 / 9 | Recognized external/public source and no SHIP transaction → immediate publication; otherwise review | W5: agreed eligibility verified server-side with evidence; no invented trust-management screen. |
| L01 | WF05–06 / 12 | Download gate identity/acceptance/confirmation and IP contact form with four Interest choices | W6: agreed next step works, terms acceptance retained and access authorized; inquiries do not execute contracts. |
| C01 | WF13–15, WF17–18, WF22 / 14 | Inbox/reply, message and workflow notifications, visible reviewer reminders, invite/takedown delivery | W4–8: scoped delivery/read behavior works; no added inbox filters or notification preference form. |
| A01 | WF16 / 15 | Org overview/submissions/portfolio/audit; team role/authority/program affiliations; New Program and three settings fields | W7: only permitted org operations persist; exact remaining dialog states resolved before implementation. |
| A02 | WF17 / 16 | Program content/team/settings; Edit, Approve & publish, Unpublish, Take down | W7: sibling-program denial; Q1 approval rule respected; submitter notified on takedown. |
| A03 | WF18 / 17 | Organization/member management, moderation, audit list and three platform settings fields | W7: immediate admin edits audited; entity notified on takedown; no invented case/appeal or audit-filter UI. |
| A04 | WF19 / 18 | Profile display; account Email/Display name/Institution Edit and Change Password | W6: confirmed edit dialogs persist changes and identity updates safely. |
| A05 | WF20 / 19 | Exact displayed counts/rates/averages and entity benchmark table | W7/W9: formulas approved, totals reproducible and exercise data excluded; no added charts/drilldowns/date controls. |
| B01 | WF21 / 20 | Template, CSV/XLSX/ZIP, validation/error flags and draft creation | W8: safe repeat import, correct ownership and no automatic publication; Q6 specifies ZIP/error contracts. |
| G01 | WF22 / 21 | 30-day invite and tracking; guest steps, signature/agreement, Create Draft/Publish | W8: expiry, draft-resume and completion rules tested; typed-name agreement retained; no added guest approval screen. |
| O01 | WF25 / 22 | Contact reasons/name/email/message and shared navigation; previously agreed unavailable destinations retained | W6/W9: working specified contact flow; no invented policy/social destination. |
| O02 | E/U / 2, 23–24 | Private pilot, real approved data, scoped accounts, database/storage/worker, tests and operating support | W2–10: denial tests, restore/recovery and rollback pass; owners accept retained scope. |

## Change control

An approved cut records source control, affected scope IDs/tasks, replacement behavior, owner/date, remaining effort saved and revised tests. Keep unverified states in the inventory's question list; do not silently implement assumptions or use them as cut candidates.
