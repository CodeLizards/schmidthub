# SHIP: 10-week functional preview plan

**Capacity:** One full-time developer with Codex. **Users:** 5–6 invited testers.
**Source of truth:** [v5 wireframes](https://ship-wireframes-v5.netlify.app/). **Repository:** `schmidthub`.

## Scope rules

Implement the visible wireframe pages, fields and actions using real owner-approved data. Reuse the existing UI. Every product task below cites a screen in the [wireframe action inventory](wireframe-action-inventory.md); its navigation path and exact control labels are recorded there.

- **WF:** Observed wireframe feature. No additional controls, workflows or integrations are implied.
- **E:** Supporting engineering work required for persistence, permissions, reliability or testing; not a wireframe feature.
- **U:** User-requested pilot constraints: restricted hosting, real approved data, 5–6 users and the ten-week proposal.
- **Q:** An unresolved wireframe detail or contradiction, recorded in the inventory. Resolve before implementing the affected behavior.

The prototype does not specify every backend rule. Unverified dialogs and contradictory behavior remain questions, not assumed requirements. Earlier planning documents cannot expand this scope.

## Ten-week delivery schedule

**400 hours: 320 planned, 80 contingency.** Weeks begin on an agreed start date. Area numbers refer to the checklist below. Test each feature as it is delivered.

| Week | Hours | Deliverable / areas | Acceptance |
| --- | ---: | --- | --- |
| 1 — Confirm wireframe behavior | 30 | Complete remaining control walkthroughs and resolve Q1–Q10; choose backend providers; identify pilot users and approved data/content. **Areas 1, 2, 23.** | Each action has a source; contradictory approval/edit behavior and incomplete dialogs are resolved. |
| 2 — Identity and foundation | 32 | Email/password and Google sign-in, recovery, scoped accounts; database, services, worker, restricted hosting, CI, monitoring and backups. **Areas 2, 3, 23, 24.** | Sign-in/recovery and access tests pass; migrations and initial restore work. |
| 3 — Submission and files | 36 | Two-step submission, five type variants, Create Draft, existing-entry editor, supporting files/attachments and seed import tooling. **Areas 4–6, 23, 24.** | Fields persist, Save/Discard work, allowed 500 MB uploads pass validation and private files remain protected. |
| 4 — Technical review and correspondence | 36 | Submitter overview/list, review queue/detail and bulk action; return/info requests, Inbox, Notifications and reviewer reminders. **Areas 4, 7, 14, 19, 24.** | Review actions use the agreed routing; replies and updates persist and reach permitted users. |
| 5 — Legal review and publication | 34 | Legal decision actions, publication and external-public routing; connect review outcomes and updates. **Areas 8, 9, 14, 19, 24.** | Legal Publish and eligible immediate publication work; source checks and permissions cannot be bypassed. |
| 6 — Catalog and public journeys | 34 | Home/About/partners, portfolio Grid/List/search/filters/details, download gate and contact relay; Learning Hub/Resources, interest/contact forms, profile/account settings; approved content/data. **Areas 3, 6, 10–14, 18, 19, 22–24.** | Observed links, fields and actions work with real data; no new pages or controls inferred from placeholders. |
| 7 — Administration and metrics | 36 | Organization/program/platform screens and exact settings fields; moderation, audit, displayed counts/benchmarks and admin notifications. **Areas 14–17, 19, 24.** | Scope isolation holds; immediate admin edits and approval overrides follow resolved wireframe rules; displayed metrics reconcile. |
| 8 — Batch and guest paths | 36 | CSV/XLSX/ZIP batch-to-draft flow; 30-day secure invites, tracking, guest wizard and signed agreement. **Areas 14, 20, 21, 24.** | Imports create drafts once; guest draft/submission, expiry and tracking follow the agreed contract. |
| 9 — Pilot acceptance | 28 | All role journeys; content, metrics, accessibility/mobile, access tests and restore/recovery rehearsal. **Areas 19, 22–24; all WF tasks.** | Retained wireframe actions pass with approved data; no unresolved access or data-loss defects. |
| 10 — Release and handover | 18 | Fix acceptance defects; release approved pilot; seed baseline, runbooks and deferred-work list. **Areas 23, 24.** | Owner acceptance, deployment/rollback verification and named operator. |
| **Total** | **320** | **80 hours contingency** | |

Re-estimate after week 2 and review progress weekly. If remaining work exceeds capacity, extend delivery or approve specific cuts below. Preserve weeks 9–10 for acceptance and handover. No cuts are currently approved.

## Scope cut list

Each option removes or narrows an observed wireframe feature. The order is a proposal based on preserving individual submission, review and access; savings must be estimated from remaining work. Existing UI may make some cuts save little time.

| Priority | Exact feature / evidence | Proposed reduction | Remaining behavior and impact | Areas / week |
| --- | --- | --- | --- | --- |
| 1 | Topic-page LinkedIn, X, Email and Copy link actions — WF23 | Defer the three social/email share buttons | Keep Copy link, reading, glossary links and related topics. | 13 / W6 |
| 2 | IP Portfolio → Grid / List — WF03 | Defer List view | Keep Grid, search, sort, filters and entry details. Users lose the alternate layout. | 11 / W6 |
| 3 | Reviewer queue → Select all pending / Approve selected — WF13 | Defer bulk approval | Keep individual review and approval using the same required routing. Reviewers act one entry at a time. | 7 / W4 |
| 4 | Batch Upload → CSV, XLSX or ZIP — WF21 | Accept CSV only | Keep template, row validation and draft creation; users convert spreadsheets and attach files individually. | 20 / W8 |
| 5 | Reviewer/legal overview → Queue reminders; Automatic reminders scheduled — WF13–14 | Defer automatic reminders | Keep queue, age information, decisions and Notifications. Reviewers check queues themselves. | 7, 8, 14 / W4–5 |
| 6 | 1-Time Invites and 1-Time Submission — WF22 | Defer the complete guest path | Contributors need invited accounts and use the normal wizard. Defer invite sending/tracking and guest forms together. | 21 / W8 |
| 7 | New Submission → Batch Upload — WF21 | Defer batch entirely; replaces cut 4 | Keep Single Submission and operator seed import. Users enter each record separately. | 20 / W8 |

Approve each cut with its affected controls, tasks, acceptance scenarios and estimated remaining hours saved; update this schedule and the scope matrix together. Do not count unspecified analytics, customization or smaller invented seed targets as savings. A cut changes wireframe parity and must be explicit.

Engineering safeguards and the user-required private pilot boundary remain. Retained workflows must still persist correctly, enforce authority and protect files/terms; keep critical tests, backups, restore and rollback.

## Step-by-step feature implementation checklist

Each task has a delivery week and evidence/basis. Complete tasks in order within the area; shared foundations support later screens. References to Q items mean resolve the existing action's behavior, not add a new feature.

### 1. Scope and decisions

1. [ ] **W1 · E; all WF:** Complete the remaining control states in Q8 and record their actual fields and outcomes; resolve Q1–Q10 against the wireframes with the owners.
2. [ ] **W1 · E/U:** Map every retained action to its implementation, permissions, persisted data and acceptance test; approve the pilot roster and data/content delivery dates.

### 2. Backend foundation

1. [ ] **W1 · E/U:** Confirm database, identity, private storage, worker, email, region and budget; retain the existing Vercel UI host where suitable.
2. [ ] **W2 · E; WF07–22:** Create schema/migrations, service authorization, input validation, consistent errors and internal revision/terms history for the observed workflows.
3. [ ] **W2 · E; WF11–15, WF21–22:** Create private upload/storage and durable job/outbox foundations with retries, duplicate protection and operator-visible failures.
4. [ ] **W2 · U/E:** Separate synthetic previews from the real pilot; restrict pages, APIs and files to testers, with individual accounts and scoped authority.

### 3. Sign-in, participation and interest

1. [ ] **W2 · WF07; E:** Implement Email, Password, Continue, Sign in with Google, Forgot? and Sign out using managed identity; verify recovery behavior from Q8.
2. [ ] **W6 · WF07–08:** Connect Create one, Request to join and participation destinations. Persist Full Name, Organization, Email, optional Website and reason through Submit interest; route to the partnership team without inventing an approval dashboard.

### 4. My Submissions and submitter overview

1. [ ] **W3 · WF09–10:** Implement Create Draft and opening a saved record. Build the editor fields, Tags, attachment Add/Remove, Save changes and Discard changes.
2. [ ] **W4 · WF09:** Connect overview counts and links, My Submissions search and All/Published/Pending Review/Draft/Archived tabs, New submission and profile/notification links.
3. [ ] **W4 · WF09; Q2:** Apply the agreed Save changes behavior to pending/published entries. Preserve internal history; do not add a revision-history screen, archive command or approval cycle absent from the wireframes.

### 5. Single Submission

1. [ ] **W3 · WF10:** Build IP Subject and Inventors & Authors steps: title, type, date, subject, abstract/full description, comma-separated inventors, affiliation, contact and public-indexing checkbox.
2. [ ] **W3 · WF11:** Add the exact conditional media/repository/database/reference URL fields for all five types; Patents retain the stated no-external-source behavior.
3. [ ] **W3 · WF10:** Implement the four target-goal checkboxes, seven preferred-license choices, Licensing notes and View licensing guide.
4. [ ] **W3 · WF10, WF12; E:** Connect Back, Next, Create Draft and Publish; validate and persist the submitted record. Wire routing into areas 7–9 when delivered; retain preferred terms separately from later approval records.

### 6. Files and gallery

1. [ ] **W3 · WF09–11; E:** Implement browse/drop uploads and editor Add/Remove for the shown formats and 500 MB limit; associate documents with Attachments and images with Gallery.
2. [ ] **W3 · E; WF11:** Use direct uploads, size/type/checksum validation, quarantine/scanning, retry and abandoned-upload cleanup; do not add an upload-management screen.
3. [ ] **W6 · WF04–05; E:** Render approved files/gallery and authorize View/download access; show real file metadata and prevent access to unauthorized or unvalidated objects.

### 7. Technical review

1. [ ] **W4 · WF13:** Build queue search, five status tabs, Select all pending and Approve selected; connect overview cards, Published and queue links.
2. [ ] **W4 · WF13:** Render submission detail, tag links and attachment View; implement Approve → Request Legal Review, Return with reason and Request info using the inspected decision controls.
3. [ ] **W4 · E; WF13; Q1/Q10:** Authorize each individual/bulk decision and persist its revision, reason and outcome once. Resolve bulk routing and reviewer scope without inventing an assignment-management UI.

### 8. Legal review and publication

1. [ ] **W5 · WF14:** Implement legal queue/detail, Approve → Publish this entry and Request info. Retain overview/Published links; do not add an unobserved legal rejection or reinstatement screen.
2. [ ] **W5 · E; WF04–05, WF14:** Publish the approved content and exact terms; preserve internal acceptance/history references and refresh catalog results. Administrator override controls belong to areas 16–17 and Q1.

### 9. External-public routing

1. [ ] **W5 · WF12; E; Q4:** Implement immediate publication only for the stated recognized-domain/public-source/no-SHIP-transaction condition; otherwise route to review.
2. [ ] **W5 · E; WF12:** Record source verification and routing evidence; validate any fetched URLs safely. Configure the agreed source policy without inventing a trust-management page.

### 10. Home, About and partners

1. [ ] **W6 · WF01–02:** Connect Explore, Participate, License IP choices, featured type/tag/card actions, license comparison, partners and community links to the corresponding pages.
2. [ ] **W6 · WF02:** Complete section navigation, both six-step walkthroughs, FAQs, submission criteria and onboarding links; use approved partner/Impact content and retain identified media placeholders until supplied.

### 11. IP Portfolio and entry detail

1. [ ] **W6 · WF03:** Implement search, Newest first/A → Z, Grid/List, Subject Matter/Entity/License types filters, count and tag/card actions. Resolve type/author-search copy before adding any extra filter.
2. [ ] **W6 · WF04:** Populate the four detail tabs, organization links, filed date, views, gallery, related entries and access/contact controls from actual records.
3. [ ] **W6 · E; WF03–04:** Resolve new database entries without rebuilds and refresh results on publication/moderation; exclude inaccessible content from queries and direct access. Backend query limits do not imply new pagination controls.

### 12. License access and contact relay

1. [ ] **W6 · WF05:** Implement Download gate full name/email, displayed terms, acceptance and Continue to confirmation; reproduce the confirmed next state from Q8.
2. [ ] **W6 · WF06:** Implement Contact IP holder/Send message fields and Interest choices, secure relay and Close. Commercial requests remain conversations; no checkout or contract-execution feature.
3. [ ] **W6 · E; WF05–06:** Store the terms/entry revision accepted and authorize file access; restrict relay/thread access and record events for the displayed metrics.

### 13. Learning Hub, topics, glossary and Resources

1. [ ] **W6 · WF23:** Connect search, Report/IP Learning filters, cards and numbered/previous/next pagination using actual results.
2. [ ] **W6 · WF23:** Complete What is IP?, Licensing options, article and glossary destinations; term/section links, relevant topics, return navigation and LinkedIn/X/Email/Copy link actions.
3. [ ] **W6 · WF24:** Connect topic cards, category radios, search, row titles and their Download/View Page/Visit Site actions; supply approved files and content for the displayed rows.
4. [ ] **W6 · E; WF23–24; Q9:** Keep editorial content and asset metadata in a controlled repository/data source; verify every destination and reconcile sample counts. No authoring CMS is included.

### 14. Inbox, Notifications and reminders

1. [ ] **W4 · WF15:** Implement inquiry list/detail, sender/context, All messages, reply field and Send reply; connect message Notifications to Inbox.
2. [ ] **W4–8 · WF13–15, WF17–18, WF22:** Deliver visible workflow updates as review, moderation and guest features arrive; preserve the notification list/header count.
3. [ ] **W4–5 · WF13–14; Q8:** Implement the shown older-than-14-days queue reminders. Confirm the described configurability; no new preferences/settings screen is assumed.
4. [ ] **W4–8 · E/U; WF15, WF22:** Persist conversations and notification delivery, retry safely, and restrict real email to pilot recipients. Do not add inbox filters or preference controls absent from the screens.

### 15. Organization administration

1. [ ] **W7 · WF16:** Build organization Overview, Submissions, Org Portfolio and Audit Log destinations, using organization-scoped records.
2. [ ] **W7 · WF16:** Implement Team All/Active/Pending, Add member name/email/role/authority, member detail authority and program-affiliation checkboxes.
3. [ ] **W7 · WF16:** Implement Programs, New Program name/admin selection and member-only administrator assignment.
4. [ ] **W7 · WF16:** Implement Organization name, Primary contact and IP license default Edit actions using their confirmed edit states; preserve historical terms internally.

### 16. Program administration

1. [ ] **W7 · WF17:** Build program overview and submissions search/status tabs; implement Edit, Approve & publish, Unpublish and Take down with the Q1 approval rule and submitter notification.
2. [ ] **W7 · WF17; Q8:** Implement Team Management and Program name, Parent organization, Program lead and Scope Edit controls from their confirmed states; do not infer org-level powers.
3. [ ] **W7 · E; WF17:** Deny access to other programs for every read/mutation and audit authority-sensitive changes.

### 17. Platform administration

1. [ ] **W7 · WF18; Q8:** Implement User Management organization search/Add organization and the confirmed nested member role, authority, status and program controls.
2. [ ] **W7 · WF18:** Implement Content Moderation entity/title search, immediate Edit, Unpublish and Take down; notify the affected entity on takedown.
3. [ ] **W7 · WF18:** Render Audit Log event/actor/target/time and member links; implement Platform name, Support contact and Default IP license Edit actions.
4. [ ] **W7 · E; WF18:** Enforce platform authority, retain internal history for immediate edits and audit changes. No new moderation-case, appeal or audit-filter interface is included.

### 18. User Profile and Account Settings

1. [ ] **W6 · WF19:** Render profile name/role/organization/email, affiliation, country and joined date from account data.
2. [ ] **W6 · WF19; Q8:** Implement Edit for Email address, Display name and Institution, plus Change Password; use confirmed dialog fields and managed identity. No additional preference form.

### 19. Displayed metrics

1. [ ] **W7 · WF20:** Populate only the shown role overview counts, Downloads, Downloads (90d), Avg. turnaround, Licensing rate, Downloads / entry, Return rate, entity benchmark table and platform averages.
2. [ ] **W4–7 · E; WF04, WF20; Q5:** Capture required view/download/submission/review events as workflows ship; agree formulas behind existing labels. Do not add charts, date selectors or drilldowns.
3. [ ] **W9 · E/U; WF20:** Reconcile displayed metrics to real events, exclude test exercises and use honest empty/insufficient-data states.

### 20. Batch Upload

1. [ ] **W8 · WF21:** Implement Download CSV template, browse/drop CSV/XLSX/ZIP, 500 MB limit, Cancel and Upload batch.
2. [ ] **W8 · WF21; E; Q6:** Validate rows and flag errors; create drafts under My Submissions without automatic publication. Implement agreed ZIP association and safe repeat processing; no invented mapping or job-dashboard UI.

### 21. 1-Time Invites and guest submission

1. [ ] **W8 · WF22:** Implement recipient name/email/note, Send secure link, 30-day expiry and Sent/Opened/Submitted/Expired tracking for the shown admin roles.
2. [ ] **W8 · WF22:** Build Orient → IP Subject → Inventors & Authors with the guest-specific description, source fields, goals, preferred terms, supporting files, contributor/contact and Additional notes.
3. [ ] **W8 · WF22:** Capture typed legal name, agreement checkbox and public-indexing choice; implement Create Draft and Publish with the observed routing and signed publication agreement.
4. [ ] **W8 · E; WF22; Q7:** Resolve guest draft resumption/token completion; enforce expiry, ownership and duplicate protection. Do not add revoke/resend controls or a separate approval/e-signature screen.

### 22. Contact and shared navigation

1. [ ] **W6 · WF25:** Implement Contact reason choices, name/email/message and Send message; connect shared navigation to observed destinations.
2. [ ] **W6 · WF25; Q9:** Retain previously agreed unavailable policy/social destinations where no working page is specified; do not invent policy content.
3. [ ] **W9 · E; WF01–25:** Verify keyboard/mobile behavior, links, input errors and missing-content states across retained pages.

### 23. Pilot data and accounts

1. [ ] **W1 · U:** Agree the real IP/content delivery set, owners and 5–6 pilot users. Wireframe sample counts are not required seed quantities.
2. [ ] **W2 · U/E; WF07, WF16–19:** Provision individual scoped pilot accounts and approved organizational data for the observed roles.
3. [ ] **W3 · U/E; WF09–11:** Create validated, repeat-safe seed tooling with ownership/usage approvals; preserve user changes and genuine history.
4. [ ] **W6 · U; WF01–06, WF23–25:** Load approved records, documents and editorial content; separate real material from labeled exercises and synthetic tests.
5. [ ] **W9–10 · U/E:** Verify the dataset and freeze the accepted pilot baseline for handover.

### 24. Testing and operations

1. [ ] **W2–10 · E; all retained WF:** Add CI and feature-level component/service/database/browser tests, including permissions, persistence, failure/retry and duplicate-action cases.
2. [ ] **W2 · E/U:** Configure logs, health checks, monitoring, backups and recovery targets for the private pilot.
3. [ ] **W9 · E/U:** Run all retained wireframe journeys with testers; rehearse data/file restore, worker restart, interrupted uploads and rollback.
4. [ ] **W10 · E/U:** Resolve defects, obtain owner acceptance and deliver release/support runbooks with a named operator.

## Acceptance and production follow-up

The pilot is accepted when the retained wireframe actions work with approved data, permissions hold, and restore/rollback have been rehearsed. Resolve wireframe contradictions before accepting affected flows. No invented success states, legal history or metric values.

Technical choices remain proposals in the [backend architecture](backend-architecture.md); they do not authorize new product features or purchases. Use the [seed manifest](seed-data-manifest-template.csv) for provenance. Retain services, migrations, IDs and tests for production; public launch, additional integrations and production hardening require a separate decision.
