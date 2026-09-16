# Generic Engineering Standards

**Version 1.0.0**
January 2026

> **Note:**
> This document is for agents and LLMs to follow on any codebase, in any
> language or framework, before consulting stack-specific guidance. It
> covers judgment calls that aren't specific to a technology. Humans may
> also find it useful, but guidance here is optimized for automation and
> consistency by AI-assisted workflows.

---

## Abstract

Stack-agnostic engineering standards covering scope discipline, error
handling, security baseline, testing baseline, documentation, and commit
conventions. Use this file as the base layer; layer stack-specific rules
(see `stacks/`) on top of it for the actual language/framework in use.
Where the two conflict, the stack-specific file wins for that stack.

---

## Table of Contents

1. [Scope Discipline](#1-scope-discipline) — **CRITICAL**
2. [Error Handling](#2-error-handling) — **HIGH**
3. [Security Baseline](#3-security-baseline) — **CRITICAL**
4. [Testing Baseline](#4-testing-baseline) — **HIGH**
5. [Comments and Documentation](#5-comments-and-documentation) — **MEDIUM**
6. [Naming and Structure](#6-naming-and-structure) — **MEDIUM**
7. [Git and Commit Conventions](#7-git-and-commit-conventions) — **MEDIUM**
8. [Dependency Hygiene](#8-dependency-hygiene) — **MEDIUM**

---

## 1. Scope Discipline

**Impact: CRITICAL**

Do not add features, refactor, or introduce abstractions beyond what the
task requires. A bug fix doesn't need surrounding cleanup; a one-shot
script doesn't need a reusable module. Don't design for hypothetical
future requirements — three similar lines of code beat a premature
abstraction built for a fourth case that may never arrive.

**Incorrect (fixing a bug turns into a rewrite):**

Task: "the discount isn't applied for annual plans."
Diff touches: the discount calculation, a new `PricingStrategy`
interface, a config file for future plan types, and a renamed variable
in an unrelated function three files away.

**Correct (fix matches the task):**

Diff touches: the one conditional that excluded annual plans from the
discount check, plus a test for that case.

Don't add error handling, fallbacks, or validation for scenarios that
cannot happen given the surrounding code's guarantees. Validate at
system boundaries (user input, external APIs, file/network I/O) — trust
internal call sites that you control.

## 2. Error Handling

**Impact: HIGH**

Fail loudly at the boundary where a problem is first detectable, not
several layers downstream where the original cause is lost. Every
`catch` (or its language equivalent) should either handle the error
meaningfully — retry, fall back, surface a specific message — or not
exist. Catching and swallowing (`catch (e) {}`, bare `except: pass`)
hides real failures and turns debugging into archaeology.

**Incorrect (swallowed error hides the real failure):**

```
try {
  await saveRecord(data)
} catch (e) {
  // ignore
}
```

**Correct (handle it or let it propagate with context):**

```
try {
  await saveRecord(data)
} catch (e) {
  throw new Error(`Failed to save record ${data.id}: ${e.message}`)
}
```

Never use error handling to paper over a bug you could instead fix.
If a null/undefined check is guarding against a state that should be
impossible given the type system or calling convention, fix the source
of the impossible state rather than adding a guard everywhere it's read.

## 3. Security Baseline

**Impact: CRITICAL**

These apply regardless of language. See `playbooks/security-review.md`
for the full review procedure.

- Never hardcode secrets, API keys, or credentials in source. Use
  environment variables or a secrets manager, and confirm `.gitignore`
  actually excludes local env files before committing.
- Validate and sanitize all input at trust boundaries: user input, query
  params, file uploads, webhook payloads, third-party API responses.
  Never trust client-supplied data for authorization decisions.
- Use parameterized queries / prepared statements for anything that
  touches a database. Never build queries via string concatenation with
  user input.
- Escape or encode output appropriately for its context (HTML, SQL,
  shell, URL) to prevent injection in the receiving context.
- Keep dependencies patched. A vulnerability in a transitive dependency
  is still your vulnerability once it ships.
- Log security-relevant events (auth failures, permission denials) but
  never log secrets, tokens, or full credit-card/PII values.

## 4. Testing Baseline

**Impact: HIGH**

See `playbooks/test-strategy.md` for the full procedure. Baseline rules:

- Every bug fix gets a regression test that fails without the fix and
  passes with it. Without this, the same bug reappears in six months.
- Test behavior and contracts, not implementation details. A test that
  breaks every time you rename a private variable is testing the wrong
  thing.
- No flaky sleeps (`setTimeout` / `time.sleep`) to "wait for" async work
  in tests. Await the actual condition or use the framework's fake
  timers.
- Unit tests should not require a real network, database, or filesystem
  unless that integration is exactly what's under test — those belong
  in integration tests, kept separate and clearly labeled.

## 5. Comments and Documentation

**Impact: MEDIUM**

See `playbooks/documentation.md` for docs beyond inline comments.

Default to no comments. Add one only when the *why* is non-obvious: a
hidden constraint, a workaround for a specific external bug, an
invariant the reader could otherwise violate. Well-named identifiers
already communicate *what* the code does — a comment restating that is
noise that will drift out of sync with the code it describes.

**Incorrect (comment restates the code):**

```
// increment the counter by one
counter += 1
```

**Correct (comment explains a non-obvious constraint):**

```
// Stripe requires amounts in the smallest currency unit (cents), not dollars
const amountInCents = Math.round(amount * 100)
```

Never reference the current task, ticket number, or "added for X flow"
in a comment — that context belongs in the commit message and rots as
the code around it changes.

## 6. Naming and Structure

**Impact: MEDIUM**

Name things for what they *are*, not for their history (`UsersServiceV2`,
`newHandler`, `utilsFixed`). If an old version still exists for a
reason, say why in the commit message, not the identifier.

Organize by feature/domain, not by technical layer, once a module has
more than a handful of files — see the relevant `stacks/` file for
language-specific conventions on this.

## 7. Git and Commit Conventions

**Impact: MEDIUM**

- Commit messages explain *why*, not *what* — the diff already shows
  what changed.
- One logical change per commit. A commit that fixes a bug and reformats
  an unrelated file makes both harder to review and to revert.
- Never force-push, rewrite published history, or skip hooks
  (`--no-verify`) without explicit sign-off from whoever owns the branch.
- Before any destructive git operation (`reset --hard`, `checkout .`,
  `clean -f`), check `git status` first and stash or commit anything
  that would be lost.

## 8. Dependency Hygiene

**Impact: MEDIUM**

- Prefer the standard library or an already-installed dependency over
  adding a new package for something trivial.
- When adding a dependency, check it's actively maintained and doesn't
  duplicate something already in the project.
- Pin versions for anything that affects build reproducibility; don't
  silently widen a version range to make an unrelated change pass.

---

## How this composes with stack-specific files

This file is the base layer for every project regardless of language.
Layer the relevant file(s) from `stacks/` on top of it for
language/framework-specific rules (module organization, framework
idioms, performance patterns). Where a stack-specific rule is more
detailed or contradicts something generic here, the stack-specific rule
wins for that stack — it was written with that ecosystem's actual
constraints in mind.

See `README.md` in this repository for how to wire these files, the
role playbooks, and the Claude Code skills/subagents into an actual
project.
