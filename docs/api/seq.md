# Seq

Seq category methods for `@zhiaiwan/utils`.

### chain(...args)
<a id="chain"></a>

Creates a chain wrapper that enables fluent `tap` and `thru` transformations.

#### Since

`+0.1.0`

#### Arguments

- `value`: The initial wrapped value.

#### Returns

- Returns a chain wrapper with `tap`, `thru`, and `value` accessors.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
// => 'pebbles is 1'
```
### tap(...args)
<a id="tap"></a>

Invokes `interceptor` with `value` and returns the original `value` unchanged.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to pass through.
- `interceptor`: The function invoked for side effects.

#### Returns

- Returns `value`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

_([1, 2, 3])
 .tap(function(array) {
// Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]
```
### thru(...args)
<a id="thru"></a>

Invokes `interceptor` with `value` and returns its transformed result.

#### Since

`+0.1.0`

#### Arguments

- `value`: The input value.
- `interceptor`: The transformer function.

#### Returns

- Returns the result of `interceptor(value)`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']
```
