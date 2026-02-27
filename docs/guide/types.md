# Type Inference Guide

> This page documents the TypeScript inference behavior of `@zhiaiwan/utils` using the same terminology style as the API reference.

## Literal Preservation

### `pick(source, keys)` with literal keys

Creates a picked object while preserving literal key information from `as const` tuples.

#### Since

`+0.1.0`

#### Arguments

1. `source` *(object)*: The source object.
2. `keys` *(readonly (keyof source)[])*: The property names to pick.

#### Returns

*(`Pick<T, K[number]>`)*: Returns an object narrowed to the selected keys.

#### Example

```ts
import { pick } from '@zhiaiwan/utils'

const selected = pick(
  { id: 1, name: 'zw', active: true },
  ['id', 'name'] as const
)
// selected: { id: number; name: string }
```

### `unique(array)` and `difference(array, values)` with literal unions

Preserves literal unions when narrowing array result element types.

#### Since

`+0.1.0`

#### Arguments

1. `array` *(readonly any[])*: The source array.
2. `values` *(readonly any[])*: The values to exclude for `difference`.

#### Returns

*(`Array<T[number]>` / `Array<Exclude<TArray[number], TValueArray[number]>>`)*: Returns arrays with narrowed element unions.

#### Example

```ts
import { difference, unique } from '@zhiaiwan/utils'

const list = unique([1, 1, 2, 3] as const)
// list: Array<1 | 2 | 3>

const filtered = difference([1, 2, 3, 4] as const, [2, 4] as const)
// filtered: Array<1 | 3>
```

---

## Function Composition Inference

### `flowRight(...fns)` right-to-left type flow

Infers the input type from the last function and the output type from the first function in the composed chain.

#### Since

`+0.1.0`

#### Arguments

1. `...fns` *(Function[])*: Functions composed from right to left.

#### Returns

*(`(value: Parameters<Last<Fns>>[0]) => ReturnType<First<Fns>>`)*: Returns a composed function with inferred boundary types.

#### Example

```ts
import { flowRight } from '@zhiaiwan/utils'

const pipeline = flowRight(
  (value: { count: number }) => value.count,
  (value: string) => ({ count: Number(value) }),
  (value: boolean) => (value ? '1' : '0')
)
// pipeline: (value: boolean) => number
```

---

## This And Parameter Inference

### `debounce(fn, wait?)` and `once(fn)` preserve call signatures

Preserves the original function parameter list, return type, and `this` context.

#### Since

`+0.1.0`

#### Arguments

1. `fn` *(Function)*: The function to wrap.
2. `[wait=0]` *(number)*: The delay for `debounce`.

#### Returns

*(`DebouncedFunction<T>` / `T`)*: Returns wrapped functions that preserve `this` and parameter typing.

#### Example

```ts
import { debounce, once } from '@zhiaiwan/utils'

const runLater = debounce(function (this: { base: number }, value: number) {
  return this.base + value
}, 50)

const init = once((value: number) => value + 1)
// init: (value: number) => number
```

### `memoize(fn, resolver?)` infers cache key type

Infers the `Map` key type from `resolver` return type, or falls back to the first argument type.

#### Since

`+0.1.0`

#### Arguments

1. `fn` *(Function)*: The function to memoize.
2. `[resolver]` *(Function)*: Resolves the cache key.

#### Returns

*(`MemoizedFunction<T, TKey>`)*: Returns a memoized function with typed `cache: Map<TKey, ReturnType<T>>`.

#### Example

```ts
import { memoize } from '@zhiaiwan/utils'

const memoized = memoize(
  (a: number, b: number) => a + b,
  (a, b) => `${a}:${b}`
)
// memoized.cache: Map<string, number>
```

---

## Grouped Export Type Consistency

### `array` and `func` keep the same method typing as root and subpath imports

Grouped exports and subpath imports expose equivalent method signatures.

#### Since

`+0.1.0`

#### Arguments

1. `array` *(object)*: Grouped array methods.
2. `func` *(object)*: Grouped function methods.

#### Returns

*(object)*: Returns grouped methods with consistent type behavior across import styles.

#### Example

```ts
import { array } from '@zhiaiwan/utils'
// or: import array from '@zhiaiwan/utils/array'
import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'

const chunks = array.chunk([1, 2, 3, 4], 2)
const runOnce = func.once((value: number) => value + 1)
```

---

## Validation Sources

- Runtime and type assertions are covered in `type-tests/advanced-functions.ts`.
- Full entry typing behavior is covered in `type-tests/full-entry.ts`.
