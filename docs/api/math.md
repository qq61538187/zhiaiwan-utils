# Math

Math category methods for `@zhiaiwan/utils`.

### add(...args)
<a id="add"></a>

Adds two numbers.

Non-numeric inputs are converted with `Number(...)` before calculation.

#### Since

`+0.1.0`

#### Arguments

- `augend`: The first number to add.
- `addend`: The second number to add.

#### Returns

- Returns the sum.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.add(6, 4);
// => 10
```
### ceil(...args)
<a id="ceil"></a>

Rounds `value` up to a given precision.

Precision can be positive (decimal places) or negative (integer places).

#### Since

`+0.1.0`

#### Arguments

- `value`: The number to round up.
- `[precision=0]`: The precision to round to.

#### Returns

- Returns the rounded number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.ceil(4.006);
// => 5

zhiaiwanUtils.ceil(6.004, 2);
// => 6.01

zhiaiwanUtils.ceil(6040, -2);
// => 6100
```
### divide(...args)
<a id="divide"></a>

Divides `dividend` by `divisor`.

Non-numeric inputs are converted with `Number(...)`.

#### Since

`+0.1.0`

#### Arguments

- `dividend`: The number to divide.
- `divisor`: The number to divide by.

#### Returns

- Returns the quotient.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.divide(6, 4);
// => 1.5
```
### floor(...args)
<a id="floor"></a>

Rounds `value` down to a given precision.

Precision can be positive (decimal places) or negative (integer places).

#### Since

`+0.1.0`

#### Arguments

- `value`: The number to round down.
- `[precision=0]`: The precision to round to.

#### Returns

- Returns the rounded number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.floor(4.006);
// => 4

zhiaiwanUtils.floor(0.046, 2);
// => 0.04

zhiaiwanUtils.floor(4060, -2);
// => 4000
```
### max(...args)
<a id="max"></a>

Gets the maximum numeric value from `values`.

Returns `undefined` for an empty input array.

#### Since

`+0.1.0`

#### Arguments

- `values`: The values to inspect.

#### Returns

- Returns the maximum value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.max([4, 2, 8, 6]);
// => 8

zhiaiwanUtils.max([]);
// => undefined
```
### maxBy(...args)
<a id="maxBy"></a>

Gets the element with the maximum computed criterion from `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The array to inspect.
- `iteratee`: The iteratee used to compute ranking values.

#### Returns

- Returns the selected maximum element, or `undefined` when `collection` is empty.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'n': 1 }, { 'n': 2 }];

zhiaiwanUtils.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.maxBy(objects, 'n');
// => { 'n': 2 }
```
### mean(...args)
<a id="mean"></a>

Computes the arithmetic mean of numeric values.

Returns `NaN` when `values` is empty.

#### Since

`+0.1.0`

#### Arguments

- `values`: The values to average.

#### Returns

- Returns the mean.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.mean([4, 2, 8, 6]);
// => 5
```
### meanBy(...args)
<a id="meanBy"></a>

Computes the arithmetic mean of values produced by `iteratee` over `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The array to inspect.
- `iteratee`: The iteratee used to produce numeric values.

#### Returns

- Returns the computed mean, or `NaN` when `collection` is empty.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

zhiaiwanUtils.meanBy(objects, function(o) { return o.n; });
// => 5

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.meanBy(objects, 'n');
// => 5
```
### min(...args)
<a id="min"></a>

Gets the minimum numeric value from `values`.

Returns `undefined` for an empty input array.

#### Since

`+0.1.0`

#### Arguments

- `values`: The values to inspect.

#### Returns

- Returns the minimum value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.min([4, 2, 8, 6]);
// => 2

zhiaiwanUtils.min([]);
// => undefined
```
### minBy(...args)
<a id="minBy"></a>

Gets the element with the minimum computed criterion from `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The array to inspect.
- `iteratee`: The iteratee used to compute ranking values.

#### Returns

- Returns the selected minimum element, or `undefined` when `collection` is empty.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'n': 1 }, { 'n': 2 }];

zhiaiwanUtils.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.minBy(objects, 'n');
// => { 'n': 1 }
```
### multiply(...args)
<a id="multiply"></a>

Multiplies two numbers.

Non-numeric inputs are converted with `Number(...)` before calculation.

#### Since

`+0.1.0`

#### Arguments

- `multiplier`: The first number.
- `multiplicand`: The second number.

#### Returns

- Returns the product.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.multiply(6, 4);
// => 24
```
### round(...args)
<a id="round"></a>

Rounds `value` to a given precision.

Precision can be positive (decimal places) or negative (integer places).

#### Since

`+0.1.0`

#### Arguments

- `value`: The number to round.
- `[precision=0]`: The precision to round to.

#### Returns

- Returns the rounded number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.round(4.006);
// => 4

zhiaiwanUtils.round(4.006, 2);
// => 4.01

zhiaiwanUtils.round(4060, -2);
// => 4100
```
### subtract(...args)
<a id="subtract"></a>

Subtracts `subtrahend` from `minuend`.

Non-numeric inputs are converted with `Number(...)` before calculation.

#### Since

`+0.1.0`

#### Arguments

- `minuend`: The number to subtract from.
- `subtrahend`: The number to subtract.

#### Returns

- Returns the difference.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.subtract(6, 4);
// => 2
```
### sum(...args)
<a id="sum"></a>

Computes the sum of all numeric values in an array.

Each item is converted with `Number(...)` before accumulation.

#### Since

`+0.1.0`

#### Arguments

- `values`: The values to add.

#### Returns

- Returns the total sum.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sum([4, 2, 8, 6]);
// => 20
```
### sumBy(...args)
<a id="sumBy"></a>

Computes the sum of values produced by `iteratee` over `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The array to inspect.
- `iteratee`: The iteratee used to produce numeric values.

#### Returns

- Returns the computed sum.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

zhiaiwanUtils.sumBy(objects, function(o) { return o.n; });
// => 20

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sumBy(objects, 'n');
// => 20
```
