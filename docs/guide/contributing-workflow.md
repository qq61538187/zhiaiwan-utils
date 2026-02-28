# Contributing Workflow

This guide describes the default contribution path for `@zhiaiwan/utils`.

## 1) Pick a Change Type

- Docs only
- Build/CI only
- Refactor (no behavior change)
- Bug fix (behavior correction)

Each type has a minimum validation set. See the matrix below.

## 2) Branch, Implement, Validate

```bash
git checkout -b <type>/<short-topic>
pnpm install
```

After implementation, run validation by change type:

| Change type | Minimum commands |
| --- | --- |
| Docs only | `pnpm run validate:docs` |
| Build/CI only | `pnpm run validate:core` |
| Refactor (no behavior change) | `pnpm run validate:core` + `pnpm run verify:jsdoc` |
| Bug fix | Refactor set + `pnpm run test:coverage:src` |

If `src/internal/**` was touched, also run:

```bash
pnpm run test:internal
```

## 3) Keep Metadata and Docs in Sync

- Never hand-edit `src/index.ts`. Run `pnpm run gen:index` if method metadata changed.
- Never hand-edit generated exports files:
  - `scripts/exports/exports.generated.json`
  - `package.json` field `exports`
- Run `pnpm run sync:exports` after method metadata changes.
- Use `pnpm run check:exports` to validate metadata -> generated artifact -> package exports consistency.
- Keep API docs and migration/deprecation docs aligned for contract changes.

## 4) Open Pull Request

PR description should include:

- Why change is needed
- Scope and risk
- Validation commands and outcomes
- Whether exports/types/docs/security are affected

## 5) Release Notes

For release-impacting changes, add a changeset and ensure `CHANGELOG.md` entry path remains valid.
