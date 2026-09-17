# SHIP implementation plan

2026-09-16 · Proposed delivery sequence, not a fixed-date commitment.

Product authority: [v5 wireframes](https://ship-wireframes-v5.netlify.app/).
Technical proposal: [backend architecture](backend-architecture.md).
All work belongs in `schmidthub`. IPLicensing is excluded. The old twelve-week
schedule is historical; its estimates and scope cuts should not drive this build.

## Scope map

| Wireframe surface | Backend capabilities | Delivery phase |
| --- | --- | --- |
| Home and founding partners | Featured public projection, organizations, curated content | POC now; live data in 4 |
| Portfolio, filters and entry detail | Public approved revisions, search/facets/pagination, assets, licenses | 4 |
| About, Learning Hub, Glossary, Resources | Versioned content and resource downloads | 4; authoring in 6 if required |
| Sign-in/up, profile, account settings | Identity integration, session, profile, preferences | 1 |
| Submitter dashboard and two-step wizard | Private drafts, authors, source fields, licensing, versioning | 2 |
| Attachments/gallery | Direct uploads, scanning, signed access, 500 MB limit | 2 |
| Technical reviewer overview/queue | Scoped assignments, technical decisions, return/info requests | 3 |
| Legal overview/queue | Technical-approved intake, legal decisions and publication | 3 |
| Inbox and notifications | Threads, participants, delivery/read state, reminders | 3–4 |
| Org Admin and team management | Org/program memberships, invitations, scoped reports/settings | 5 |
| Program Admin and team management | Program isolation, team changes, unpublish/takedown | 5 |
| Super Admin | Organizations/programs, users, audit, moderation, platform settings | 5 |
| Batch upload | Mapping, row validation, background jobs, recoverable imports | 6 |
| One-time invites/submission | Scoped expiring token, guest draft, atomic redemption | 6 |
| License/download/contact journey | Versioned acceptance, grants, owner messaging, events | 4 |
| Benchmarks | Defined measures derived from activity, scoped aggregates | 5 |

Later phases are still part of the full product. Phase order is a sequencing
proposal, not permission to remove a wireframe feature.

## Phase 0 — Home POC

Preserve the white/navy wireframe, serif headings, three introduction paths,
filterable six-entry grid, licensing, partner carousel and community CTA. Keep
wireframe imagery placeholders until approved assets exist. Label unimplemented
destinations clearly. No sign-in or submission should pretend to persist data.

Acceptance: desktop/mobile review, keyboard-operable navigation and filters,
empty-state recovery, meaningful link destinations, lint and build verification.
Deliver the POC and this plan before installing backend dependencies.

## Phase 1 — Decisions, data and identity

Walk each wireframe screen and conditional submission type; record a field/action
inventory and exact state/role matrix. Settle identity, hosting region, review
scope, private visibility and external-source eligibility. Select packages and
get the required confirmation before adding production dependencies.

Create PostgreSQL migrations and test fixtures for identity, organizations,
programs, membership, working drafts, submissions/revisions, licenses and audit. Integrate real
identity/session handling and deny-by-default policies. Add API schema validation,
structured errors, CI, health endpoints, database integration tests and browser
smoke tests. Configure preview/staging isolation before linking accounts.

Gate: two users in different organizations cannot read or mutate each other's
private data; a Program Admin cannot access a sibling program. Revocation takes
effect on the next request. Migration and restore work on a disposable database.

## Phase 2 — Draft and asset vertical slice

Build wizard steps exactly from the wireframe field inventory. Support partial
drafts in a mutable working copy, explicit save status, resumed editing, version-
checked concurrent edits, immutable snapshots on submission, authors,
affiliation/contact, licensing goals and private/public visibility. Add direct
multipart uploads with progress/retry/abort, MIME/size/checksum verification,
quarantine/scan states and attachment versus gallery placement.

Gate: a draft survives reload; invalid fields cannot be submitted; two browser
tabs cannot silently overwrite each other. A 500 MB allowed test asset uploads
without passing through the web server body; oversized and mismatched files fail
cleanly. Unscanned/private objects cannot be downloaded by a visitor.

## Phase 3 — Submit → technical review → legal review

Implement server-controlled routing, technical and legal queues, revision-bound
decisions, return-with-reason, information-request threads and notification events.
Ordinary technical approval routes to legal; legal approval publishes an immutable
snapshot. Implement the separately verified external-public path with audit reasons.
Require the agreed rights-to-submit and trusted-source evidence for that path;
public URL verification alone must not bypass review. Bind each SHIP-managed
grant to the approved revision and exact license version; retain an external
source/terms snapshot for entries accessed off-platform.
Published edits start a new private draft. Add worker leases, retries and an
operator view for failed jobs.

Gate: complete the loop with separate authorized users; reject forged status,
stale decisions, self-review under the agreed policy, and duplicate commands.
Test the external-public path, including failed eligibility. Restart the worker
mid-job and verify no duplicate messages or publication.

## Phase 4 — Public portfolio, licensing and communication

Replace POC fixtures through the catalog service. Build indexed filters, search,
pagination, detail/gallery/related entries, license descriptions and download
acceptance. Connect contact-holder threads and notification preferences. Reconcile
the existing content pages with their wireframes. Keep contacts and reviewer notes
out of public responses and search. Define and emit reporting events now.

Gate: a newly published approved revision appears publicly; private or withdrawn
content does not. Acceptance records the exact terms/revision before a grant is
issued. Expired grants fail. An unrelated account cannot read a message thread.
Cached public results stop exposing an entry after takedown.

## Phase 5 — Organization, program and platform administration

Deliver both admin scopes, member invite/approval/removal/role changes, settings,
unpublish/takedown and moderation. Add platform organization/user management and
paginated audit viewing. Build benchmark reports from agreed event definitions,
with date windows and explicit empty-data behavior.

Gate: every administrative mutation has an audit event and appropriate reason;
last-admin protection and privilege escalation tests pass. Program reports remain
program-scoped. Dashboard totals reconcile to queryable event/record counts.

## Phase 6 — Batch and one-time submission paths

Implement batch schema/template, preview and per-row errors before committing
valid submissions through the same workflow service. Add resumable worker status,
retry deduplication and partial-failure reporting. Implement one-time invites with
expiry/revocation, limited scopes, explicit ownership and atomic redemption.
Reconcile remaining wireframe settings/content-management interactions.

Gate: malformed rows never publish; retrying an import does not duplicate entries;
expired or reused invitation tokens cannot create further submissions. Batch and
one-time entries pass the same review and asset policies as normal submissions.

## Phase 7 — Pilot and release

Use synthetic fixtures for all six roles, every state and both publication paths.
Exercise the full demo with representative users. Review accessibility, content,
responsive layouts, large-file behavior, rate limits, query performance, email,
backup restore and queue recovery. Establish alerting and support runbooks.

Gate: agreed critical journeys pass; no unresolved cross-scope access defects;
restore and rollback rehearsed; owners approve licensing text, privacy/contact
handling and publication routing. Deploy only on a separate explicit request.

## First implementation backlog

1. Produce a wireframe screen/field/action inventory, including conditional fields.
2. Record identity, scope and state-transition decisions in small ADRs.
3. Confirm backend dependency choices and host/storage constraints.
4. Create schema/migrations with organization/program isolation tests.
5. Integrate sign-in, sessions and permission checks using two synthetic orgs.
6. Deliver one authenticated create/save/resume draft flow end to end.
7. Add uploads, then submit/review/legal publication before broadening dashboards.

Estimate the first vertical slice after steps 1–3. Re-estimate each phase from
working code; a fixed twelve-week commitment is not justified by the wireframes
alone. Keep a traceability checklist from every wireframe action to an endpoint,
permission, persisted record and acceptance test.
