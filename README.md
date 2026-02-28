# zhiaiwan-utils

[![npm version](https://img.shields.io/npm/v/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![npm downloads](https://img.shields.io/npm/dm/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![CI](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[中文](./README.CN.md)

A pure function utility library extended from Lodash 4.17.23, with ESM/CJS/runtime/type outputs.

Docs URL (GitHub Pages): `https://qq61538187.github.io/zhiaiwan-utils/`


## Installation

```bash
pnpm add @zhiaiwan/utils
# or
npm i @zhiaiwan/utils
# or
yarn add @zhiaiwan/utils
```

## Quick Start

```ts
// Full entry (recommended for discoverability)
import { add, pick, debounce } from '@zhiaiwan/utils'

const sum = add(1, 2)
const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'])

const fn = debounce(() => console.log('run'), 100)
fn()
```

```ts
// Per-method subpath (ESM/CJS both supported)
import addFromSubpath from '@zhiaiwan/utils/add'
const chunkDefault = require('@zhiaiwan/utils/chunk')

const sum = addFromSubpath(1, 2)
const grouped = chunkDefault([1, 2, 3, 4], 2)
```

```ts
// Group import
import { array, object, math } from '@zhiaiwan/utils'
import { func } from '@zhiaiwan/utils'

const grouped = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
const picked = object.pick({ id: 1, name: 'zw' }, ['id'] as const)
const added = math.add(1, 2)
```

## Examples

The `examples/` directory now mirrors `src/` 1:1. Each method/internal module has an executable `examples/*.mjs`.

Build first, then run any example file directly:

```bash
pnpm run build
node examples/add.mjs
# or
node examples/internal/path-core.mjs
```

For consistency checks:

```bash
pnpm run verify:examples
```

Reference:
- `docs/guide/getting-started.md`
- `docs/api/index.md`

## Community

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `CHANGELOG.md`

### Contributor note for generated exports

- `scripts/exports/exports.generated.json` and `package.json` field `exports` are generated artifacts.
- Do not edit them manually. Run `pnpm run sync:exports` after changing `scripts/meta/method-groups.mjs`.
- `pnpm run check:exports` validates metadata -> generated artifact -> package exports consistency.
- Canonical command names are `sync:exports` and `validate:full`; `validate:core` is a compatibility alias.
- Canonical validation entrypoints:
  - `pnpm run validate:fast` (fast local feedback before full build)
  - `pnpm run validate:full` (full source/build/artifact/runtime pipeline)
  - `pnpm run validate:core` (compatibility alias of `validate:full`)
  - `pnpm run validate:docs` (docs pipeline)
  - `pnpm run validate:publish` (publish gate, includes `npm pack --dry-run`)

## Project Structure

```text
src/            # public per-method modules and root named exports
tests/          # runtime tests (strict 1:1 mirror of src)
type-tests/     # TypeScript type tests (strict 1:1 mirror of src)
examples/       # executable examples (strict 1:1 mirror of src)
scripts/        # build, verify, and smoke scripts
benchmarks/     # benchmark data and result artifacts
docs/           # VitePress docs (guide + api)
dist/           # build outputs (generated)
package.json    # scripts, exports, engines, release entry
tsconfig*.json  # TypeScript settings for source/build/type-tests
rollup.config.mjs # UMD/browser build configuration
vitest.config.ts  # test runner configuration
.changeset/     # versioning and release metadata
.github/        # CI/release workflows and collaboration templates
```

### Architecture-Oriented Directory Details

```text
.
├─ src/                          # source architecture (single responsibility utilities)
│  ├─ index.ts                   # root entry: named exports + grouped objects
│  ├─ add.ts                     # per-method module (mapped to CJS subpath artifacts)
│  ├─ chunk.ts                   # per-method module
│  └─ ...                        # other pure utility modules
├─ tests/                        # runtime quality layer (behavior correctness)
│  ├─ add.test.ts                # 1:1 mapped from src/add.ts
│  ├─ internal/path-core.test.ts # 1:1 mapped from src/internal/path-core.ts
│  └─ ...                        # all method/internal behavior tests
├─ type-tests/                   # type quality layer (inference and contracts)
│  ├─ add.ts                     # 1:1 mapped from src/add.ts
│  ├─ internal/path-core.ts      # 1:1 mapped from src/internal/path-core.ts
│  └─ ...                        # all method/internal type tests
├─ examples/                     # executable example layer (1:1 with src)
│  ├─ add.mjs                    # 1:1 mapped from src/add.ts
│  ├─ internal/path-core.mjs     # 1:1 mapped from src/internal/path-core.ts
│  └─ ...                        # all method/internal runnable examples
├─ scripts/                      # engineering automation layer
│  ├─ meta/                      # source-of-truth metadata (method groups)
│  ├─ index/                     # source index generation
│  ├─ exports/                   # exports map sync/check/verify
│  ├─ build/                     # build pipelines for es/cjs/umd/types
│  ├─ verify/                    # artifact/method/jsdoc verification
│  ├─ dev/                       # local helpers (node-smoke, commitlint)
│  └─ bench/                     # benchmark baseline generator
├─ docs/                         # documentation architecture
│  ├─ guide/                     # onboarding and usage guides
│  ├─ api/                       # API references with examples
│  └─ .vitepress/                # docs site config/theme
├─ dist/                         # distribution layer (generated)
│  ├─ es/                        # ESM outputs for modern toolchains
│  ├─ cjs/                       # CJS outputs for compatibility
│  ├─ umd/                       # browser/UMD outputs
│  └─ types/                     # declaration files for TypeScript users
├─ .changeset/                   # release management layer (versioning/changelog)
├─ .github/                      # CI/CD and collaboration automation
├─ package.json                  # package contract (exports/scripts/engines)
├─ tsconfig.json                 # base TS config
├─ tsconfig.esm.json             # ESM build TS config
├─ tsconfig.types.json           # declaration build TS config
├─ tsconfig.type-tests.json      # type-test TS config
├─ tsconfig.umd.json             # UMD build TS config
├─ rollup.config.mjs             # bundling pipeline definition
└─ vitest.config.ts              # test runner pipeline definition
```

> Group subpath entries such as `array/func/object/...` are generated during build from `scripts/meta/method-groups.mjs`, not maintained as standalone files under `src/`.

## FAQ

### Why is ESM recommended if CJS still exists?

ESM is the primary target for modern TS/Node toolchains. CJS (`dist/cjs`) is kept for compatibility, and both paths are validated in `pnpm run validate:full` (including node smoke checks).

### Does this library have runtime configuration options?

No. `@zhiaiwan/utils` focuses on pure utility methods and currently exposes no runtime config object.

### What should I use: root import, grouped import, or subpath import?

- Use root named imports for convenience.
- Use grouped imports when you want category-level organization (`array`, `func`, `object`, `math`).
- Use subpath imports when you want path-level imports (`@zhiaiwan/utils/<method>`), in both ESM and CJS.

### Why does `chunk` return `[]` for some inputs?

`chunk` returns `[]` when the input is not an array or when `size` is non-finite/less than 1. Non-integer finite sizes are truncated before processing.

### How do I troubleshoot type/runtime/export issues before publishing?

Run this sequence:

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:publish
```

## Detailed Development Workflow

The following workflow is for day-to-day changes that improve architecture/implementation without changing existing feature behavior.

### Impacted directories (always check)

- `tests/`: runtime behavior tests (`*.test.ts`)
- `type-tests/`: type contract tests (`*.ts`)
- `examples/`: runnable examples (`*.mjs`)
- `docs/`: usage/API docs, navigation, and workflow guides

Rule of thumb: when you change public methods or group metadata in `src/`, review and update all four directories above.

### Scenario 1: Add one method under an existing group

1. Add the source file in `src/` (for example `src/newMethod.ts`).
2. Add the method name to the target group in `scripts/meta/method-groups.mjs` (for example under `array`).
3. Regenerate generated artifacts:
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. Add 1:1 mirror files:
   - runtime test: `tests/newMethod.test.ts`
   - type test: `type-tests/newMethod.ts`
   - runnable example: `examples/newMethod.mjs`
   - docs updates: method docs in `docs/api` and related guides in `docs/guide`
5. Validate:
   - minimal gate: `pnpm run validate:fast`
   - full gate: `pnpm run validate:full`

### Scenario 2: Add a new group and group methods

1. Add a new group key in `scripts/meta/method-groups.mjs` (for example `crypto`) with its method list.
2. Add method implementations in `src/` (for example `src/hash.ts`, `src/verify.ts`).
3. Regenerate generated artifacts:
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. For each new method, add 1:1 mirrors:
   - `tests/<method>.test.ts`
   - `type-tests/<method>.ts`
   - `examples/<method>.mjs`
5. Update docs navigation/group pages (`docs/api`, `docs/guide`) where needed.
6. Run `pnpm run validate:full`; run `pnpm run validate:publish` before release.

### Scenario 3: Add multiple methods into an existing group

1. Update the target group method list in `scripts/meta/method-groups.mjs` in one pass.
2. Add corresponding method files in `src/`.
3. Run generation first:
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. Run mirror helpers:
   - `pnpm run sync:method-tests`
   - `pnpm run sync:examples`
5. Replace baseline stubs with real assertions and runnable examples.
6. Update `docs/api` and required `docs/guide` pages so navigation and examples stay aligned.
7. Run `pnpm run validate:fast`, then `pnpm run validate:full`.

### Scenario 4: Build/exports/scripts changes only (no API changes)

1. Change `scripts/build/**`, `scripts/exports/**`, or config files (`rollup.config.mjs`, `tsconfig*.json`).
2. Run:
   - `pnpm run check:exports`
   - `pnpm run check:index`
   - `pnpm run validate:fast`
3. If release pipeline is affected, also run:
   - `pnpm run verify:jsdoc`
   - `pnpm run validate:docs`
   - `pnpm run validate:publish`

### Scenario 5: Add a full-entry utility property method (for example `actionFunction`)

1. Add the runtime line in `scripts/meta/full-entry-methods.mjs` (injected into `dist/es` and `dist/cjs`, then inherited by `dist/umd`).
2. Add the matching type declaration in `scripts/build/build-types.mjs` within the top-level default object block (same area as `VERSION` and `tap`).
3. Rebuild and verify generated artifacts:
   - `pnpm run build`
   - Focus checks: `dist/es/zhiaiwanUtils.default.js`, `dist/cjs/zhiaiwanUtils.js`, `dist/umd/zhiaiwanUtils.js`, `dist/types/zhiaiwanUtils.default.d.ts`
4. If the method must also be exported as a standalone subpath (for example `@zhiaiwan/utils/actionFunction`), also update:
   - `src/actionFunction.ts`
   - `scripts/meta/method-groups.mjs`
   - `pnpm run sync:exports && pnpm run gen:index`
5. Validate:
   - `pnpm run validate:fast`
   - `pnpm run validate:full`

### Recommended pre-PR sequence

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:full
pnpm run verify:jsdoc
pnpm run validate:docs
```

## Dev Commands

- Recommended validation flow:
  - `pnpm run validate:fast`
  - `pnpm run validate:full`
  - `pnpm run validate:docs`
  - `pnpm run validate:publish`
- Build and checks:
  - `pnpm run build`
  - `pnpm run lint`
  - `pnpm run typecheck`
  - `pnpm run verify:types`
  - `pnpm run verify:artifacts`
  - `pnpm run test:node:smoke`
- Mirror maintenance:
  - `pnpm run sync:method-tests`
  - `pnpm run clean:method-tests`
  - `pnpm run verify:method-tests`
  - `pnpm run sync:examples`
  - `pnpm run sync:examples:docs`
  - `pnpm run clean:examples`
  - `pnpm run verify:examples`
- Tests:
  - `pnpm run test:src`
  - `pnpm run test:coverage`
  - `pnpm run test:dist`
  - `pnpm run test:run`
- Exports and index:
  - `pnpm run sync:exports`
  - `pnpm run gen:index`
  - `pnpm run validate:core`
- Docs and release:
  - `pnpm run docs:build`
  - `pnpm run bench`
  - `pnpm run security:audit`
  - `pnpm run changeset:version`
  - `pnpm run changeset:publish`

### scripts quick reference (package.json)

```jsonc
"clean": "rimraf dist .tmp-types", // Clean build artifacts and temporary type files
"gen:index": "node scripts/index/generate-index.mjs", // Generate/refresh src/index.ts
"check:index": "node scripts/index/generate-index.mjs --check", // Check whether index needs regeneration
"sync:exports": "node scripts/exports/sync-exports.mjs", // Sync exports map to package.json and artifact file
"check:exports": "node scripts/exports/check-exports.mjs", // Check exports drift against metadata
"verify:methods": "node scripts/verify/verify-methods.mjs", // Verify method metadata and source consistency
"verify:exports": "node scripts/exports/verify-exports.mjs", // Verify export mapping completeness
"verify:jsdoc": "node scripts/verify/verify-jsdoc.mjs", // Verify public API JSDoc quality
"sync:method-tests": "node scripts/verify/sync-method-tests.mjs", // Create missing tests mirrored from src
"clean:method-tests": "node scripts/verify/clean-mirror-tests.mjs", // Remove extra mirrored test files
"verify:method-tests": "node scripts/verify/verify-method-tests.mjs", // Verify 1:1 src-to-tests mirror
"sync:examples": "node scripts/verify/sync-mirror-examples.mjs", // Create missing examples mirrored from src
"sync:examples:docs": "node scripts/verify/sync-examples-from-docs.mjs", // Sync examples from docs
"clean:examples": "node scripts/verify/clean-mirror-examples.mjs", // Remove extra mirrored example files
"verify:examples": "node scripts/verify/verify-mirror-examples.mjs", // Verify 1:1 src-to-examples mirror
"verify:artifacts": "node scripts/verify/verify-artifacts.mjs", // Verify key dist artifacts
"build:cjs": "node scripts/build/build-runtime.mjs", // Build CJS runtime artifacts
"build:es": "tsc -p tsconfig.esm.json && node scripts/build/build-esm.mjs", // Build ESM artifacts
"build:umd": "node scripts/build/build-browser.mjs", // Build UMD/browser artifacts
"build:types": "tsc -p tsconfig.types.json && node scripts/build/build-types.mjs", // Build declaration artifacts
"build": "pnpm run clean && pnpm run check:exports && pnpm run verify:methods && pnpm run verify:exports && pnpm run build:es && pnpm run build:cjs && pnpm run build:umd && pnpm run build:types", // Full build pipeline
"typecheck": "tsc --noEmit", // TypeScript type-check only
"verify:types": "tsc -p tsconfig.type-tests.json --noEmit", // Run type contract checks in type-tests
"test:node:smoke": "node scripts/dev/node-smoke.mjs", // Node smoke test (ESM/CJS loading)
"test": "vitest", // Vitest interactive mode
"test:src": "vitest run --exclude \"tests/**/*.dist.test.ts\"", // Run source-level tests (exclude dist tests)
"test:internal": "vitest run tests/internal/kernel.test.ts", // Run internal kernel tests only
"test:coverage:src": "vitest run --coverage --exclude \"tests/**/*.dist.test.ts\"", // Source-level coverage
"test:coverage:dist": "pnpm run build && pnpm run test:dist", // Build then run dist-level test flow
"test:coverage": "pnpm run test:coverage:src", // Coverage shortcut entry
"test:dist": "vitest run tests/full-entry.dist.test.ts tests/grouping.dist.test.ts", // Dist full-entry/grouping tests
"test:run": "vitest run", // Run all tests once
"lint": "biome lint ./src ./tests ./scripts", // Lint source/tests/scripts
"fix": "biome check --write ./src ./tests ./scripts", // Auto-fix lint/format issues
"docs:dev": "vitepress dev docs", // Start docs dev server
"docs:build": "vitepress build docs", // Build docs site
"docs:preview": "vitepress preview docs", // Preview built docs
"bench": "pnpm run build && node scripts/bench/run-bench.mjs", // Build and run benchmark suite
"security:audit": "pnpm audit --prod --audit-level high", // Security audit for production deps (high+)
"validate:fast": "pnpm run check:exports && pnpm run check:index && pnpm run lint && pnpm run typecheck && pnpm run verify:types && pnpm run verify:method-tests && pnpm run verify:examples && pnpm run test:src", // Fast validation gate
"validate:full": "pnpm run validate:fast && pnpm run build && pnpm run test:dist && pnpm run verify:artifacts && pnpm run test:node:smoke", // Full validation gate
"validate:core": "pnpm run validate:full", // Compatibility alias (same as validate:full)
"validate:docs": "pnpm run docs:build", // Docs validation gate
"validate:publish": "pnpm run validate:core && pnpm run verify:jsdoc && pnpm run validate:docs && npm pack --dry-run", // Final publish gate
"examples": "pnpm run verify:examples", // Example mirror/integrity check entry
"changeset:version": "changeset version", // Apply version/changelog updates from changesets
"changeset:publish": "changeset publish", // Publish changeset releases to npm
"commitlint": "node scripts/dev/commitlint.mjs", // Commit message linting
"prepare": "husky", // Install/initialize git hooks
"prepack": "pnpm run build && pnpm run verify:artifacts", // Build and verify before npm pack
"prepublishOnly": "pnpm run verify:types && pnpm run verify:jsdoc && pnpm run test:run && pnpm run test:node:smoke" // Final gate before npm publish
```

## Tech Stack

- TypeScript
- Lodash
- Vitest
- Rollup
- VitePress
- Biome
- Changesets

## License

MIT
