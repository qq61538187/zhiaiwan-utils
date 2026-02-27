# Number

Number category methods for `@zhiaiwan/utils`.

### clamp(...args)
<a id="clamp"></a>

Clamps `value` within the inclusive lower and upper bounds.

If `upper` is omitted, the range becomes `[0, lower]`.
Bounds are normalized when `lower > upper`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The number to clamp.
- `lower`: The lower bound, or upper bound when `upper` is omitted.
- `[upper]`: The upper bound.

#### Returns

- Returns the clamped number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.clamp(-10, -5, 5);
// => -5

zhiaiwanUtils.clamp(10, -5, 5);
// => 5
```
### inRange(...args)
<a id="inRange"></a>

Checks whether `value` is within the half-open range `[start, end)`.

If `end` is omitted, the range becomes `[0, start)`.
Bounds are normalized when `start > end`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The number to check.
- `start`: The range start, or range end when `end` is omitted.
- `[end]`: The range end (exclusive).

#### Returns

- Returns `true` when value is in range.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.inRange(3, 2, 4);
// => true

zhiaiwanUtils.inRange(4, 8);
// => true

zhiaiwanUtils.inRange(4, 2);
// => false

zhiaiwanUtils.inRange(2, 2);
// => false

zhiaiwanUtils.inRange(1.2, 2);
// => true

zhiaiwanUtils.inRange(5.2, 4);
// => false

zhiaiwanUtils.inRange(-3, -2, -6);
// => true
```
### random(...args)
<a id="random"></a>

Produces a random number between `lower` and `upper`.

Returns an integer by default, and a floating-point number when `floating`
is `true` or either bound is non-integer.

#### Since

`+0.1.0`

#### Arguments

- `[lower=0]`: The lower bound.
- `[upper=1]`: The upper bound.
- `[floating]`: Whether to return a floating-point value.

#### Returns

- Returns the random number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.random(0, 5);
// => an integer between 0 and 5

zhiaiwanUtils.random(5);
// => also an integer between 0 and 5

zhiaiwanUtils.random(5, true);
// => a floating-point number between 0 and 5

zhiaiwanUtils.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```
