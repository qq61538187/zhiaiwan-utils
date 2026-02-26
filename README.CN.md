# zhiaiwan-utils

一个带有 cjs/es/types 三类产物的纯函数库。

## 安装

```bash
pnpm add @zhiaiwan/utils
```

## 使用示例

```ts
import { add, pick, debounce } from '@zhiaiwan/utils'

const sum = add(1, 2)
const selected = pick({ id: 1, name: 'zw', active: true }, ['id', 'name'])
const fn = debounce(() => console.log('run'), 100)
```

### 模块兼容策略

- 本库以 **ESM + TypeScript** 为主要发布目标。
- 推荐在现代工程中使用 `import`。
- 同时提供 CommonJS 构建（`dist/cjs`）用于兼容场景。

### 导入方式

```ts
// 根入口命名导入
import { add, chunk, compose } from '@zhiaiwan/utils'

// 子路径默认导入
import addDefault from '@zhiaiwan/utils/add'
import chunkDefault from '@zhiaiwan/utils/chunk'

// 分组导入
import { array, object, math } from '@zhiaiwan/utils'
import func from '@zhiaiwan/utils/func'
// 或: import { func } from '@zhiaiwan/utils'

const sum = addDefault(1, 2)
const groups = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
const picked = object.pick({ id: 1, name: 'zw' }, ['id'] as const)
const added = math.add(1, 2)
```

### 类型推导示例

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

## 脚本

- `pnpm run typecheck`
- `pnpm run build`
- `pnpm run verify:types`
- `pnpm run test:run`

### 发布前标准校验顺序

```bash
pnpm run typecheck
pnpm run build
pnpm run verify:types
pnpm run test:run
pnpm pack --dry-run
```

## 构建产物

- `dist/es/*.js`（函数级文件）
- `dist/es/zhiaiwanUtils.js`
- `dist/es/zhiaiwanUtils.default.js`
- `dist/cjs/*.js`（CommonJS 函数级文件）
- `dist/cjs/zhiaiwanUtils.js`
- `dist/cjs/array.js`
- `dist/cjs/func.js`
- `dist/cjs/object.js`
- `dist/cjs/math.js`
- `dist/umd/zhiaiwanUtils.js`（浏览器 script 引入）
- `dist/umd/zhiaiwanUtils.min.js`
- `dist/types/*.d.ts`
- `dist/types/zhiaiwanUtils.d.ts`

## 协作与发布

- 贡献规范：`CONTRIBUTING.md`
- PR 模板：`.github/PULL_REQUEST_TEMPLATE.md`
- 版本与发布（Changesets）：`.changeset/README.md`
