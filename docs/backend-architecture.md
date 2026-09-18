# SHIP backend architecture proposal

This document proposes engineering support for the [wireframe-based plan](10-week-preview-proposal.md). It does not define additional product features. See the [action inventory](wireframe-action-inventory.md) for exact controls and Q1–Q10 for unresolved behavior. Those questions take precedence over earlier architectural assumptions.

## Proposed runtime

Use the existing Next.js application with server-only domain services, managed PostgreSQL, private S3-compatible storage and a durable worker. A managed identity service must support the wireframe's email/password, Google sign-in, recovery and Change Password actions. Prisma is a proposed data-access layer, subject to dependency approval. Vercel hosts the current UI; remaining providers, region and budget are undecided.

| Boundary | Supporting work | Wireframe basis |
| --- | --- | --- |
| Identity and membership | Verified sessions, account changes, organization/program authority checks | WF07, WF16–19 |
| Submissions | Create Draft, record editing, save/discard, type-dependent fields, submitted content | WF09–12 |
| Reviews/publication | Authorized individual/bulk decisions, review questions, publication records | WF12–14, WF17–18 |
| Catalog/content | Search/filter/sort and Grid/List data, details, learning/resource content | WF01–06, WF23–25 |
| Assets | Direct uploads, validation/scanning, private object metadata and authorized file access | WF04–05, WF09–11 |
| Messaging | Inquiry relay, replies, updates, reviewer reminders and invitations | WF06, WF13–15, WF22 |
| Administration | Observed organization/program/member/settings and moderation actions | WF16–18 |
| Jobs | Durable processing for scans, email and batch imports | WF11, WF13–15, WF21–22 |

Keep business transactions and authorization in services. Server-rendered pages may call services directly; client actions use validated HTTP/server boundaries. A separate backend framework, CMS, search service or extra administration interface is not part of this proposal.

## Data contracts

- **Identity:** Users, sessions, organizations, programs, memberships and authority grants. Represent overlapping roles and explicit scopes; the prototype role selector is not authentication.
- **Submission:** Stable identifier, owner/scope, editable fields, source URLs, contributors/contact, goals, preferred terms, visibility and workflow state. Validate precisely the observed fields; database metadata does not create additional form fields.
- **Internal history:** Preserve submitted content, decisions and terms used by access records. Use optimistic concurrency to avoid lost changes. These are internal safeguards, not a revision-history screen or a mandatory re-review flow.
- **Review/publication:** Record actor, scope, content version, decision/reason, approved terms and publication state. Apply Q1/Q2 before defining transitions.
- **Assets:** Storage key, original name, actual type, size, checksum, validation/scan status and permitted access. Associate attachments and gallery items with their content record.
- **Terms/access:** Keep immutable terms references for recorded acceptance, full name/email, entry version and access event. A commercial message is not a contract or transfer of ownership.
- **Messaging:** Entry context, sender details, authorized participants, messages, notification state and delivery attempts.
- **Invitations/imports:** Scoped expiring secure links, guest agreement version/signature/time, tracking, batch jobs/row errors and resulting drafts. Resolve guest resumption and ZIP association through Q6/Q7.
- **Audit/events:** Actor, target, scope, action and timestamp; retain changes needed for audit and the exact displayed metrics. Do not fabricate historical approvals or downloads.

Use constraints, stable identifiers and indexed scoped queries. Backend pagination/query limits are implementation details unless a visible pagination control exists. Reject unknown input fields, validate scope on reads and writes, and use transactions/replay keys for actions that must happen once.

## Approval and editing rules

The wireframes contain distinct paths that must not be collapsed:

1. Technical detail: **Approve → Request Legal Review** (WF13).
2. Legal detail: **Approve → Publish this entry** (WF14).
3. Eligible external-public entry: immediate publication (WF12).
4. Program Admin submissions: **Approve & publish** (WF17). Q1 must settle how this authority relates to the review path.
5. Super Admin moderation: edits apply immediately; Unpublish/Take down available, with affected-entity notification (WF18).
6. Submitter editor: published and pending records have **Save changes** (WF09). Q2 must settle the effect; do not impose an unobserved new-draft/re-review flow.

Retain internal history for immediate administrative changes and previously accepted terms. Do not let clients forge states or authority. Do not add legal rejection, appeals, reinstatement, archive commands or review-assignment screens without wireframe evidence or an explicit requirement change.

The external-public policy needs recognized-domain and eligibility verification. Record evidence and protect remote URL fetching from unsafe/private destinations. The policy may be configured internally; no trust-management UI is specified.

The visibility checkbox describes public indexing, not the complete authorization policy. Resolve Q3 separately from the user-required outer pilot access gate. Reviewer self-review and assignment scope also require Q10 resolution rather than an assumed product rule.

## Files and background processing

Preserve the displayed formats and 500 MB limit. Direct/multipart uploads avoid web request-body limits. Validate size/type/checksum, quarantine and scan files, bound ZIP expansion, clean abandoned uploads and deny access until permitted. These measures support existing upload actions without introducing a management console.

Issue short-lived authorized file URLs or stream through an authorized endpoint, depending on the agreed revocation requirement. Already issued signed links may remain usable until expiry; document that interval. Recheck access before issuing new links after moderation changes.

Use a transactional outbox and durable jobs with leases, bounded retries, deduplication and operator-visible failures. Batch imports validate and create drafts only. Implement processing status/error feedback needed by the observed action; do not invent mapping or job-dashboard pages. Secure guest links expire after 30 days; define safe draft-resume and completion semantics before implementation.

## Identity and operations

Use secure sessions, origin/CSRF protections, server-side validation and scoped authorization for all actions. Resolve exact email/password/Google/recovery configuration with the managed provider. No shared accounts or client-selected authority. Privilege changes and account access must be auditable; safeguards such as preventing accidental loss of all administrators are engineering policy, not new screens.

Keep synthetic local/PR data separate from the real pilot database/files. The stable pilot is restricted to approved testers, with email limited to approved recipients. Store secrets outside Git. Owner-approved seed imports must preserve provenance, genuine activity and user edits.

Configure logs, monitoring, backups, migrations, restore/recovery and rollback. Add unit/component, database, authorization and browser tests as features ship. Set operating targets with the selected providers; do not present invented SLAs as wireframe requirements.

## Metrics and content

Implement only the labels listed in WF20 and entry views in WF04. Q5 supplies formulas and event definitions; no extra chart, comparison interface, date selector or drilldown is implied. Display real or empty values, excluding exercises.

Editorial content can be repository-managed. Supply owner-approved documents/articles/terms behind observed links. Placeholder prose, sample counts and nonfunctional policy/social buttons need Q9 decisions; no new CMS or policy pages are inferred.
