# zhiaiwan-utils

A lightweight utility library for **ESM + TypeScript**, covering common array, object, and function helpers.

## Features

- ESM-first design for modern frontend and Node.js projects
- Strong type inference across scenarios like `flowRight`, `memoize`, and `pick`
- Multi-target artifacts: `dist/es`, `dist/cjs`, `dist/umd`, `dist/types`
- Complete validation workflow: type checks, tests, builds, and pre-publish smoke checks

## Quick Start

```bash
pnpm add @zhiaiwan/utils
```

```ts
import { add, pick } from '@zhiaiwan/utils'

const sum = add(1, 2)
const user = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'] as const)
```

Go to [Getting Started](/guide/getting-started) for full import/build workflows, and [API Categories](/api/index) for category-based function references.
