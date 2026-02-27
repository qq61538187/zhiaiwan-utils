# zhiaiwan-utils

[![npm version](https://img.shields.io/npm/v/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![npm downloads](https://img.shields.io/npm/dm/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![CI](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A pure function utility library with ESM/CJS/runtime/type outputs.

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
// Per-method import
import addDefault from '@zhiaiwan/utils/add'
import chunkDefault from '@zhiaiwan/utils/chunk'

const sum = addDefault(1, 2)
const grouped = chunkDefault([1, 2, 3, 4], 2)
```

```ts
// Group import
import { array, object, math } from '@zhiaiwan/utils'
import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'

const grouped = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
const picked = object.pick({ id: 1, name: 'zw' }, ['id'] as const)
const added = math.add(1, 2)
```

Reference:
- `docs/guide/getting-started.md`
- `docs/api/index.md`

## Project Structure

```text
src/            # public methods and grouped exports
tests/          # runtime behavior tests
type-tests/     # TypeScript inference and contract checks
scripts/        # build, verify, and smoke scripts
docs/           # VitePress docs (guide + api)
dist/           # build outputs (generated)
package.json    # scripts, exports, engines, release entry
tsconfig*.json  # TypeScript settings for source/build/type-tests
rollup.config.mjs # UMD/browser build configuration
vitest.config.ts  # test runner configuration
.changeset/     # versioning and release metadata
.github/        # CI/release workflows and collaboration templates
```

## FAQ

### Why is ESM recommended if CJS still exists?

ESM is the primary target for modern TS/Node toolchains. CJS (`dist/cjs`) is kept for compatibility, and both paths are validated by `pnpm run test:node:smoke`.

### Does this library have runtime configuration options?

No. `@zhiaiwan/utils` focuses on pure utility methods and currently exposes no runtime config object.

### What should I use: root import, grouped import, or subpath import?

- Use root named imports for convenience.
- Use grouped imports when you want category-level organization (`array`, `func`, `object`, `math`).
- Use subpath imports when you need explicit path-level imports.

### Why does `chunk` return `[]` for some inputs?

`chunk` returns `[]` when the input is not an array or when `size` is non-finite/less than 1. Non-integer finite sizes are truncated before processing.

### How do I troubleshoot type/runtime/export issues before publishing?

Run this sequence:

```bash
pnpm run lint
pnpm run typecheck
pnpm run verify:types
pnpm run test:run
pnpm run build
pnpm run verify:artifacts
pnpm run test:node:smoke
pnpm pack --dry-run
```

## Dev Commands

- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run verify:types`
- `pnpm run test:run`
- `pnpm run build`
- `pnpm run verify:artifacts`
- `pnpm run test:node:smoke`
- `pnpm run docs:build`

## Tech Stack

- TypeScript
- Vitest
- Rollup
- VitePress
- Biome
- Changesets

## License

MIT
