# Properties

### VERSION
<a id="version"></a>

The current library version string on the full entry object.

#### Since

`+0.1.0`

#### Returns

*(string)*: Returns the current version.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.VERSION
// => '4.17.23'
```

### tap(value, interceptor)
<a id="tap-value-interceptor"></a>

Invokes `interceptor` with `value` and returns `value`.

#### Since

`+0.1.0`

#### Arguments

1. `value` *(any)*: The value to pass through.
2. `interceptor` *(Function)*: The interceptor function.

#### Returns

*(any)*: Returns the original value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.chain([1, 2, 3])
  .tap(function(array) {
    // Mutate input array.
    array.pop();
  })
  .reverse()
  .value();
// => [2, 1]
```

