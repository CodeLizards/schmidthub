# SHIP: 10-week functional preview proposal

**Status:** Planning; frontend development paused.
**Capacity:** One full-time developer with Codex.
**Audience:** 5–6 invited pilot users.
**Product authority:** [v5 wireframes](https://ship-wireframes-v5.netlify.app/). Build in `schmidthub`.

## Objective

Deliver a restricted pilot using real, owner-approved IP data. Complete submission, review, publication, discovery, messaging and administration workflows on the existing Next.js app. Each accepted action must persist, enforce permissions and handle failures. Reuse the UI and preserve the wireframe design.

## Ten-week delivery schedule

Allow **400 developer hours: 320 planned and 80 contingency**. Weeks start from an agreed date. Codex supports the developer within this capacity. Checklist references below use area numbers; task labels provide the exact week.

| Week | Hours | Deliverables and checklist areas | Acceptance gate |
| --- | ---: | --- | --- |
| 1 — Scope and decisions | 30 | Wireframe inventory, role/state rules and acceptance scenarios; provider/region/budget and schema draft; external-source, metric, batch, guest and policy decisions; five approved seed records and manifest. **Areas 1, 2, 9, 19–23.** | Required decisions recorded, content owners assigned and seed pack approved. |
| 2 — Identity and foundation | 32 | Schema/migrations, services, worker/outbox, restricted environments, sign-in/invites and 5–6 scoped pilot accounts; CI, health/logging, backups and initial tests. **Areas 2, 3, 23, 24.** | Scope isolation, revocation, migrations and initial restore pass; remaining work fits the capacity forecast. |
| 3 — Drafts, files and seed tooling | 36 | Five-type wizard, save/resume/archive, immutable submission snapshots, source evidence, 500 MB uploads and scanning; seed validation/dry-run/import with initial approved data. **Areas 4–6, 9, 23, 24.** | Draft reload/conflict tests pass; valid upload succeeds; oversized, mismatched and unscanned files are blocked; seed reruns preserve edits. |
| 4 — Technical review and inbox | 36 | Submitter dashboard, queue/assignment, return/resubmit and information requests; inbox, notification events, review/return analytics and recipient isolation. **Areas 4, 7, 14, 19, 24.** | Distinct users complete submit → request information → return → resubmit → legal handoff; scope, conflict and duplicate checks pass. |
| 5 — Legal review and publication | 34 | Legal queue, approved terms, publish/unpublish, published-edit drafts and verified external-public routing; legal notifications and publication events. **Areas 4, 8, 9, 14, 19, 24.** | Legal approval publishes the exact revision; failed source verification routes to review; withdrawal prevents new access. |
| 6 — Catalog, content and access | 34 | Home/About/partners, portfolio/search/details, galleries, terms acceptance/downloads and inquiries; Learning Hub/Resources, contact/policies, interest requests, participation, profile/settings; email/reminders/preferences and remaining seed/content imports. **Areas 3, 6, 10–14, 18, 19, 22–24.** | New entries resolve without rebuild; approved files download after required acceptance; accepted links/forms work; access and event records are correct. |
| 7 — Administration and reporting | 36 | Organization, program and platform management, memberships/settings, moderation/audit, dashboards/benchmarks and admin notifications. **Areas 14–17, 19, 24.** | Last-admin and privilege-escalation tests pass; organization/program isolation holds; reports reconcile to records. |
| 8 — Batch and guest submission | 36 | CSV/XLSX/ZIP validation and draft imports; resumable jobs; 30-day guest invitations, agreement/publication approval, scoped submission and ownership handoff; guest notifications. **Areas 14, 20, 21, 24.** | Import retries create drafts once; expired/revoked/reused invites fail; guest submission completes once in the correct scope. |
| 9 — Pilot acceptance | 28 | All users rehearse their journeys; verify seed data and metrics; browser/accessibility/mobile/content/performance checks; restore, worker/upload recovery and rollback drills. **Areas 19, 22–24; all feature acceptance scenarios.** | Critical journeys and denied-access tests pass; recovery targets met; defects triaged. |
| 10 — Release and handover | 18 | Fix acceptance defects, freeze seed baseline, complete runbooks and production backlog, release the approved pilot. **Areas 23–24; defects across all areas.** | Owner signs off; required actions pass; deployment/rollback verified; support operator named. |
| **Total** | **320** | **80 hours contingency** | |

Show a working increment weekly and collect user feedback from week 3. At the end of week 2, re-estimate the remaining tasks, including testing and release. Ten weeks is an aggressive target; extend delivery or obtain approval for scope changes if the forecast exceeds capacity. No checklist feature is implicitly deferred.

## Step-by-step feature implementation checklist

Task labels identify the delivery week. Multi-week areas reuse services delivered earlier. Week 1 confirms all wireframe fields, modals and conditional actions. **Decision** marks unresolved behavior. Scope IDs refer to the [acceptance matrix](preview-scope-matrix.md).

Tests accompany every feature; week 9 covers the complete pilot. Unchecked tasks include both new work and connecting existing UI to persistent services.

### 1. Scope and product decisions — week 1; all scope IDs

1. [ ] **W1:** Inventory every page, role, field, action, modal and conditional state against the v5 wireframes; record its reference and acceptance scenario.
2. [ ] **W1:** Define the six role experiences and their organization, program, ownership and review-assignment permissions, including overlapping roles.
3. [ ] **W1:** **Decision:** Agree self-review restrictions, private visibility/access, legal return and reinstatement rules, and external-public eligibility.
4. [ ] **W1:** **Decision:** Approve license/assignment/custom terms, guest agreement and publication approval, batch ZIP matching, metrics and editable settings.
5. [ ] **W1:** Assign an owner to each content/data dependency and unresolved decision; map every accepted action to its implementation week and test.

### 2. Backend foundation and environments — weeks 1, 2; O02

1. [ ] **W1:** Select the pilot identity, database, private file storage, email and worker providers, region and budget; confirm production dependencies before installation.
2. [ ] **W2:** Create the database schema, constraints and migrations for users, organizations, programs, memberships, drafts, revisions, reviews, publications, terms, assets, messages, jobs and audit records.
3. [ ] **W2:** Build shared service/API validation and authorization foundations; extend domain services with each feature. Standardize pagination, field errors, conflicts and replay protection.
4. [ ] **W2:** Create the job/outbox worker with leases, retries, deduplication and failure visibility; add scan, message and import handlers with their features.
5. [ ] **W2:** Separate synthetic development/PR-preview data from the real pilot database and storage; configure secrets and private connection credentials per environment.
6. [ ] **W2:** Restrict pilot pages, APIs and file access to approved testers; retain an application-signed-out catalog experience inside that outer access boundary.
7. [ ] **W2:** Add CI for lint, typecheck, unit/component tests, build, database integration and critical browser journeys; verify migrations, account revocation and cross-scope denial.

### 3. Sign-in, access requests and participation — weeks 2, 6; P04

1. [ ] **W2:** Connect sign-in, sign-out, session expiry and supported account recovery to the selected managed identity provider.
2. [ ] **W2:** Add scoped approval and invitation handling; activate individual accounts only after the approved onboarding path.
3. [ ] **W2:** Enforce active membership on every protected operation and remove access when an account, invitation or grant is revoked.
4. [ ] **W6:** Persist interest/access requests with validation, duplicate handling and an honest confirmation/error state.
5. [ ] **W6:** Connect Participate, Add your Technology, sign-in and sign-up destinations to the correct signed-in or signed-out journey.

### 4. Submitter dashboard and My Submissions — weeks 3, 4, 5; S01

1. [ ] **W3:** Support starting, saving, reopening and archiving drafts under the agreed state/permission rules.
2. [ ] **W4:** Build the submitter overview, state counts, activity and My Submissions table using owner-scoped records.
3. [ ] **W4:** Add the wireframe filters, sorting, pagination, empty states and links to draft, review and published details.
4. [ ] **W4:** Show revision history, review status, requested changes and outstanding information requests for each submission.
5. [ ] **W4–5:** Connect revise/resubmit in week 4 and published-edit actions in week 5, with save, conflict and retry feedback.

### 5. Single-submission wizard — week 3; S02

1. [ ] **W3:** Build both wizard steps for Patents, Technology & Equipment, Scientific Datasets, Academic Research and Creative Works.
2. [ ] **W3:** Implement title, dates, subject, abstract, description, tags and the exact type-specific external-source fields from the field inventory.
3. [ ] **W3:** Add licensing goals, notes and all seven preferred-term choices: Open Research License, Apache 2.0, MIT, CC BY 4.0, Commercial License, Full IP Assignment and Custom License Agreement.
4. [ ] **W3:** Add ordered inventor/author details, affiliations, contact information and visibility controls; apply the agreed contact-consent and private-access policy.
5. [ ] **W3:** Persist partial drafts with save/resume and optimistic concurrency so two editing sessions cannot silently overwrite each other.
6. [ ] **W3:** Validate required fields and asset readiness before submission; atomically create an immutable submitted snapshot, routing decision, audit event and notification event.
7. [ ] **W3:** Preserve the preferred terms in the submitted snapshot; area 8 binds final approved terms in week 5.

### 6. Uploads, attachments and galleries — weeks 3, 6; S03

1. [ ] **W3:** Create authorized direct/multipart upload sessions for the wireframe file formats and 500 MB limit.
2. [ ] **W3:** Add progress, retry, abort and resumed upload behavior; associate each file with the correct draft and document/gallery position.
3. [ ] **W3:** Verify actual size, type and checksum; quarantine and scan uploads, including bounded ZIP inspection, before making them available.
4. [ ] **W3:** Display file processing, failure and ready states; expire abandoned sessions and clean up orphaned objects.
5. [ ] **W6:** Render authorized attachments and galleries with real filenames, sizes, formats and approved media.
6. [ ] **W6:** Issue short-lived file access only after current permission and publication checks; test oversized, mismatched, unscanned and inaccessible files.

### 7. Technical review — week 4; R01

1. [ ] **W4:** Build the technical reviewer overview, scoped queue, filters, assignment and submission detail screens.
2. [ ] **W4:** Present the exact submitted revision, contributors, source information and permitted files for review.
3. [ ] **W4:** Implement information requests and responses without implicitly approving the entry.
4. [ ] **W4:** Implement return-with-reason, submitter revision and resubmission while retaining the prior review history.
5. [ ] **W4:** Implement technical approval as a request for legal review; prevent direct publication through a technical decision.
6. [ ] **W4:** Reject stale, duplicate, unauthorized and disallowed self-review decisions; persist decisions, audit and notifications together.

### 8. Legal review, publication and later edits — week 5; R02

1. [ ] **W5:** Build the legal overview, scoped queue and revision detail with technical decision history.
2. [ ] **W5:** Add legal information requests and the agreed return/resubmission behavior. **Decision:** Confirm any separate rejection or reinstatement states before implementing them.
3. [ ] **W5:** Record the approved immutable terms/version for SHIP-managed access, with distinct handling for commercial terms, assignment and custom agreements.
4. [ ] **W5:** Publish only the authorized, approved revision and allowed files; record actor, decision, publication time and terms.
5. [ ] **W5:** Start a new private draft when published content is edited; keep the current approved publication unchanged until the replacement is approved.
6. [ ] **W5:** Implement authorized unpublish/takedown and agreed reinstatement, including reasons, notifications, cache invalidation and withdrawal of new file grants.

### 9. Verified external-public submission path — weeks 1, 3, 5; R03

1. [ ] **W1:** **Decision:** Define recognized sources, the organization-to-source authority check and the no-SHIP-licensing-transaction eligibility rule.
2. [ ] **W3:** Capture source URLs, rights-to-submit evidence and the external terms/source snapshot.
3. [ ] **W5:** Validate source eligibility on the server; protect any URL fetching against private-network targets and unsafe redirects.
4. [ ] **W5:** Route verified eligible entries through the permitted external-public path and route uncertain or failed checks to ordinary review.
5. [ ] **W5:** Record verification evidence, policy version and routing reason; provide scoped revocation of trusted relationships.

### 10. Home, About and partner pages — week 6; P01

1. [ ] **W6:** Replace fixture organizations, featured entries and presentation copy with owner-approved content and catalog queries.
2. [ ] **W6:** Connect featured-card filters and detail links to eligible published IP; reconcile featured records with portfolio results.
3. [ ] **W6:** Complete partner information and destinations, participation calls to action and licensing links using the existing wireframe layouts.
4. [ ] **W6:** Verify responsive and keyboard behavior, empty states and exclusion of private, withdrawn and unapproved records.

### 11. Searchable IP portfolio and detail pages — week 6; P02

1. [ ] **W6:** Build database-backed search, facets, license/type/subject/organization/program/tag filters, sorting and pagination.
2. [ ] **W6:** Keep query state in URLs and implement clear filters, loading, no-results and error recovery.
3. [ ] **W6:** Replace fixture-only detail route allowlists with live entry lookup so a newly published entry opens without rebuilding the app.
4. [ ] **W6:** Populate description, inventors, licensing, attachments, gallery and related-entry components from the approved publication.
5. [ ] **W6:** Connect download/access and contact-holder controls to their real workflows; keep private contacts and review notes out of catalog responses.
6. [ ] **W6:** Invalidate cached results on publish, replacement, unpublish and takedown; enforce visibility on direct URLs as well as search results.

### 12. Licensing, downloads and IP-holder contact — week 6; L01

1. [ ] **W6:** Connect license comparison/guidance and entry-specific licensing displays to approved terms and real availability.
2. [ ] **W6:** Show the exact approved terms before eligible acceptance; persist actor, timestamp, entry revision and immutable terms version.
3. [ ] **W6:** Issue an authorized download grant for the permitted asset only after required acceptance; handle expiry, denial and retry.
4. [ ] **W6:** Route commercial inquiries, assignment requests and custom-term requests to authorized participants; do not report an executed agreement from a checkbox or inquiry.
5. [ ] **W6:** Create the contact-holder conversation without exposing private contact details; record access/inquiry events using the agreed metric definitions.

### 13. IP Learning Hub and Resources — week 6; P03

1. [ ] **W6:** Obtain approved content for the Learning Hub, articles, What is IP?, Licensing Options and IP Glossary, preserving the wireframe structure.
2. [ ] **W6:** Connect topic cards, article details, glossary navigation and content search/filter behavior to the approved content collection.
3. [ ] **W6:** Complete the Resources catalog categories, search and filtering for templates, documents, provisions and references.
4. [ ] **W6:** Supply every accepted resource with a real authorized file, intended detail content or working official external destination; replace unavailable actions only when the content exists.
5. [ ] **W6:** Store content/resource version and asset metadata; support controlled repository-managed editorial updates where no authoring UI is required.
6. [ ] **W6:** Verify every accepted card/link, file size/format label, download permission, empty state and missing-content response.

### 14. Inbox, notifications and email — weeks 4–8; C01

1. [ ] **W4:** Create submission-linked threads, authorized participants and durable messages for review questions and IP inquiries.
2. [ ] **W4:** Build inbox/thread screens, reply actions, read/unread state and the wireframe filtering/navigation.
3. [ ] **W4–8:** Build submission, information-request and technical-decision notifications; connect legal, admin and guest events as those features arrive in weeks 5, 7 and 8.
4. [ ] **W4:** Limit real email to approved pilot recipients; use an email sink in automated previews/tests and deny unrelated users access to threads.
5. [ ] **W6:** Add notification preferences, queued email and reminders with retry/deduplication and delivery-failure visibility.

### 15. Organization administration — week 7; A01

1. [ ] **W7:** Build the organization overview, portfolio and submission views with real scoped records and counts.
2. [ ] **W7:** Implement membership approval, invitations, member removal and permitted role changes with last-admin protection.
3. [ ] **W7:** Create and manage programs and their membership boundaries within the organization.
4. [ ] **W7:** Implement the agreed organization settings; apply default license preferences only to new drafts, preserving historic approved terms.
5. [ ] **W7:** Connect organization moderation, invitation tracking and reporting; audit mutations and deny out-of-organization access.

### 16. Program administration — week 7; A02

1. [ ] **W7:** Build the program overview, portfolio/submission lists and team-management screens.
2. [ ] **W7:** Add program-scoped invitations, membership changes and agreed settings without granting organization-wide authority.
3. [ ] **W7:** Connect permitted unpublish/takedown actions with reasons, submitter notifications and audit history.
4. [ ] **W7:** Verify sibling-program isolation and that every count, report and mutation respects the assigned program scope.

### 17. Platform administration — week 7; A03

1. [ ] **W7:** Build organization/program and user management for explicitly authorized Super Admin accounts.
2. [ ] **W7:** Implement account disable/revoke and permitted grant changes without accepting client-supplied privilege claims.
3. [ ] **W7:** Build moderation cases/actions with reasons and the agreed reinstatement process.
4. [ ] **W7:** Add paginated audit queries and the wireframe filters for actor, scope, target and time.
5. [ ] **W7:** Implement approved platform settings with change history; verify sensitive actions are attributable to a verified administrator.

### 18. Profile and account settings — week 6; A04

1. [ ] **W6:** Persist the wireframe profile fields and approved contact preferences for the signed-in user.
2. [ ] **W6:** Connect account/security controls to the identity provider's supported recovery and session features.
3. [ ] **W6:** Save notification preferences and provide clear success, validation and failure states.
4. [ ] **W6:** Verify reload persistence, sign-out and disabled-account/session revocation; ensure every exposed control has a real effect.

### 19. Dashboards and benchmarks — weeks 1, 4–7, 9; A05

1. [ ] **W1:** **Decision:** Define each count/rate, denominator, date window, timezone and role scope shown in the wireframes.
2. [ ] **W4–6:** Add review/return events in week 4; add publication events in week 5 and inquiry, acceptance and file-access events in week 6.
3. [ ] **W7:** Implement scoped counts and charts with filters and date ranges from the wireframe inventory.
4. [ ] **W7:** Exclude synthetic/exercise activity; show zero or insufficient-data states honestly and distinguish inquiries from executed licenses and grants from completed transfers.
5. [ ] **W9:** Reconcile displayed totals and rates against underlying records and test cross-scope reporting denial.

### 20. Batch upload — weeks 1, 8; B01

1. [ ] **W1:** Define and provide the versioned CSV/XLSX template, required columns, row limits and deterministic ZIP-to-row attachment mapping.
2. [ ] **W8:** Accept the wireframe CSV, XLSX and ZIP inputs within the 500 MB specification using the same upload/security policies as individual submissions.
3. [ ] **W8:** Build mapping/preview, per-row validation errors and an explicit valid-row import action.
4. [ ] **W8:** Process imports as resumable background jobs with progress, partial-failure details and replay-safe retries.
5. [ ] **W8:** Create drafts under the correct owner/org/program and show them in My Submissions; importing must not submit, approve or publish them.
6. [ ] **W8:** Verify malformed rows, duplicate files/rows, interrupted processing and repeat imports without overwriting user edits or duplicating drafts.

### 21. One-time invitations and guest submission — weeks 1, 8; G01

1. [ ] **W1:** **Decision:** Confirm whether submitter publication approval occurs in the initial agreement or requires a later approval; implement and retain the evidence.
2. [ ] **W8:** Build scoped invite creation, 30-day expiry, tracking and revocation under the inviting organization.
3. [ ] **W8:** Create a narrow guest session and orientation/agreement flow; store the agreed text version, recipient identity and timestamp.
4. [ ] **W8:** Provide the permitted guest draft, wizard and uploads with explicit ownership and organization/program attribution.
5. [ ] **W8:** Consume the invitation atomically on successful submission and record completion/handoff once; merely opening the link must not consume it.
6. [ ] **W8:** Test expired, revoked, reused and wrong-scope tokens, email-scanner visits and submission retries through the normal review/asset policies.

### 22. Contact, policies and shared navigation — weeks 1, 6, 9; O01

1. [ ] **W1:** Obtain owner-approved contact and policy/legal content and resolve which wireframe destinations are accepted pilot scope.
2. [ ] **W6:** Implement the accepted contact workflow with validation, scoped handling and delivery feedback.
3. [ ] **W6:** Replace generic preview destinations on accepted journeys with their completed pages; retain explicit unavailable labels for anything owners keep outside scope.
4. [ ] **W9:** Verify header/footer links, external destinations, keyboard access, mobile layouts and consistent loading/error/not-found states.

### 23. Real seed data and pilot accounts — weeks 1–3, 6, 9–10; all data-dependent areas

1. [ ] **W1:** Collect the initial five owner-approved records and seed manifest, then confirm the full record/file delivery target.
2. [ ] **W1:** Record source/ownership, org/program, visibility, real-versus-synthetic classification, contact approval, terms, file rights and checksums.
3. [ ] **W2:** Provision the 5–6 individual pilot accounts with agreed scoped grants and real authority for review/publication decisions.
4. [ ] **W3:** Build seed validation, dry-run, deduplication and import reporting; preserve user edits and record authorized imports without fabricating review history.
5. [ ] **W3, W6:** Import the initial approved records/assets in week 3 and complete the catalog/editorial import in week 6 into the restricted pilot, keeping practice exercises and automated fixtures distinct.
6. [ ] **W9–10:** Validate seed data against catalog, review, licensing and reporting in week 9; freeze the accepted baseline in week 10.

### 24. Testing, operations and handover — weeks 2–10; O02 and all acceptance scenarios

1. [ ] **W2–10:** Extend unit/component coverage with service, database, authorization, migration and browser tests for each delivered feature.
2. [ ] **W2:** Configure health checks, structured logs and alerts for application errors, queue delays, scan failures, email failures and asset-access errors.
3. [ ] **W2, W9:** Configure backups, retention and recovery targets in week 2; rehearse database/file restore, worker restart, upload recovery and rollback in week 9.
4. [ ] **W9:** Exercise every accepted journey with the pilot users, including invalid input, denied access, stale edits, duplicate commands and interrupted work.
5. [ ] **W9:** Complete responsive/accessibility checks, content/link audits, query/performance checks and a final scope-to-test reconciliation.
6. [ ] **W10:** Resolve acceptance defects, record owner sign-off, identify the support operator and deliver runbooks, known limitations and the production-hardening backlog.

## Pilot boundaries

All checklist areas are proposed pilot scope. Share components across roles; use repository-managed editorial content where no authoring UI is specified. Payment processing, automated contract negotiation, third-party e-signature, enterprise SSO provisioning, multi-region failover and a general-purpose CMS require separate scope approval.

Restrict the entire real-data pilot, including APIs and files, to invited testers. Test catalog access without an application login inside that boundary. Internet publication requires a later launch decision. Synthetic PR previews use separate data and an email sink; only the stable pilot may email approved participants.

## Architecture

Use the existing Next.js app with server-only domain services, managed PostgreSQL, private S3-compatible storage, managed OIDC identity and a durable worker. Prisma is proposed, subject to dependency approval. Select remaining providers, region and budget in week 1; Vercel currently hosts the UI preview.

Keep authorization and transactions in services. Store mutable drafts, immutable submitted revisions and versioned approved terms. Commit workflow changes, audit and outbox events atomically. Upload files directly to private storage and authorize each download. Agree signed-URL expiry because issued links may remain usable briefly after withdrawal.

See the [backend architecture](backend-architecture.md) for data models, API contracts, worker behavior and security rules. The [scope matrix](preview-scope-matrix.md) defines acceptance scenarios.

## Real seed data and pilot users

Project owners are assembling and approving the real IP list. No current confidentiality concerns were reported; access remains limited to testers.

- **Data target, subject to week-1 confirmation:** 20–30 records across five IP types, 10–15 approved files and representative images. Use two organizations/programs where real data supports it; use synthetic organizations for additional isolation tests.
- **Delivery:** Five approved records by week 1; full data/file pack by week 3; complete catalog and editorial import by week 6. Owners also supply approved articles, resource files and policy/contact content.
- **Provenance:** Use the [seed manifest](seed-data-manifest-template.csv) for stable IDs, sources, ownership, approval evidence, org/program, visibility, contact consent, terms and file rights/checksums. Imports must preserve user edits and genuine history.
- **Users:** One submitter, technical reviewer, legal reviewer, organization admin, program admin and platform admin. With five people, combine organization/program administration through scoped grants. Use individual accounts and agreed self-review restrictions.
- **Data separation:** Keep genuine records, labeled practice exercises and synthetic test fixtures distinct. Exclude exercises/fixtures from pilot analytics and never fabricate approvals or licensing history.

## Operating model and acceptance

The developer owns implementation and technical operations. Product/data owners supply decisions within 1–2 working days and reserve 2–4 hours weekly for review. An IP/legal owner participates in weeks 1, 5 and 9. Pilot users provide feedback from week 3 and complete the week-9 rehearsal.

Proposed operating targets, to confirm with the selected providers:

- Recover to within 24 hours of data and restore service within four business hours; test both database records and files.
- Support six concurrent sessions, concurrent edits/reviews and overlapping uploads.
- Keep ordinary catalog/command requests below two seconds at the 95th percentile under the recorded pilot test load; measure uploads separately.
- Record a monthly infrastructure estimate and owner-approved spending cap before provisioning paid services.

Release requires all accepted checklist and scope-matrix scenarios to pass, approved seed content, no unresolved access/data-loss/incorrect-rights/review-bypass defects, and verified restore/rollback. Deliver monitoring, runbooks, known limitations and a named support operator. Accepted journeys must not rely on placeholder success, shared accounts or fabricated metrics.

## Production follow-up

Retain the repository, services, migrations, stable IDs, provenance and tests. Before public launch, review security, load/abuse handling, retention/deletion, accessibility, onboarding/SSO, legal content and support needs.

Provision separate production credentials and storage. Rehearse migration of approved pilot records while preserving IDs, files and legal history; exclude exercises/test accounts, reconcile access and counts, and obtain owner approval. Production launch is a separate decision.

## Week-one decisions

- Data/content owner, delivery dates and usage rights.
- Remaining providers, region, budget and sign-in methods.
- Pilot users, scoped grants and legal/publication authority.
- Private access, self-review, legal return/reinstatement and external-source eligibility.
- Approved terms, guest agreement and submitter publication approval.
- Batch ZIP matching/row limit, metrics, editable settings and signed-link expiry.
