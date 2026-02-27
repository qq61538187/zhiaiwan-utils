# zhiaiwan-utils

[![npm version](https://img.shields.io/npm/v/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![npm downloads](https://img.shields.io/npm/dm/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![CI](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

一个纯函数工具库，提供 ESM/CJS/runtime/type 产物输出。

## 安装

```bash
pnpm add @zhiaiwan/utils
```

## 快速开始

```ts
import { add, pick, debounce } from '@zhiaiwan/utils'

const sum = add(1, 2)
const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'])

const fn = debounce(() => console.log('run'), 100)
fn()
```

## API（含示例）

```ts
import { flowRight, memoize, pick } from '@zhiaiwan/utils'

const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'] as const)
// { id: number; name: string }

const pipeline = flowRight(
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

查看完整 API 细节：
- `docs/api/index.md`
- `docs/guide/getting-started.md`

## 导出总览

- 根入口命名导入：
  - `import { add, chunk, flowRight } from '@zhiaiwan/utils'`
- 子路径默认导入：
  - `import addDefault from '@zhiaiwan/utils/add'`
  - `import chunkDefault from '@zhiaiwan/utils/chunk'`
- 分组导入：
  - `import { array, object, math } from '@zhiaiwan/utils'`
  - `import func from '@zhiaiwan/utils/func'`

## 示例

- 可运行示例分布在测试与文档片段中：
  - `tests/*.test.ts`
  - `type-tests/*.ts`
  - `docs/api/*.md`

## 项目结构

```text
src/            # 公开方法与分组导出
tests/          # 运行时行为测试
type-tests/     # TypeScript 类型契约测试
scripts/        # 构建、校验、冒烟脚本
docs/           # VitePress 文档（guide + api）
dist/           # 构建产物（自动生成）
```

## FAQ / 常见问题

### 为什么推荐 ESM，但仍保留 CJS？

ESM 是现代 TS/Node 工具链的主要目标。CJS（`dist/cjs`）用于兼容场景，且两种路径都通过 `pnpm run test:node:smoke` 验证。

### 这个库有运行时配置项吗？

没有。`@zhiaiwan/utils` 专注于纯工具函数，目前不暴露运行时配置对象。

### 应该用根导入、分组导入还是子路径导入？

- 为了方便使用，使用根入口命名导入。
- 当你希望按类别组织时，使用分组导入（`array`、`func`、`object`、`math`）。
- 当你需要显式路径级导入时，使用子路径导入。

### 为什么 `chunk` 在某些输入下会返回 `[]`？

当输入不是数组，或 `size` 不是有限数/小于 1 时，`chunk` 会返回 `[]`。有限的非整数 `size` 会在处理前先截断。

### 发布前如何排查类型/导出/产物问题？

按以下顺序执行：

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

## 开发命令

- `pnpm run lint`
- `pnpm run typecheck`
- `pnpm run verify:types`
- `pnpm run test:run`
- `pnpm run build`
- `pnpm run verify:artifacts`
- `pnpm run test:node:smoke`
- `pnpm run docs:build`

## 技术栈

- TypeScript
- Vitest
- Rollup
- VitePress
- Biome
- Changesets

## License

MIT
