# Grouped Exports

## Methods

- [`.array`](#array)
- [`.func`](#func)
- [`.object`](#object)
- [`.math`](#math)

### array
<a id="array"></a>

The array method group.

#### Since

`+0.1.0`

#### Returns

*(object)*: `{ chunk, unique, difference }`

#### Example

```ts
import { array } from '@zhiaiwan/utils'
// or: import array from '@zhiaiwan/utils/array'

array.chunk([1, 2, 3, 4], 2)
// => [[1, 2], [3, 4]]
```

### func
<a id="func"></a>

The function method group.

#### Since

`+0.1.0`

#### Returns

*(object)*: `{ debounce, once, memoize, compose }`

#### Example

```ts
import func from '@zhiaiwan/utils/func'
// or: import { func } from '@zhiaiwan/utils'

const runOnce = func.once((value: number) => value + 1)
runOnce(1)
// => 2
```

### object
<a id="object"></a>

The object method group.

#### Since

`+0.1.0`

#### Returns

*(object)*: `{ pick }`

#### Example

```ts
import { object } from '@zhiaiwan/utils'
// or: import object from '@zhiaiwan/utils/object'

object.pick({ id: 1, name: 'zw' }, ['id'] as const)
// => { id: 1 }
```

### math
<a id="math"></a>

The math method group.

#### Since

`+0.1.0`

#### Returns

*(object)*: `{ add }`

#### Example

```ts
import { math } from '@zhiaiwan/utils'
// or: import math from '@zhiaiwan/utils/math'

math.add(1, 2)
// => 3
```
