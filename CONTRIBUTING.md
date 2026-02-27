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
pnpm run lint
pnpm run typecheck
pnpm run verify:types
pnpm run test:run
pnpm run build
pnpm run verify:artifacts
pnpm run test:node:smoke
pnpm run docs:build
```

## Conventions for Adding Methods/Categories

- Goal: when adding methods/categories, prefer changing only `scripts/method-groups.mjs` + `src/*.ts`
- Add a new method:
  1. Add a new method file under `src/`
  2. Export and wire it into the corresponding group in `src/index.ts`
  3. Add the method name in `GROUP_METHODS` inside `scripts/method-groups.mjs`
  4. Add/update examples in `tests/`, `type-tests/`, and `docs/`
- Add a new category:
  1. Add the category in `GROUP_METHODS`
  2. Add a grouped export object in `src/index.ts`
  3. Add a matching docs page (for example, `docs/api/<group>.md`, with method-name anchors)

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

## Pull Request

A PR should include:

- Why this change is needed
- What changed
- How it was verified
- Whether exports/types/docs are affected
