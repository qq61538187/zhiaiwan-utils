# zhiaiwan-utils

A pure function library with cjs/es/types outputs.

## Install

```bash
pnpm add @zhiaiwan/utils
```

## Usage

```ts
import { add, pick, debounce } from '@zhiaiwan/utils'

const sum = add(1, 2)
const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'])
const fn = debounce(() => console.log('run'), 100)
```

### Module Compatibility Policy

- This package primarily targets **ESM + TypeScript** publishing.
- ESM usage with `import` is recommended in modern projects.
- A CommonJS build (`dist/cjs`) is provided for compatibility scenarios.

### Import Patterns

```ts
// Root named import
import { add, chunk, compose } from '@zhiaiwan/utils'

// Subpath default import
import addDefault from '@zhiaiwan/utils/add'
import chunkDefault from '@zhiaiwan/utils/chunk'

// Grouped imports
import { array, object, math } from '@zhiaiwan/utils'
import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'

const sum = addDefault(1, 2)
const groups = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
const picked = object.pick({ id: 1, name: 'zw' }, ['id'] as const)
const added = math.add(1, 2)
```

### Type Inference Examples

```ts
import { compose, memoize, pick } from '@zhiaiwan/utils'

const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'] as const)
// { id: number; name: string }

const pipeline = compose(
  (value: { count: number }) => value.count,
  (value: string) => ({ count: Number(value) }),
  (value: boolean) => (value ? '1' : '0')
)
// (value: boolean) => number

const memoized = memoize(
  (a: number, b: number) => a + b,
  (a, b) => `${a}:${b}`
)
// memoized.cache: Map<string, number>
```

## Scripts

- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run verify:types`
- `pnpm run test:run`

### Recommended Pre-publish Verification Order

```bash
pnpm run typecheck
pnpm run build
pnpm run verify:types
pnpm run test:run
pnpm pack --dry-run
```

## Build outputs

- `dist/es/*.js` (function-level files)
- `dist/es/zhiaiwanUtils.js`
- `dist/es/zhiaiwanUtils.default.js`
- `dist/cjs/*.js` (CommonJS function-level files)
- `dist/cjs/zhiaiwanUtils.js`
- `dist/cjs/array.js`
- `dist/cjs/func.js`
- `dist/cjs/object.js`
- `dist/cjs/math.js`
- `dist/umd/zhiaiwanUtils.js` (browser script entry)
- `dist/umd/zhiaiwanUtils.min.js`
- `dist/types/*.d.ts`
- `dist/types/zhiaiwanUtils.d.ts`

## Collaboration and Release

- Contribution guide: `CONTRIBUTING.md`
- PR template: `.github/PULL_REQUEST_TEMPLATE.md`
- Versioning and release (Changesets): `.changeset/README.md`
- Chinese docs: `README.CN.md`
