# Architecture & Quality Baseline

This page defines the non-negotiable baseline for refactors in `@zhiaiwan/utils`.

## Non-Behavior-Change Constraints

- No new public runtime APIs.
- Existing API semantics stay stable (unless fixing a confirmed compatibility/security defect).
- Existing package exports stay stable (`check:exports` must pass).
- Existing type contracts stay stable (`verify:types` must pass).

## Source-of-Truth Rules

- Method inventory and groups are owned by `scripts/meta/method-groups.mjs`.
- Root entry `src/index.ts` is generated from method metadata.
- `package.json.exports` is generated/verified from script metadata, not maintained manually.
- API grouped docs must stay aligned with method metadata.

## Quality Gate Baseline

Required checks for behavior-safe changes:

```bash
pnpm run validate:core
```

Additional checks for release-facing changes:

```bash
pnpm run validate:publish
```

## Internal Kernel Safety Scope

Refactors touching `src/internal/**` must preserve:

- path parsing/walk behavior (`path-core`)
- object merge/assign mutation semantics (`object-native`)
- prototype pollution guards (`security-core`)

When these files change, run targeted internal-kernel tests in addition to source tests.

## Documentation Consistency Baseline

- README examples and docs examples should describe the same behavior.
- Alias/canonical mapping must be explicit (for example `each -> forEach`).
- Migration and deprecation docs must be updated together for contract changes.
