# Contributing Guide

Thanks for contributing to `@zhiaiwan/utils`.

## Development Environment

- Node: `>=20` (recommended: `22.15.0`)
- Package manager: `pnpm`

```bash
pnpm install
```

## Branch and Commit Conventions

- Start development from a new branch based on `main`
- Commit messages should follow Conventional Commits (commitlint is enabled)
  - Example: `feat(array): add flatten`
  - Example: `fix(types): improve memoize inference`

## Recommended Local Validation

Before opening a PR, run at least:

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:full
pnpm run verify:jsdoc
pnpm run validate:docs
```

Use `sync:exports` and `validate:full` as canonical command names; `validate:core` is a compatibility alias.

### Validation Matrix by Change Type

| Change type | Required commands |
| --- | --- |
| Docs only | `pnpm run validate:docs` |
| Build/CI only | `pnpm run validate:fast` |
| Refactor (no behavior change) | `pnpm run validate:full` + `pnpm run verify:jsdoc` |
| Bug fix | Refactor set + `pnpm run test:coverage:src` |

If the change touches `src/internal/**`, additionally run:

```bash
pnpm run test:internal
```

## Conventions for Adding Methods/Categories

- Goal: when adding methods/categories, prefer changing only `scripts/meta/method-groups.mjs` + `src/*.ts`
- `src/index.ts` is generated. Do not edit it manually; run `pnpm run gen:index` after updating method metadata.
- `package.json` exports is generated from metadata. Do not edit `exports` manually; run `pnpm run sync:exports`.
- Add a new method:
  1. Add a new method file under `src/`
  2. Update `scripts/meta/method-groups.mjs` (single source of truth)
  3. Add the method name in `GROUP_METHODS` inside `scripts/meta/method-groups.mjs`
  4. Regenerate index with `pnpm run gen:index` (do not hand-edit `src/index.ts`)
  5. Add 1:1 test files:
     - runtime: `tests/<same-path-as-src>.test.ts`
     - types: `type-tests/<same-path-as-src>.ts`
  6. Add/update examples in `tests/`, `type-tests/`, and `docs/`
  7. If baseline method-level files are missing, run `pnpm run sync:method-tests`
- Add a new category:
  1. Add the category in `GROUP_METHODS`
  2. Regenerate grouped exports via `pnpm run gen:index`
  3. Add a matching docs page (for example, `docs/api/<group>.md`, with method-name anchors)

### Change Type -> Required File Updates

| Change type | Must update files |
| --- | --- |
| Method inventory/group change | `scripts/meta/method-groups.mjs`, generated `src/index.ts`, generated exports artifact, `package.json` `exports`, related docs pages |
| New/changed method implementation | `src/<method>.ts`, related `tests/**`, related `type-tests/**`, related docs pages |
| Build/exports pipeline adjustment | `scripts/build/**` or `scripts/exports/**`, `package.json` scripts/exports, docs workflow sections if command flow changed |
| Docs workflow change | `CONTRIBUTING.md`, `README.md`, `README.CN.md`, `docs/guide/**` (keep command semantics aligned) |
| Internal kernel change (`src/internal/**`) | touched internal files + `tests/internal/**` and run `pnpm run test:internal` |

## API Example Alignment (Lodash 4.17.23)

- Source of truth for API examples is the live Lodash page: `https://lodash.com/docs/4.17.23`.
- You must collect examples via `/agent-browser` (do not update examples from memory).
- Required extraction workflow:
  1. `agent-browser open https://lodash.com/docs/4.17.23`
  2. `agent-browser snapshot -i`
  3. Extract the target method `Example` section from the live page
  4. Update `docs/api/*.md` examples with the extracted content
- Keep Lodash example order and output comments (`// =>`) unchanged.
- For mapped methods (for example `unique` -> `uniq`, `each` -> `forEach`), keep a `Mapped from Lodash: ...` note in the method section.
- Regenerate mapping/evidence files when examples change:
  - `docs/guide/lodash-example-mapping.md`
  - `docs/guide/lodash-browser-evidence.json`

## Versioning and Release (Changesets)

- New features and bug fixes should include a changeset
- See `.changeset/README.md` for usage

### Release Execution Order

Use this sequence before manual publish:

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:publish
pnpm run changeset:version
pnpm run changeset:publish
```

## Pull Request

A PR should include:

- Why this change is needed
- What changed
- How it was verified
- Whether exports/types/docs are affected

## Common Failure Troubleshooting

- `check:exports` failed:
  - Run `pnpm run sync:exports`
  - Commit `package.json` updates
- `check:index` failed:
  - Run `pnpm run gen:index`
  - Commit `src/index.ts` updates
- `verify:methods` failed:
  - Ensure `scripts/meta/method-groups.mjs`, `src/*.ts`, and docs are synchronized
- `verify:types` failed:
  - Update `type-tests/*` for changed type contracts
- `verify:method-tests` failed:
  - Ensure every `src/**/*.ts` file has mirrored test files:
    - `tests/<same-path>.test.ts`
    - `type-tests/<same-path>.ts`
  - Or run `pnpm run sync:method-tests` to generate missing baseline files
- docs build failed:
  - Ensure newly added guide/API pages are linked in docs sidebar config

## Generated Files Policy

The following files are generated and should not be hand-edited:

- `src/index.ts` (generated by `pnpm run gen:index`)
- `package.json` field `exports` (generated by `pnpm run sync:exports`)
- `scripts/exports/exports.generated.json` (generated by `pnpm run sync:exports`)

## CJS Build Strategy

- `build:cjs` now transpiles `dist/es/**/*.js` to CJS via TypeScript compiler API.
- Do not add or maintain regex/string-replace based ESM -> CJS conversions.
- Public method subpaths keep default-export compatibility for `require()` consumers.
- If CJS output behavior looks incorrect:
  1. Run `pnpm run build:es && pnpm run build:cjs`
  2. Run `pnpm run test:node:smoke`
  3. Compare generated `dist/es/<method>.js` and `dist/cjs/<method>.js` for the same method
  4. Fix source/module semantics, not string-level transform rules

### Canonical Validation Entry Points

- `pnpm run validate:fast`: fast local/CI feedback checks before full build.
- `pnpm run validate:full`: full source/build/artifact/runtime consistency gate.
- `pnpm run validate:core`: compatibility alias for `validate:full`.
- `pnpm run validate:docs`: docs build validation.
- `pnpm run validate:publish`: publish gate (`validate:core` + jsdoc + docs + pack dry-run).

PRs that touch method metadata should include regenerated outputs from the commands above.
