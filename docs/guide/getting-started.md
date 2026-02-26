# Getting Started

## Overview

`@zhiaiwan/utils` is a consistent, modular utility library focused on modern JavaScript and TypeScript projects.

It is designed for:

- Array, object, and function helpers
- Category-based imports and per-method imports
- Strong type inference for daily utility workflows

## Installation

Use your preferred package manager:

```bash
pnpm add @zhiaiwan/utils
# or
npm i @zhiaiwan/utils
# or
yarn add @zhiaiwan/utils
```

## Imports

```ts
// Full entry (recommended for discoverability)
import { add, chunk, compose } from '@zhiaiwan/utils'

// Per-method import
import addDefault from '@zhiaiwan/utils/add'

// Group import
import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'
```

## Why Use This Library?

This library keeps utility usage simple and predictable:

- Consistent behavior and naming across categories
- ESM-first packaging for modern toolchains
- Compatibility build for CommonJS usage
- Practical API surface aligned with documentation categories

## Module Formats

```ts
// ES Modules (primary)
import { add } from '@zhiaiwan/utils'

// CommonJS compatibility build
const utils = require('@zhiaiwan/utils')

// Browser UMD build (from dist/umd in package artifacts)
// <script src="zhiaiwanUtils.js"></script>
```

Build artifact layout:

- `dist/es` for ESM
- `dist/cjs` for CommonJS compatibility
- `dist/umd` for browser bundle
- `dist/types` for declaration files

## Grouped Methods

```ts
import { array } from '@zhiaiwan/utils'
// or: import array from '@zhiaiwan/utils/array'

import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'

const grouped = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
```

## Local Validation

```bash
pnpm run typecheck
pnpm run build
pnpm run verify:types
pnpm run test:run
```

## Pre-publish Check

```bash
pnpm pack --dry-run
```

## Compatibility Policy

This package primarily targets the **ESM + TypeScript** consumer experience, and also provides a CommonJS build in `dist/cjs` for compatibility scenarios.
