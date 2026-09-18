# SHIP implementation sequence

The [10-week plan and checklist](10-week-preview-proposal.md) define delivery. Product scope comes only from the [wireframe action inventory](wireframe-action-inventory.md) and its resolved questions. The [scope matrix](preview-scope-matrix.md) defines acceptance. Earlier phase plans are superseded.

1. **Week 1:** Inspect remaining dialogs and resolve conflicting approval/edit behavior, visibility, source eligibility and metric definitions. Confirm providers, users and approved data/content.
2. **Week 2:** Implement identity, scoped authorization, migrations, service/API foundations, private hosting/storage, worker, CI and operations.
3. **Week 3:** Implement the exact submission and existing-entry fields/actions, safe uploads and seed tooling.
4. **Week 4:** Implement technical queues/decisions, submitter lists, Inbox, Notifications and displayed reminders.
5. **Week 5:** Implement legal publication and the observed external-public route. Do not infer new return/reinstatement or published-edit workflows.
6. **Week 6:** Connect public pages, Grid/List search/detail, license access/contact, learning/resources, interest/contact forms and profile/account settings.
7. **Week 7:** Implement observed administration controls and displayed metrics. Preserve immediate moderation edits and resolve Program Admin approval authority explicitly.
8. **Week 8:** Implement observed batch and guest paths, including draft-only imports and the guest signed agreement.
9. **Week 9:** Run role journeys and technical recovery/access checks with pilot users and approved data.
10. **Week 10:** Fix acceptance defects, release and hand over operations.

Tests accompany implementation throughout. Product controls, backend safeguards and user pilot constraints are labeled separately in the checklist. No additional dashboard, filter, report, integration or state transition is authorized by this sequence.

Use only the source-linked cut list in the current plan if capacity is insufficient. Cuts require owner approval and synchronized updates to the checklist, schedule and scope matrix. Build in `schmidthub`; do not incorporate IPLicensing.
