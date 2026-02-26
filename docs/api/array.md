# Array

## Methods

- [`.chunk`](#chunk)
- [`.unique`](#unique)
- [`.difference`](#difference)

### chunk(array, size)
<a id="chunk"></a>

Splits an array into groups the length of `size`.

#### Since

`+0.1.0`

#### Arguments

1. `array` *(readonly any[])*: The array to process.
2. `size` *(number)*: The length of each chunk. Non-integers are truncated.

#### Returns

*(`Array<Array<any>>`)*: Returns the array of chunks. If `size &lt; 1` or invalid, returns `[]`.

#### Example

```ts
import { chunk } from '@zhiaiwan/utils'

chunk([1, 2, 3, 4, 5], 2)
// => [[1, 2], [3, 4], [5]]
```

### unique(array)
<a id="unique"></a>

Creates a duplicate-free version of an array.

#### Since

`+0.1.0`

#### Arguments

1. `array` *(readonly any[])*: The array to inspect.

#### Returns

*(`Array<any>`)*: Returns the new duplicate-free array.

#### Example

```ts
import { unique } from '@zhiaiwan/utils'

unique([1, 1, 2, 3, 3] as const)
// => [1, 2, 3]
```

### difference(array, values)
<a id="difference"></a>

Creates an array of values from `array` not included in `values`.

#### Since

`+0.1.0`

#### Arguments

1. `array` *(readonly any[])*: The source array.
2. `values` *(readonly any[])*: The values to exclude.

#### Returns

*(`Array<any>`)*: Returns the filtered array.

#### Example

```ts
import { difference } from '@zhiaiwan/utils'

difference([1, 2, 3, 4] as const, [2, 4] as const)
// => [1, 3]
```
