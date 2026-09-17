# SHIP: revised 10-week demo delivery plan

17 September 2026 · One full-time engineer using Codex · 5–6 invited testers

**Recommendation:** deliver a persistent, access-controlled seeded application that demonstrates submission, review, publication, discovery, sample downloads, correspondence and scoped administration. Keep all six role experiences. Reduce integration depth before cutting the central user journey. Do **not** promise full wireframe parity in ten weeks.

This is a new revision of the delivery proposal for the latest **demo-first** brief. It supersedes the older real-data pilot and Next.js-only backend assumptions for this recommendation. Earlier documents and their in-progress edits are preserved. These are proposed implementation choices and cuts, not an assertion that an application has been built or omissions already approved.

- [Codebase audit and verification](demo-codebase-audit.md)
- [Architecture, data model, API and policy defaults](demo-architecture.md)
- [Existing wireframe action inventory](wireframe-action-inventory.md), retained as supporting evidence
- [Live wireframes](https://ship-wireframes-v5.netlify.app/app/submitter/profile)
- [Repository](https://github.com/CodeLizards/schmidthub), audited at `40b60e35d6c9b409c8065ea3a37ee3080b08eeb6`

## 10-week plan for the product owner

**Goal:** give 5–6 invited people a working SHIP demo with fictional sample data. They can submit IP, review it, publish it to the demo portfolio, download sample files and exchange messages. Their changes are saved. The demo will establish the foundation for a later production release.

One engineer, supported by Codex, delivers the plan below. Allow a short demonstration and feedback session each week. The schedule reserves time for unexpected problems; weeks 9–10 focus on testing and fixes, with no new feature commitments.

| Week | What will be ready to try | What the product owner reviews or decides |
| --- | --- | --- |
| **1 — Agree the demo and get started** | A private demo site with initial sign-in and sample data. | Confirm the included features, deferred features, tester list and who may approve or publish IP. |
| **2 — Create and save a draft** | A submitter can start an entry, save it, return later and view their profile and submissions. Other users cannot open their private drafts. | Try saving and reopening a draft. Confirm the fields and account roles make sense. Review whether the remaining scope still fits ten weeks. |
| **3 — Submit IP for review** | All five IP types can be submitted with descriptions, contributors, licensing preferences and small sample attachments. | Check that each submission type captures the information reviewers need and that instructions are clear. |
| **4 — Review and publish** | A reviewer can request changes or pass an entry to legal review. Legal approval makes it appear in the searchable portfolio. | Walk through a returned submission and a successful approval. Confirm the approval steps and status labels. |
| **5 — Download and discuss** | Testers can find a published entry, accept sample terms, download a sample file, send an inquiry and reply in the app. | Try the complete journey from submission to discovery and inquiry. Identify anything that makes it confusing. |
| **6 — Manage organizations and programs** | Administrators can manage their organization's programs, existing demo members, submissions and basic settings. | Check that each administrator sees the right people and records, and cannot access another program's private work. |
| **7 — Moderate and see activity** | Platform administration, content removal, action history and basic dashboard figures work. All six role experiences are available. | Confirm who can override approval or remove content, and whether the dashboard figures answer useful questions. |
| **8 — Complete the supporting features** | Small CSV imports create drafts. Learning pages, sample resources, contact/interest forms and remaining page details are connected. | Review the whole demo, confirm remaining limitations and agree that new feature work stops at the end of this week. |
| **9 — Let the testers explore** | All 5–6 people try the app together. The engineer fixes problems and checks usability, access restrictions and recovery of saved data. | Collect feedback and rank issues by whether they prevent a useful demo. Separate essential fixes from phase-2 ideas. |
| **10 — Final fixes and handover** | A stable demo, sample data, a walkthrough and instructions for running and resetting it. A prioritized phase-2 list is ready. | Accept the demo against the agreed journeys and limitations, name its ongoing owner and choose the next priorities. |

**Limits that make this schedule achievable:** invited accounts; fictional data and sample terms; files up to 10 MB in selected formats; CSV imports of up to 20 entries; messages delivered inside the app. Full guest submissions, large uploads, Excel/ZIP imports, automatic publication from external sources and production email are proposed for phase 2. Real legal agreements and handling real IP also require a separate production release review.

**What success looks like:** a tester can complete submission → review → publication → discovery → sample download or inquiry without the engineer doing the steps for them. Each role sees the appropriate information, work survives signing out and returning, and the demo can be reset for another session.

**Product owner commitment:** attend the weekly review, answer scope and workflow questions within two business days. If work slips, agree an explicit feature reduction before sacrificing testing or the central submission-to-publication journey. The detailed schedule and cut list below explain the tradeoffs.

## 1. 10 Week Deliverables

An invited tester can create and resume an IP draft, submit it, receive a request for changes, resubmit, obtain technical and legal approval, find the new publication immediately, accept sample terms and download a real sample file, and exchange an in-app inquiry. Organization/program/platform administrators can inspect their scoped data and exercise retained governance actions. Everything on that retained path persists across browsers and server restarts.

The demo uses seed data and safe sample assets. No real IP, real commercial transaction, ownership assignment or outbound contact to sample people is required. A prominent demo notice explains this. Real tester identities may be used for sign-in; their addresses and credentials are provisioned privately.

**Capacity assumption:** 40 hours/week, 400 total; **320 planned hours and 80 contingency**. Planned hours include coding, Codex review, design decisions, tests, deployment work, meetings and documentation. Codex is assistance within this capacity, not another engineer or a guaranteed speed multiplier. Assumes an engineer comfortable with TypeScript/React, backend transactions and deployment, and sponsor answers within two business days.

**Confidence:** reasonable for the reduced baseline, subject to the week-2 reevaluation. Full operational wireframe parity is a different release. Initial planning range for adding back the omitted breadth/hardening is **roughly 200–350 additional engineer hours**, with overlaps and provider/legal uncertainty; it is not a priced commitment or a reason to consume the contingency in advance.

## 2. Architecture and reuse decision

Retain React/TypeScript and the existing Next.js UI host. Add one NestJS API, PostgreSQL and private object storage. Alembic owns migrations using a small isolated Python environment. Use typed SQL repositories (`pg`) in Nest; no second schema migration tool. Keep business rules out of Next components/routes. Use one managed identity integration, same-origin API routing, and shared scoped components for the six role experiences.

This reuses working cards, filters, detail tabs, content layouts, styling and tests. It replaces fixture-only data access and static detail routing. A rewrite of all frontend code is unnecessary; reusing the current backend proposal would conflict with the requested stack. The [architecture document](demo-architecture.md) defines the tradeoffs, failure cases, migrations, authorization, and production transition.

Do not build a generic admin framework, configurable workflow engine, microservices, a full CMS, realtime sockets or a universal design system. They are not needed to demonstrate the observed product. Extract shared forms/tables only where actual repetition justifies it.

## 3. Full feature disposition

**Build** = persisted, usable demo behavior. **Reduce** = explicit difference from the wireframe. **Defer** = phase 2; remove the action or show a clear “Phase 2” explanation, never simulated success. **Content** = static/seeded content is intentional, with working retained links. Weeks refer to implementation, including associated tests. WF references point to the existing inventory; direct observations from this audit are noted where they add detail.

| ID / wireframe evidence | Feature and retained behavior | Disposition / week | Acceptance and phase-2 remainder |
| --- | --- | --- | --- |
| F01 · WF01–02 | Home, About, participation, founding partners, FAQs, licensing overview, navigation/footer | Content · W8; reuse now | Links reach retained destinations; placeholder videos stay labeled. Seed counts are honest; no new marketing redesign. |
| F02 · WF03 | Portfolio search, subject/entity/license filters, tags, newest/A–Z, Grid/List, pagination | Build · W4 | Filters combine, clear survives reload, ordering uses publication timestamp + ID, page counts come from DB. Grid/List already exists and is cheap to keep. Pagination was directly observed in this audit. |
| F03 · WF04 | IP detail tabs, inventor/affiliation display, tags/org links, gallery, related entries, view counts | Build · W4–5 | New ID opens without rebuild; real sample assets/counts; private notes/contacts excluded. Related entries use simple scoped SQL, not recommendations infrastructure. |
| F04 · WF05 | Name/email, sample license text, checkbox, confirmation and sample-file download | Reduce · W5 | Persist acceptance tied to exact revision and sample terms; unauthorized/unpublished entry denied. Authentication identifies tester; editable form fields cannot impersonate another account. Real license/legal workflow waits for phase 2. Final prototype confirmation details remain a W1 walkthrough item. |
| F05 · WF06 | Contact IP holder / Send message: name, email, optional org, interest, message; inbox reply | Build · W5 | Store participant-scoped thread; second tester reads/replies; no external email to fictional contacts. Commercial/custom/assignment choices route here. |
| F06 · WF07 | Sign in/out, recovery, invited access | Reduce · W1–2 | Individual managed accounts; expired/revoked access rejected. Keep provider-hosted recovery; defer Google as a second login method and unrestricted self-registration. |
| F07 · WF08 | Register interest: name/org/email/optional website/reason | Reduce · W8 | Persist validated request and show receipt; operator reads it through a simple existing admin/intake view or operator command. No automated partnership onboarding. |
| F08 · WF09 | Submitter overview, My Submissions search/status tabs, draft/editor, Save/Discard | Build · W2–3 | Owner-scoped counts, reload persistence, archived fixtures, stale-edit conflict. Add a small archive action only if needed for the retained journey; it is a proposed affordance, not observed in the inventory. |
| F09 · WF10–11 | Two-step wizard, five IP types and five subjects, dates, descriptions, contributors, affiliation/contact, visibility | Build · W2–3 | All variants validate and save. Types: Patents; Technology & Equipment; Scientific Datasets; Academic Research; Creative Works. Conditional source fields retained; no generic dynamic-form engine. |
| F10 · WF10 | Four goals, seven preferred terms, notes, guide link | Build · W3 | Preserve discussion, commercial, open and assignment goals; preferences are Open Research License, Apache 2.0, MIT, CC BY 4.0, Commercial License, Full IP Assignment, Custom License Agreement. Preference never itself grants rights. |
| F11 · WF11 | Supporting files, attachments, gallery, remove/add | Reduce · W3 | 10 MB/file, five files/entry, PDF/CSV/JPG/PNG; safe supplied demo assets, actual authorization/type/size checks. Defer DOCX/ZIP/MP4, 500 MB, multipart resume, malware pipeline. Change visible format/limit copy. |
| F12 · WF12 | External repository/reference URLs and immediate-publication explanation | Reduce · W3–4 | Store/display safe HTTP(S) source links; all new demo entries undergo review. Seed an externally sourced example. Automated source eligibility and immediate publication are phase 2; change routing copy. |
| F13 · WF13 | Technical overview/queue/search/status/detail, approve-to-legal, return with reason, request info | Build · W4 | Revision-bound transitions, stale/duplicate protection; author can respond/resubmit. Defer Select all/Approve selected and automatic 14-day email reminders; show queue age. |
| F14 · WF14 | Legal overview/queue/detail, approve/publish, request info | Build · W4 | Legal publishes exact reviewed snapshot and sample terms. Do not invent a separate legal-return screen. Displayed technical Approved and published statuses remain distinct. |
| F15 · WF15 | Inbox, open/read/reply, notifications, count and Open in Inbox | Build · W5 | Real database effects and recipient checks, refresh on navigation/send. No sockets, external email or preference center. |
| F16 · WF16 | Org overview/submissions/portfolio, scoped counts and Audit Log | Build · W6 | Org-only queries; another org's private record blocked through both UI and API. Shared catalog/table components. |
| F17 · WF16 | Org Team Management, pending/active, add member, role/authority/program affiliation | Reduce · W6 | Operate on preprovisioned demo identities; fixed role grants, approve pending membership and edit scope. Capture invitation intent in demo mail sink. New real-account invitation delivery/self-service acceptance is phase 2; label pending demo accounts honestly. |
| F18 · WF16 | Programs/New Program, name and org-member admin | Build · W6 | Create program in actor's org; assign existing member; counts and ownership persist. No cross-org selection. |
| F19 · WF16 | Org settings: name, contact, default license | Build · W6 | Allowed fields persist; default affects future drafts only, not approved terms. |
| F20 · WF17 | Program overview/submissions/team/settings | Build/Reduce · W6 | Program scope on all reads/writes; team changes use existing identities. Name/lead/scope editable; parent-org transfer is deferred/read-only. Nested team controls require W1 confirmation. |
| F21 · WF17 | Program Edit / Approve & publish / Unpublish / Take down | Build · W7 | Separate governance override with scope, reason, immutable history and notification. Takedown stops new downloads and hides catalog record. Proposed policy is explicit in architecture. |
| F22 · WF18 | Super Admin organizations/users, Add organization, role/status/program management | Reduce · W7 | Create/edit org and manage preprovisioned identity memberships; platform-only privilege guard. No bulk identity provisioning or custom permission editor. Confirm nested field shapes W1. |
| F23 · WF18 | Content Moderation, entity filter/search, edit/unpublish/takedown; platform Audit Log | Build · W7 | Immediate admin edit creates new auditable publication snapshot; actor/reason recorded; paginated history. No extra moderation-case/appeal product. |
| F24 · WF18 | Platform settings: name/support contact/default license | Build · W7 | Typed field allowlist; settings have observable display/default effects and cannot execute arbitrary config. |
| F25 · WF19 | Profile, email/name/role/org/institution/country/join date; account name/institution edits | Build · W2, polish W8 | Stored profile reloads; role/org display comes from grants. Read-only provider email plus managed recovery; self-service email change and custom password UI deferred. |
| F26 · WF20 | All six overviews, counts, turnaround/download/return metrics and entity benchmarks | Reduce · W7 | SQL aggregates from seeded and demo events, labeled as demo data; formulas below; no advanced charts/export/report engine. Licensing rate is explicitly a demo acceptance metric, not an executed-license rate. |
| F27 · WF21 | CSV template, upload, validation, draft creation | Reduce · W8 | CSV only, fixed schema, 20 rows/1 MB max, all-or-nothing import with row errors and retry deduplication; no publication. XLSX/ZIP, attachments association, large/resumable imports phase 2. |
| F28 · WF22 | One-time invite name/email/note, 30-day token, sent/opened/submitted/expired tracking | Defer · P2-B | Complete guest path deferred; offer ordinary invited account/single submission in demo. Do not ship a tracking page with invented transitions. |
| F29 · WF22 | Guest orientation → subject → contributors, resume draft, signature/agreement, submit | Defer · P2-B | Phase 2 reuses validated wizard and submission service with narrow token session; expiry, single-use redemption, ownership, agreement version and email-scanner behavior all required. |
| F30 · WF23 | Learning Hub filters/search, topic/articles, glossary sections/links, related content and pagination | Content/Build · W8 | Representative synthetic articles with valid links; paginate by actual count; keep Copy link and existing low-cost share links. No invented 42-item content commitment or CMS. |
| F31 · WF24 | Resources search/categories, row actions/downloads/references/templates | Content · W8 | At least one working sample in each of four categories. Every visible row has a real destination or explicit unavailable state. No legal-template authoring effort hidden in engineering estimates. |
| F32 · WF25 | Contact reason/name/email/message, policy/social footer destinations | Reduce/Content · W8 | Contact saved for operator with receipt; no external send. Demo notice available; unspecified policy/social destinations clearly unavailable. Production policy authoring is P2-A. |
| F33 · engineering | Repeatable seed/reset, CI, restricted hosting, error handling, backup/restore, tests and runbooks | Build · W1–10 | Required delivery foundation, not a wireframe feature. See gates below. |

**Coverage boundary:** this accounts for the observed feature families, not every unexercised nested modal. Week 1 closes the named UI uncertainties (download confirmation, recovery, admin/team dialogs, guest reference details). Any additional discovered feature is classified in this matrix before being put into the schedule.

## 4. Ten-week execution schedule

Every week produces a deployed increment and an updated forecast. Hours are planning budgets, not measured task durations. The reserve covers integration/defects/unknowns; it is not promised feature capacity.

| Week | Planned / reserve | Work, in order | Exit gate |
| --- | --- | --- | --- |
| 1 — Foundation, authentication and login | 30 / 10 | Close wireframe/policy questions and freeze baseline; Nest scaffold + Alembic/DB/CI; managed authentication setup, invited-account login and restricted deployment; seed schema, scoped accounts and UI tokens. F06/F33. | Restricted URL serves a database-backed record. Login works for two accounts; API rejects an uninvited actor. Migration applies to empty DB. Normal-host production build succeeds or its blocker is fixed before feature work. |
| 2 — Account access and first persistent user journey | 34 / 6 | Scope policies/role navigation; draft creation/save/resume and My Submissions; profile, secure sessions, sign-out, session expiry, access revocation and provider-hosted account recovery; DB/permission tests and seed reset. F06/F08/F09/F25. | Sign-out, expired/revoked access and recovery work. Tester A creates draft, reloads and resumes; tester B cannot access it. Server restart retains it. Stale tab gets conflict. **Re-estimate all remaining work.** |
| 3 — Complete single submission | 36 / 4 | All wizard variants/goals/terms; bounded files and gallery association; revision/snapshot/submit validation; error/edge checks. F08–F12. | Five types can be saved and submitted with exact fields; valid sample upload succeeds, oversized/private access fails; reviewer sees immutable submitted data. |
| 4 — Review to visible publication | 36 / 4 | Shared technical/legal queues and decision UI; transactional review/return/resubmit/publication; catalog/detail API integration; state/permission regression. F02/F03/F12–F14. | Three distinct actors complete draft → technical → legal → published. Returned version can be corrected. New catalog ID opens without rebuild; duplicate or stale decision cannot republish. |
| 5 — Access and communication | 32 / 8 | Sample acceptance/download gate; inquiry/inbox/replies/notifications; gallery/related entries/view events; cross-user journey tests. F03–F05/F15. | Another tester finds publication, downloads sample and exchanges messages; unrelated user denied thread/private file. Withdrawn entry gets no new download grant. Core demo rehearsed with sponsor. |
| 6 — Organization and program use | 36 / 4 | Scoped overview/submissions/team UI; membership/program commands; org/program settings; isolation/last-admin tests. F16–F20. | Org admin creates program and assigns existing identity; program admin cannot access sibling program. Pending membership and role edits persist without privilege escalation. |
| 7 — Governance and reporting | 34 / 6 | Super-admin org/user management; moderation/override/audit; exact overview aggregates/settings; invalid-action and concurrency tests. F21–F24/F26. | All six roles usable; admin override has reason/history; takedown notifies; metrics reconcile to SQL records; defaults do not rewrite previous agreements. |
| 8 — Finish bounded breadth | 30 / 10 | Fixed CSV import/template/error flow; existing public/content pages, resource assets, contact/interest, profile polish; whole-app consistency and feedback fixes. F01/F07/F25/F27/F30–F32. | Valid CSV produces drafts once, invalid CSV none; retained visible links/actions work. **Feature freeze at week's end.** No guest/large-import work begins opportunistically. |
| 9 — Six-user rehearsal | 28 / 12 | Unscripted tester sessions and defect triage; browser/keyboard/mobile checks; restore/reset/rollback and six-user concurrency; fixes/retest. All retained F IDs. | Complete core journeys; no unresolved cross-scope access, state corruption or data-loss defects. Seed reset and restore rehearsed. |
| 10 — Stabilize and hand over | 24 / 16 | Prioritized defects; final seed/demo script and release verification; runbooks, architecture handover and phase-2 backlog. | Stable release accepted by sponsor; credentials privately distributed; operator can deploy/reset/restore. Remaining cuts/limitations visible. |
| **Total** | **320 / 80** | | |

**Authentication and login (F06) are delivered in weeks 1–2.** Week 1 connects a managed identity provider and enables login for invited testers. Week 2 completes sessions, sign-out, recovery and role/organization/program access checks. Google login as a second sign-in method, unrestricted self-registration and full guest access remain deferred; core authentication is included.

**Critical path:** foundation → identity/scope → draft/revision → review → publication → access → multiuser verification. Administration uses those same scope, query and audit mechanisms. Guest access and heavy import infrastructure are not prerequisites for this path.

## 5. Proposed cuts already assumed by this schedule

These reductions are part of the recommended baseline, not extra savings available to spend later. Ranges estimate effort avoided relative to fuller operation, including tests; they overlap and **must not be summed**. They need sponsor acceptance when implementation scope is locked; this planning task does not wait for that approval.

| Rank | Cut / reduction | Why it is efficient; retained substitute | Approximate avoided effort |
| --- | --- | --- | --- |
| 1 | Full guest invite/submission/agreement path | A second authentication and ownership lifecycle for six testers has low demo value. Use provisioned accounts and the normal wizard. F28–29. | 30–50h |
| 2 | 500 MB, multipart/resume, ZIP/DOCX/MP4 and general upload scanning | Large-file infrastructure has many failure paths. 10 MB supplied sample files still demonstrate real attachment/gallery/download behavior. F11. | 30–50h |
| 3 | XLSX/ZIP and resumable/background bulk import | Keep one fixed small CSV path; no mapping UI, job engine or file association. F27. | 20–35h |
| 4 | Automated external-source verification/immediate publication | Avoid trust rules, network fetching, redirects and source verification. Keep links, seed examples and ordinary review. F12. | 15–30h |
| 5 | Production email, automatic reminders, Google as second auth method, new-account invitation delivery | Six known testers can use provider login and real in-app messages. Capture application mail intent without deliverability/retry operations. F06/F13/F15/F17. | 20–35h |
| 6 | Production legal agreements, e-signatures/payments, real assignment/custom-contract execution | Sample acceptance and inquiries show the product. Counsel/content dependencies and actual transactions do not belong on the demo critical path. Not all of these are established wireframe features. F04/F10. | Unpriced external dependency; do not claim engineering savings for unobserved products |
| 7 | Bulk review; custom role design; self-service email changes; parent-org transfer | Keep individual decisions, fixed scope grants and existing identities. F13/F20/F22/F25. | 10–20h |

**Keep:** real persistence, server-side permissions, immutable approval history, safe sample-file access, conflict/idempotency handling, all five submission variants, the technical/legal distinction, existing Grid/List, small reusable admin screens, and release testing. These are what make the demo useful and prevent a phase-2 rewrite.

### If the reduced baseline still slips

At the end of weeks 2, 4 and 7, compare estimated remaining work with remaining planned hours plus unspent reserve. If forecast exceeds that capacity or a critical gate is more than two working days late, select a whole cut below with sponsor visibility. Do not quietly delete validation or move testing out of weeks 9–10.

1. Drop user-facing CSV import; retain operator seed command and single entry creation. Recover approximately 8–10 **remaining** hours if not built.
2. Make benchmark ratios read-only “Phase 2” explanations; keep real state counts, downloads and event capture. Recover 4–6h if not built.
3. Make organization/program creation and nonessential platform settings operator-provisioned; retain scoped views, membership checks and moderation. Recover 8–12h if not built.
4. Persist contact/interest requests only through one shared intake form; reduce article/resource population, keeping one example per category. Recover 4–8h if not built.

Do not count sunk work as savings. If those cuts do not protect the core journey and verification, extend the deadline or narrow the demo objective explicitly. “Codex will make up the time” is not a mitigation.

## 6. Seed and demo design

Proposed seed size is an engineering choice for useful exploration, not a number required by the wireframe:

- Two fictional organizations and three programs (two siblings in one org) to exercise isolation.
- Six tester accounts mapped to submitter, technical reviewer, legal reviewer, org admin, program admin and super admin. If only five people participate, one holds two explicitly assigned grants; no automatic all-role access. Extra noninteractive fixtures support denial tests.
- About 30 submissions: 15 published, 5 drafts, 3 technical review, 2 legal review, 2 returned, 1 archived, 1 unpublished, 1 taken down. Include pending info tasks, all five types, all subjects and all seven license preferences across the set. More than 12 published entries exercises portfolio pagination.
- Safe sample PDF/CSV/image files, with at least one downloadable and one gallery-bearing entry per relevant journey. No copyrighted scientific material or real findings implied by fixture prose.
- Seeded conversations, notifications and timestamped review/download events. Mark historical events as synthetic. Fix a scenario clock/reference date so “90 days” and queue age stay reproducible.
- A dozen small learning items to exercise pagination, four representative resources, contact/interest examples and empty/error cases. No need to copy every prototype placeholder row.

Two separate commands: an **idempotent seed** upserts only known baseline IDs without overwriting tester edits, and an explicit **reset** recreates the disposable demo dataset during an announced pause. Reset validates a demo-only database marker, backs up current state, restores seed fixtures and checks object references. It is not a public button. Auth sessions/tester provisioning are handled intentionally rather than leaving orphan identities.

The scripted rehearsal takes approximately 20 minutes: submitter saves/submits → reviewer requests info/returns → submitter corrects → reviewer approves → legal publishes → another user searches/downloads/messages → admin unpublishes → verify public access stops. Then let testers explore without the script. Keep seeded records in every stage so a failed transition does not prevent discussion of the remaining screens.

### Dashboard metric definitions

Compute from records/events in the current actor's authorized scope. Label all values “Demo data”; do not hardcode prototype totals. Empty denominators display “—”. Use one documented UTC boundary for each 90-day window.

| Label | Demo definition |
| --- | --- |
| Published / in review / drafts / team | Current matching records; in review includes technical and legal, excludes returned drafts. Count distinct active members. |
| Downloads (90d) | Successful authorized download-grant events in last 90 days, deduplicated by request key; not proof of full file transfer. |
| Downloads / entry | Those events divided by entries with any published availability during the window; use the same population for org and platform totals. |
| Licensing rate | Rename/help-text as **demo acceptance rate**: distinct eligible published entries with at least one sample acceptance / eligible entries published during the window. Not commercial contracts executed. |
| Return rate | Technical decisions returning a revision / completed technical approve-or-return decisions in the window; info requests excluded. |
| Avg. turnaround | Mean elapsed time from revision entering that review stage to its completed decision; unresolved reviews excluded; technical/legal separate. |
| Platform benchmark | Recompute from platform numerators/denominators, not an unweighted mean of org percentages. |

## 7. Design and engineering delivery discipline

Keep the wireframe's navy/white palette, serif headings, readable forms, status chips, table/card patterns and role navigation. Use the existing CSS tokens. Shared primitives should include only what repeated screens need: labeled field, error summary, modal, table, status badge, file list and confirmation. Desktop is the primary demo target, with usable narrow layouts and keyboard navigation for the complete critical journey.

Every retained form includes loading, empty, validation, permission, success and retry states; users see whether changes have been saved. Modal focus returns to its trigger. Tables have headers; errors connect to fields; status is not color-only. Unsupported features have a clear explanation rather than active-looking dead controls. “Publish” copy explains whether the command actually submits for review.

Use Codex for bounded vertical slices: specify permission/state/acceptance contract, implement one slice, have the engineer review transactions/auth/migrations, run checks, then integrate. Do not generate all six dashboards before there is one working backend journey. Human review owns domain policy, generated schema changes, security boundaries and the final UX. Keep PRs small and update the feature matrix when behavior changes.

Per local guidelines: pnpm installs; confirm new production dependencies before adding them; run `npm test` after JavaScript changes; run lint before any PR; document public utility behavior changes in `docs/`. Root checks must eventually run both frontend and API suites. No dependencies or application code are changed by this proposal.

## 8. Acceptance and release gates

1. **Every slice:** lint/typecheck, meaningful component/service tests, actual Postgres integration for permissions/state, and regression tests for defects. Preserve the current 36 frontend tests where behavior is retained; update POC-only expectations as features become real.
2. **Workflow:** save/resume, all five types, file bounds, return/resubmit, info response, legal publish, admin override, published-edit isolation, sample acceptance/download and reply. Test duplicate requests and simultaneous decisions, not just the happy path.
3. **Access:** owner versus unrelated submitter; org A versus B; sibling programs; disabled membership; unauthorized admin grant; private entry direct URL/file; thread participants; last-admin removal. Assert denials at the API, not only hidden buttons.
4. **Migration/seed:** empty DB → head, previous release → head, second seed run creates no duplicates or lost tester changes; reset refused outside demo; restore references usable objects.
5. **Multiuser/UI:** six concurrent testers on a small deployed instance; Chrome and Safari critical journey; keyboard-only forms/dialogs and usable mobile width. Target ordinary API reads/writes under one second at this load, excluding identity and file transfer; investigate measured failures rather than promising untested production performance.
6. **Recovery:** demonstrate database backup restore, sample-file recovery, application rollback and restart. Proposed demo target: restore to usable state within one hour, up to one day's exploratory changes lost from daily backups; resetting to seed is an explicit alternative, not a claim that user edits were recovered.
7. **Release:** no unresolved authorization leak, data loss, invalid publication or blocker on the core journey. Sponsor accepts known limitations and the cut list. Operator has private account instructions, deploy/migrate/seed/reset/restore runbooks, environment inventory and ownership of follow-up defects.

Baseline audit result: lint/typecheck and 36 tests pass. Production build could not be verified here because Turbopack was denied a local compilation port, including on retry. This environment blocker is recorded in the [audit](demo-codebase-audit.md), and normal-host/CI build verification is a week-1 gate.

## 9. Phase 2: production and remaining wireframe parity

Production is a separate release gate, not a toggle on the demo environment. Sequence the following after measuring demo feedback. Effort ranges are directional and overlap; re-estimate after week 10.

| Work package | Scope / dependencies | Exit evidence |
| --- | --- | --- |
| P2-A — real-data launch foundation | Confirm real ownership/terms/policy/privacy/retention; provider residency, operational owner, SSO/MFA needs; managed recovery and invitations; revoke demo reset access; threat review and external-email outbox/worker | Approved policies/content; restore drill and incident process; scoped security review; no fictional metrics presented as real. |
| P2-B — guest and onboarding | F28–29, full member invites, Google/required identity modes, interest onboarding; hashed tokens, 30-day expiry, draft resume, agreement version, scope and one-time redemption | Expired/reused/revoked tokens fail; email scanners do not consume invite; correct org receives entry; real actor/ownership policy verified. |
| P2-C — files and bulk | 500 MB direct multipart/resume, all required formats, quarantine/scans/cleanup; XLSX/ZIP association and background import, row outcomes/retry controls | Boundary-size upload, unsafe file rejection, interrupted-job recovery, no duplicated drafts, no import auto-publication. |
| P2-D — publication parity | Verified recognized external sources, documented bypass eligibility, public indexing/private policy, production term versions, final governance policies and bulk review | Failed trust checks go to review; stale approvals rejected; actual terms and availability enforced; exact wireframe actions reconciled. |
| P2-E — reporting/content/operations | Real metric definitions and consent/event collection, fuller content and policy destinations, appropriate monitoring/load/accessibility review, reminders and delivery preferences if required | Reconciled real reports; performance and recovery targets measured at expected launch load; complete feature-matrix acceptance. |

P2-A precedes admitting real IP or unrestricted users. B/C/D can then be prioritized by demo feedback; no need to reimplement the domain core. Retain Alembic history, scoped APIs, immutable snapshots and private storage, and extend the deliberately deferred adapters and capabilities.

## 10. Decisions needed before implementation, with defaults

The plan is complete without another discovery round. These are kickoff decisions, with assumptions already priced above:

| Decision | Recommended default / owner / deadline |
| --- | --- |
| Scope | Sponsor accepts the reduced baseline and phase-2 list; W1 day 2. If every action must ship, revise time/capacity instead of claiming this schedule covers it. |
| Provider/region/budget | Engineer uses existing approved hosting/identity/storage accounts, one stable demo; sponsor resolves spend/region in W1. Provider purchases are not authorized by this document. |
| Governance and visibility | Architecture defaults for override, published edits, self-review and private access; sponsor W1. |
| Seed assets and labels | Synthetic-only data, six invited accounts, safe sample files, sample terms and demo notice; engineer prepares, sponsor reviews W1–2. |
| Modal/field gaps | Engineer verifies remaining controls and records intentional deviations before related feature work, W1. No new large feature silently enters the baseline. |
| Production ambition | Real-data launch is phase 2 with its own operational/security/content acceptance, not implied by a successful demo; sponsor confirms W1. |
