# Function

## Methods

- [`.debounce`](#debounce)
- [`.once`](#once)
- [`.memoize`](#memoize)
- [`.compose`](#compose)

### debounce(fn, wait?)
<a id="debounce"></a>

Creates a debounced function that delays invoking `fn`.

#### Since

`+0.1.0`

#### Arguments

1. `fn` *(Function)*: The function to debounce.
2. `[wait=0]` *(number)*: The number of milliseconds to delay.

#### Returns

*(Function)*: Returns the new debounced function with `cancel()` and `flush()`.

#### Example

```ts
import { debounce } from '@zhiaiwan/utils'

const fn = debounce((value: number) => value * 2, 100)
fn(2)
fn.flush()
// => 4
```

### once(fn)
<a id="once"></a>

Creates a function that is restricted to invoking `fn` once.

#### Since

`+0.1.0`

#### Arguments

1. `fn` *(Function)*: The function to restrict.

#### Returns

*(Function)*: Returns the new restricted function.

#### Example

```ts
import { once } from '@zhiaiwan/utils'

const initialize = once((value: number) => value + 1)
initialize(1)
// => 2
initialize(10)
// => 2
```

### memoize(fn, resolver?)
<a id="memoize"></a>

Creates a function that memoizes the result of `fn`.

#### Since

`+0.1.0`

#### Arguments

1. `fn` *(Function)*: The function to memoize.
2. `[resolver]` *(Function)*: Resolves the cache key from call arguments.

#### Returns

*(Function)*: Returns the new memoized function. The function exposes `cache` as a `Map`.

#### Example

```ts
import { memoize } from '@zhiaiwan/utils'

const cached = memoize(
  (a: number, b: number) => a + b,
  (a, b) => `${a}:${b}`
)

cached(1, 2)
// => 3
cached.cache.get('1:2')
// => 3
```

### compose(...fns)
<a id="compose"></a>

Creates a function that performs right-to-left function composition.

#### Since

`+0.1.0`

#### Arguments

1. `...fns` *(Function[])*: The functions to compose from right to left.

#### Returns

*(Function)*: Returns the composed function. If no function is provided, returns identity.

#### Example

```ts
import { compose } from '@zhiaiwan/utils'

const run = compose(
  (value: number) => value * 2,
  (value: number) => value + 1
)

run(3)
// => 8
```
