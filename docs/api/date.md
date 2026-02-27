# Date

Date category methods for `@zhiaiwan/utils`.

### now(...args)
<a id="now"></a>

Gets the current Unix timestamp in milliseconds.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the current timestamp.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.defer(function(stamp) {
  console.log(zhiaiwanUtils.now() - stamp);
}, zhiaiwanUtils.now());
// => Logs the number of milliseconds it took for the deferred invocation.
```
