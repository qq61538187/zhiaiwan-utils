# zhiaiwan-utils

[![npm version](https://img.shields.io/npm/v/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![npm downloads](https://img.shields.io/npm/dm/@zhiaiwan/utils)](https://www.npmjs.com/package/@zhiaiwan/utils)
[![CI](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml/badge.svg)](https://github.com/zhiaiwan/utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[English](./README.md)

一个基于 Lodash 4.17.23 扩展的纯函数工具库，提供 ESM/CJS/runtime/type 产物输出。

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

## 示例

当前示例目录已与 `src/` 1:1 镜像，每个方法对应一个可直接运行的 `examples/*.mjs` 文件。

执行前请先构建 `dist`，然后按需运行单文件示例：

```bash
pnpm run build
node examples/add.mjs
# 或
node examples/internal/path-core.mjs
```

批量校验可执行：

```bash
pnpm run verify:examples
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

## 社区协作

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `CHANGELOG.md`

### 贡献者说明：导出映射为生成产物

- `scripts/exports/exports.generated.json` 与 `package.json` 的 `exports` 都是生成产物。
- 不要手动修改这两处；当你改动 `scripts/meta/method-groups.mjs` 后，执行 `pnpm run sync:exports`。
- `pnpm run check:exports` 会校验“方法元数据 -> 生成产物 -> package exports”的一致性。
- 规范命令名以 `sync:exports` 与 `validate:full` 为准；`validate:core` 为兼容别名。
- 统一验证入口：
  - `pnpm run validate:fast`（本地快速反馈）
  - `pnpm run validate:full`（源码/构建/产物/运行时完整流程）
  - `pnpm run validate:core`（`validate:full` 的兼容别名）
  - `pnpm run validate:docs`（文档流程）
  - `pnpm run validate:publish`（发布门禁，含 `npm pack --dry-run`）

## 导出总览

- 根入口命名导入：
  - `import { add, chunk, flowRight } from '@zhiaiwan/utils'`
- 子路径导入（支持 ESM/CJS）：
  - `import addFromSubpath, { add } from '@zhiaiwan/utils/add'`
  - `const add = require('@zhiaiwan/utils/add')`
- 分组导入：
  - `import { array, object, math } from '@zhiaiwan/utils'`
  - `import { func } from '@zhiaiwan/utils'`

## 项目结构

```text
src/            # 单方法源码与根入口命名导出
tests/          # 运行时测试（与 src 严格 1:1 镜像）
type-tests/     # TypeScript 类型测试（与 src 严格 1:1 镜像）
examples/       # 可执行示例（与 src 严格 1:1 镜像）
scripts/        # 构建、校验、冒烟脚本
benchmarks/     # benchmark 数据与结果产物
docs/           # VitePress 文档（guide + api）
dist/           # 构建产物（自动生成）
```

### 架构导向的详细目录结构

```text
.
├─ src/                          # 源码架构层（单一职责的纯函数模块）
│  ├─ index.ts                   # 根入口：命名导出 + 分组对象导出
│  ├─ add.ts                     # 单方法模块（构建产物会映射到 CJS 子路径）
│  ├─ chunk.ts                   # 单方法模块
│  └─ ...                        # 其他纯函数模块
├─ tests/                        # 运行时质量层（行为正确性）
│  ├─ add.test.ts                # 与 src/add.ts 1:1 对应
│  ├─ internal/path-core.test.ts # 与 src/internal/path-core.ts 1:1 对应
│  └─ ...                        # 全量方法/内部模块行为测试
├─ type-tests/                   # 类型质量层（推断与契约）
│  ├─ add.ts                     # 与 src/add.ts 1:1 对应
│  ├─ internal/path-core.ts      # 与 src/internal/path-core.ts 1:1 对应
│  └─ ...                        # 全量方法/内部模块类型测试
├─ examples/                     # 可执行示例层（与 src 1:1 镜像）
│  ├─ add.mjs                    # 与 src/add.ts 1:1 对应
│  ├─ internal/path-core.mjs     # 与 src/internal/path-core.ts 1:1 对应
│  └─ ...                        # 全量方法/内部模块示例
├─ scripts/                      # 工程自动化层
│  ├─ meta/                      # 方法分组等元数据单一事实源
│  ├─ index/                     # 根入口索引生成
│  ├─ exports/                   # exports 同步/检查/验证
│  ├─ build/                     # es/cjs/umd/types 构建流程
│  ├─ verify/                    # 产物/方法/jsdoc 校验
│  ├─ dev/                       # 本地开发辅助（node-smoke、commitlint）
│  └─ bench/                     # benchmark 基线生成
├─ docs/                         # 文档架构层
│  ├─ guide/                     # 入门与使用指南
│  ├─ api/                       # API 说明与示例
│  └─ .vitepress/                # 文档站点配置与主题
├─ dist/                         # 发布产物层（自动生成）
│  ├─ es/                        # 面向现代工具链的 ESM 输出
│  ├─ cjs/                       # 兼容场景的 CJS 输出
│  ├─ umd/                       # 浏览器/UMD 输出
│  └─ types/                     # TypeScript 声明文件输出
├─ .changeset/                   # 发布管理层（版本/变更记录）
├─ .github/                      # CI/CD 与协作自动化
├─ package.json                  # 包契约（exports/scripts/engines）
├─ tsconfig.json                 # 基础 TS 配置
├─ tsconfig.esm.json             # ESM 构建 TS 配置
├─ tsconfig.types.json           # 类型声明构建 TS 配置
├─ tsconfig.type-tests.json      # 类型测试 TS 配置
├─ tsconfig.umd.json             # UMD 构建 TS 配置
├─ rollup.config.mjs             # 打包流水线定义
└─ vitest.config.ts              # 测试流水线定义
```

> `array/func/object/...` 等分组子路径入口由构建阶段基于 `scripts/meta/method-groups.mjs` 自动生成，并非 `src/` 下的独立源码文件。

## FAQ / 常见问题

### 为什么推荐 ESM，但仍保留 CJS？

ESM 是现代 TS/Node 工具链的主要目标。CJS（`dist/cjs`）用于兼容场景，两种路径都会在 `pnpm run validate:full`（含 node smoke）中验证。

### 这个库有运行时配置项吗？

没有。`@zhiaiwan/utils` 专注于纯工具函数，目前不暴露运行时配置对象。

### 应该用根导入、分组导入还是子路径导入？

- 为了方便使用，使用根入口命名导入。
- 当你希望按类别组织时，使用分组导入（`array`、`func`、`object`、`math`）。
- 当你需要路径级导入时，可使用子路径（ESM/CJS 都支持）。

### 为什么 `chunk` 在某些输入下会返回 `[]`？

当输入不是数组，或 `size` 不是有限数/小于 1 时，`chunk` 会返回 `[]`。有限的非整数 `size` 会在处理前先截断。

### 发布前如何排查类型/导出/产物问题？

按以下顺序执行：

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:publish
```

## 详细开发过程

以下流程适用于“只改架构/实现，不改变现有功能语义”的日常开发。

### 变更影响目录（必须关注）

- `tests/`：运行时行为测试（`*.test.ts`）
- `type-tests/`：类型契约测试（`*.ts`）
- `examples/`：可执行示例（`*.mjs`）
- `docs/`：使用文档、API 文档、导航与流程说明

原则：凡是改动了 `src/` 的公开方法或分组，默认都要同步检查并更新这 4 个目录中的对应内容。

### 场景 1：新增一个函数（已有分类下）

1. 在 `src/` 新增函数文件（例如 `src/newMethod.ts`）。
2. 在 `scripts/meta/method-groups.mjs` 的目标分类中加入方法名（例如 `array` 下新增 `newMethod`）。
3. 运行生成与同步：
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. 补齐 1:1 镜像文件：
   - 运行时测试：`tests/newMethod.test.ts`
   - 类型测试：`type-tests/newMethod.ts`
   - 可执行示例：`examples/newMethod.mjs`
   - 文档说明：`docs/api` 与 `docs/guide` 中对应方法说明
5. 进行验证：
   - 最小验证：`pnpm run validate:fast`
   - 完整验证：`pnpm run validate:full`

### 场景 2：新增一个分类并新增分类方法

1. 在 `scripts/meta/method-groups.mjs` 新增分类键（例如 `crypto`）并填入方法列表。
2. 在 `src/` 新增对应方法实现文件（如 `src/hash.ts`、`src/verify.ts`）。
3. 运行生成与同步：
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. 为新方法逐个补齐 1:1 镜像：
   - `tests/<method>.test.ts`
   - `type-tests/<method>.ts`
   - `examples/<method>.mjs`
5. 更新文档索引/分组说明（`docs/api`、`docs/guide` 中相关页面）。
6. 执行完整验证：`pnpm run validate:full`，发布前执行 `pnpm run validate:publish`。

### 场景 3：在已有分类上批量新增方法

1. 一次性更新 `scripts/meta/method-groups.mjs` 中该分类的方法清单。
2. 批量补充 `src/*.ts` 对应实现。
3. 先运行：
   - `pnpm run sync:exports`
   - `pnpm run gen:index`
4. 再运行镜像辅助命令（用于补齐/清理）：
   - `pnpm run sync:method-tests`
   - `pnpm run sync:examples`
5. 对新增方法补全真实测试断言与示例逻辑（不要只保留模板）。
6. 同步补充 `docs/api` 与必要的 `docs/guide` 说明，确保导航与示例一致。
7. 执行 `pnpm run validate:fast`，通过后再跑 `pnpm run validate:full`。

### 场景 4：仅调整构建/导出/脚本，不改 API

1. 修改 `scripts/build/**`、`scripts/exports/**` 或配置文件（如 `rollup.config.mjs`、`tsconfig*.json`）。
2. 运行：
   - `pnpm run check:exports`
   - `pnpm run check:index`
   - `pnpm run validate:fast`
3. 若改动影响发布链路，追加：
   - `pnpm run verify:jsdoc`
   - `pnpm run validate:docs`
   - `pnpm run validate:publish`

### 场景 5：新增全量入口的附加属性方法（例如 `actionFunction`）

1. 在 `scripts/meta/full-entry-methods.mjs` 增加运行时代码行（会注入 `dist/es` 与 `dist/cjs`，并被 `dist/umd` 继承）。
2. 在 `scripts/build/build-types.mjs` 的顶层默认对象声明中补充对应类型（与 `VERSION`、`tap` 同区域）。
3. 重新构建并检查产物：
   - `pnpm run build`
   - 重点确认：`dist/es/zhiaiwanUtils.default.js`、`dist/cjs/zhiaiwanUtils.js`、`dist/umd/zhiaiwanUtils.js`、`dist/types/zhiaiwanUtils.default.d.ts`
4. 若该方法同时需要作为独立方法导出（例如 `@zhiaiwan/utils/actionFunction`），还需同步：
   - `src/actionFunction.ts`
   - `scripts/meta/method-groups.mjs`
   - `pnpm run sync:exports && pnpm run gen:index`
5. 执行验证：
   - `pnpm run validate:fast`
   - `pnpm run validate:full`

### 提交前推荐顺序

```bash
pnpm run sync:exports
pnpm run gen:index
pnpm run validate:full
pnpm run verify:jsdoc
pnpm run validate:docs
```

## 开发命令

- 推荐验证流程：
  - `pnpm run validate:fast`
  - `pnpm run validate:full`
  - `pnpm run validate:docs`
  - `pnpm run validate:publish`
- 构建与质量校验：
  - `pnpm run build`
  - `pnpm run lint`
  - `pnpm run typecheck`
  - `pnpm run verify:types`
  - `pnpm run verify:artifacts`
  - `pnpm run test:node:smoke`
- 1:1 镜像维护：
  - `pnpm run sync:method-tests`
  - `pnpm run clean:method-tests`
  - `pnpm run verify:method-tests`
  - `pnpm run sync:examples`
  - `pnpm run sync:examples:docs`
  - `pnpm run clean:examples`
  - `pnpm run verify:examples`
- 测试相关：
  - `pnpm run test:src`
  - `pnpm run test:coverage`
  - `pnpm run test:dist`
  - `pnpm run test:run`
- 导出与入口：
  - `pnpm run sync:exports`
  - `pnpm run gen:index`
  - `pnpm run validate:core`
- 文档与发布：
  - `pnpm run docs:build`
  - `pnpm run bench`
  - `pnpm run security:audit`
  - `pnpm run changeset:version`
  - `pnpm run changeset:publish`

### scripts 速查（package.json）

```jsonc
"clean": "rimraf dist .tmp-types", // 清理构建产物与临时类型目录
"gen:index": "node scripts/index/generate-index.mjs", // 生成/刷新 src/index.ts
"check:index": "node scripts/index/generate-index.mjs --check", // 仅检查 index 是否需要重生成
"sync:exports": "node scripts/exports/sync-exports.mjs", // 同步导出映射到 package.json 与生成文件
"check:exports": "node scripts/exports/check-exports.mjs", // 检查 exports 是否与元数据一致
"verify:methods": "node scripts/verify/verify-methods.mjs", // 校验方法元数据与源码一致性
"verify:exports": "node scripts/exports/verify-exports.mjs", // 校验导出映射完整性
"verify:jsdoc": "node scripts/verify/verify-jsdoc.mjs", // 校验公开 API 的 JSDoc 质量
"sync:method-tests": "node scripts/verify/sync-method-tests.mjs", // 按 src 镜像补齐 tests 基线文件
"clean:method-tests": "node scripts/verify/clean-mirror-tests.mjs", // 清理 tests 中多余镜像文件
"verify:method-tests": "node scripts/verify/verify-method-tests.mjs", // 校验 tests 与 src 的 1:1 镜像关系
"sync:examples": "node scripts/verify/sync-mirror-examples.mjs", // 按 src 镜像补齐 examples 基线文件
"sync:examples:docs": "node scripts/verify/sync-examples-from-docs.mjs", // 基于文档同步 examples
"clean:examples": "node scripts/verify/clean-mirror-examples.mjs", // 清理 examples 中多余镜像文件
"verify:examples": "node scripts/verify/verify-mirror-examples.mjs", // 校验 examples 与 src 的 1:1 镜像关系
"verify:artifacts": "node scripts/verify/verify-artifacts.mjs", // 校验 dist 关键产物结构与内容
"build:cjs": "node scripts/build/build-runtime.mjs", // 生成 CJS 运行时产物
"build:es": "tsc -p tsconfig.esm.json && node scripts/build/build-esm.mjs", // 生成 ESM 产物
"build:umd": "node scripts/build/build-browser.mjs", // 生成 UMD 浏览器产物
"build:types": "tsc -p tsconfig.types.json && node scripts/build/build-types.mjs", // 生成 .d.ts 类型产物
"build": "pnpm run clean && pnpm run check:exports && pnpm run verify:methods && pnpm run verify:exports && pnpm run build:es && pnpm run build:cjs && pnpm run build:umd && pnpm run build:types", // 全量构建主流程
"typecheck": "tsc --noEmit", // 仅做 TS 类型检查
"verify:types": "tsc -p tsconfig.type-tests.json --noEmit", // 执行 type-tests 类型契约检查
"test:node:smoke": "node scripts/dev/node-smoke.mjs", // Node 环境冒烟（ESM/CJS 可用性）
"test": "vitest", // Vitest 交互模式
"test:src": "vitest run --exclude \"tests/**/*.dist.test.ts\"", // 运行源码层测试（排除 dist 测试）
"test:internal": "vitest run tests/internal/kernel.test.ts", // 仅运行 internal kernel 测试
"test:coverage:src": "vitest run --coverage --exclude \"tests/**/*.dist.test.ts\"", // 源码层覆盖率测试
"test:coverage:dist": "pnpm run build && pnpm run test:dist", // 构建后执行 dist 测试覆盖链路
"test:coverage": "pnpm run test:coverage:src", // 覆盖率测试快捷入口
"test:dist": "vitest run tests/full-entry.dist.test.ts tests/grouping.dist.test.ts", // 仅运行 dist 入口与分组测试
"test:run": "vitest run", // 一次性运行全部测试
"lint": "biome lint ./src ./tests ./scripts", // 代码风格与静态检查
"fix": "biome check --write ./src ./tests ./scripts", // 自动修复可修复问题
"docs:dev": "vitepress dev docs", // 本地启动文档站
"docs:build": "vitepress build docs", // 构建文档站
"docs:preview": "vitepress preview docs", // 预览构建后的文档站
"bench": "pnpm run build && node scripts/bench/run-bench.mjs", // 构建后执行性能基准
"security:audit": "pnpm audit --prod --audit-level high", // 生产依赖安全审计（high+）
"validate:fast": "pnpm run check:exports && pnpm run check:index && pnpm run lint && pnpm run typecheck && pnpm run verify:types && pnpm run verify:method-tests && pnpm run verify:examples && pnpm run test:src", // 快速验证链路
"validate:full": "pnpm run validate:fast && pnpm run build && pnpm run test:dist && pnpm run verify:artifacts && pnpm run test:node:smoke", // 完整验证链路
"validate:core": "pnpm run validate:full", // 兼容别名（等同 validate:full）
"validate:docs": "pnpm run docs:build", // 文档验证链路
"validate:publish": "pnpm run validate:core && pnpm run verify:jsdoc && pnpm run validate:docs && npm pack --dry-run", // 发布前总门禁
"examples": "pnpm run verify:examples", // 示例镜像与完整性检查入口
"changeset:version": "changeset version", // 根据 changeset 生成版本与 changelog 变更
"changeset:publish": "changeset publish", // 发布 changeset 版本到 npm
"commitlint": "node scripts/dev/commitlint.mjs", // 提交信息规范检查
"prepare": "husky", // 安装/初始化 git hooks
"prepack": "pnpm run build && pnpm run verify:artifacts", // npm pack 前构建并校验产物
"prepublishOnly": "pnpm run verify:types && pnpm run verify:jsdoc && pnpm run test:run && pnpm run test:node:smoke" // npm publish 前最终门禁
```

## 技术栈

- TypeScript
- Lodash
- Vitest
- Rollup
- VitePress
- Biome
- Changesets

## License

MIT
