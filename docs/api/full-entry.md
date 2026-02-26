# Full Entry

## Methods

- [`.VERSION`](#version)
- [`.methods`](#methods)
- [`.has`](#has-name)
- [`.mixin`](#mixin-source)
- [`.runInContext`](#runincontext)
- [`.noConflict`](#noconflict)
- [`.chain`](#chain-input)
- [`.tap`](#tap-value-interceptor)
- [`.thru`](#thru-value-interceptor)

### VERSION
<a id="version"></a>

The current library version string on the full entry object.

#### Since

`+0.1.0`

#### Returns

*(string)*: Returns the current version.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.VERSION
// => '0.1.0'
```

### methods()
<a id="methods"></a>

Returns available method names in the full entry object.

#### Since

`+0.1.0`

#### Returns

*(string[])*: Returns the method name list.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.methods()
// => ['add', 'pick', 'chunk', ...]
```

### has(name)
<a id="has-name"></a>

Checks whether a function method exists on the full entry object.

#### Since

`+0.1.0`

#### Arguments

1. `name` *(string)*: The method name to check.

#### Returns

*(boolean)*: Returns `true` if the method exists and is callable, else `false`.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.has('compose')
// => true
```

### mixin(source)
<a id="mixin-source"></a>

Adds own enumerable properties from `source` to the full entry object.

#### Since

`+0.1.0`

#### Arguments

1. `source` *(object)*: The object of functions/properties to mix in.

#### Returns

*(object)*: Returns the full entry object.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.mixin({
  double(value: number) {
    return value * 2
  }
})
```

### runInContext()
<a id="runincontext"></a>

Creates a shallow copied utility object from the current full entry object.

#### Since

`+0.1.0`

#### Returns

*(object)*: Returns a cloned utility object.

#### Example

```ts
import utils from '@zhiaiwan/utils'

const isolated = utils.runInContext()
isolated !== utils
// => true
```

### noConflict()
<a id="noconflict"></a>

Restores previous global `zhiaiwanUtils` and returns the current utility object.

#### Since

`+0.1.0`

#### Returns

*(object)*: Returns the utility object.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.noConflict()
// => utils
```

### chain(input)
<a id="chain-input"></a>

Creates a chain wrapper that supports fluent calls and final `value()` extraction.

#### Since

`+0.1.0`

#### Arguments

1. `input` *(any)*: The initial wrapped value.

#### Returns

*(object)*: Returns a chain wrapper with `value`, `tap`, `thru`, and method proxies.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils
  .chain([1, 2, 3, 3])
  .unique()
  .thru((value) => value.slice(0, 2))
  .value()
// => [1, 2]
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
import utils from '@zhiaiwan/utils'

utils.tap({ count: 1 }, (obj) => {
  obj.count += 1
})
// => { count: 2 }
```

### thru(value, interceptor)
<a id="thru-value-interceptor"></a>

Invokes `interceptor` with `value` and returns the interceptor result.

#### Since

`+0.1.0`

#### Arguments

1. `value` *(any)*: The value to transform.
2. `interceptor` *(Function)*: The transform function.

#### Returns

*(any)*: Returns the transformed result.

#### Example

```ts
import utils from '@zhiaiwan/utils'

utils.thru([1, 2, 3], (list) => list.length)
// => 3
```
