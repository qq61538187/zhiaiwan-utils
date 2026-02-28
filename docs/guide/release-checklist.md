# Release Checklist

This checklist is the maintainer-facing source of truth before creating or merging a release PR.

## Scope

- No new runtime behavior should be introduced during release-only changes.
- Metadata, generated artifacts, and docs must stay in sync.
- Release validation uses canonical script entrypoints (`validate:*`), not ad-hoc command combinations.

## 1) Prepare

```bash
pnpm install
pnpm run sync:exports
pnpm run gen:index
```

## 2) Core Validation

```bash
pnpm run validate:fast
pnpm run validate:full
```

What this gate covers:

- exports/index consistency checks
- lint + typecheck + type contract checks
- source tests + dist tests
- full build + artifact verification
- node runtime smoke (`cjs` + `esm`)

## 3) Docs Validation

```bash
pnpm run validate:docs
```

## 4) Publish Gate

```bash
pnpm run validate:publish
```

This gate includes:

- `validate:full` (or `validate:core` compatibility alias)
- `verify:jsdoc`
- `validate:docs`
- `npm pack --dry-run`

## 5) Changeset and Release

```bash
pnpm changeset
pnpm run changeset:version
pnpm run changeset:publish
```

## 6) Final Review Before Merge

- CI workflow is green on Node 20/22.
- Release workflow permissions and npm token are available.
- Generated files are committed:
  - `src/index.ts`
  - `scripts/exports/exports.generated.json`
  - `package.json` `exports` field
- Docs are updated when contracts or workflows changed.
