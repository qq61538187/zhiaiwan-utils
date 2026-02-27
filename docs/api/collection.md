# Collection

Collection category methods for `@zhiaiwan/utils`.

### countBy(...args)
<a id="countBy"></a>

Creates an object composed of keys generated from iteratee results.

The corresponding value of each key is the number of times the key is returned.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `iteratee`: The iteratee to transform keys.

#### Returns

- Returns the composed aggregate object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```
### every(...args)
<a id="every"></a>

Checks if `predicate` returns truthy for all elements of `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `[predicate]`: The predicate invoked per iteration.

#### Returns

- Returns `true` if all elements pass, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.every(users, { 'user': 'barney', 'active': false });
// => false

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.every(users, ['active', false]);
// => true

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.every(users, 'active');
// => false
```
### filter(...args)
<a id="filter"></a>

Iterates over elements of `collection`, returning an array of all elements `predicate` returns truthy for.

Supports arrays and plain object collections.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `predicate`: The function invoked per iteration.

#### Returns

- Returns the new filtered array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

zhiaiwanUtils.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.filter(users, ['active', false]);
// => objects for ['fred']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.filter(users, 'active');
// => objects for ['barney']

// Combining several predicates using `zhiaiwanUtils.overEvery` or `zhiaiwanUtils.overSome`.
zhiaiwanUtils.filter(users, zhiaiwanUtils.overSome([{ 'age': 36 }, ['age', 40]]));
// => objects for ['fred', 'barney']
```
### find(...args)
<a id="find"></a>

Exposes `find` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `find`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

zhiaiwanUtils.find(users, function(o) { return o.age < 40; });
// => object for 'barney'

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.find(users, ['active', false]);
// => object for 'fred'

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.find(users, 'active');
// => object for 'barney'
```
### findLast(...args)
<a id="findLast"></a>

Exposes `findLast` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `findLast`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```
### flatMap(...args)
<a id="flatMap"></a>

Exposes `flatMap` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `flatMap`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function duplicate(n) {
  return [n, n];
}

zhiaiwanUtils.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```
### flatMapDeep(...args)
<a id="flatMapDeep"></a>

Exposes `flatMapDeep` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `flatMapDeep`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function duplicate(n) {
  return [[[n, n]]];
}

zhiaiwanUtils.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```
### flatMapDepth(...args)
<a id="flatMapDepth"></a>

Exposes `flatMapDepth` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `flatMapDepth`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function duplicate(n) {
  return [[[n, n]]];
}

zhiaiwanUtils.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```
### forEach(...args)
<a id="forEach"></a>

Exposes `forEach` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forEach`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

zhiaiwanUtils.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
### forEachRight(...args)
<a id="forEachRight"></a>

Exposes `forEachRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forEachRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.
```
### groupBy(...args)
<a id="groupBy"></a>

Creates an object composed of keys generated from the results of running each element of `collection` through `iteratee`.

The corresponding value of each key is an array of elements responsible for generating the key.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `iteratee`: The iteratee to transform keys.

#### Returns

- Returns the composed aggregate object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```
### includes(...args)
<a id="includes"></a>

Checks if `value` is in `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to inspect.
- `value`: The value to search for.
- `[fromIndex=0]`: The index to search from.

#### Returns

- Returns `true` if `value` is found, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.includes([1, 2, 3], 1);
// => true

zhiaiwanUtils.includes([1, 2, 3], 1, 2);
// => false

zhiaiwanUtils.includes({ 'a': 1, 'b': 2 }, 1);
// => true

zhiaiwanUtils.includes('abcd', 'bc');
// => true
```
### invokeMap(...args)
<a id="invokeMap"></a>

Exposes `invokeMap` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `invokeMap`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

zhiaiwanUtils.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```
### keyBy(...args)
<a id="keyBy"></a>

Creates an object composed of keys generated from the results of running each element of `collection` through `iteratee`.

The corresponding value of each key is the last element responsible for generating the key.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `iteratee`: The iteratee to transform keys.

#### Returns

- Returns the composed object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

zhiaiwanUtils.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

zhiaiwanUtils.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```
### map(...args)
<a id="map"></a>

Creates an array of values by running each element in `collection` through `iteratee`.

Supports arrays and plain object collections.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `iteratee`: The iteratee invoked per element.

#### Returns

- Returns the new mapped array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function square(n) {
  return n * n;
}

zhiaiwanUtils.map([4, 8], square);
// => [16, 64]

zhiaiwanUtils.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.map(users, 'user');
// => ['barney', 'fred']
```
### orderBy(...args)
<a id="orderBy"></a>

Exposes `orderBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `orderBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
zhiaiwanUtils.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```
### partition(...args)
<a id="partition"></a>

Exposes `partition` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `partition`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];

zhiaiwanUtils.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```
### reduce(...args)
<a id="reduce"></a>

Reduces `collection` to a value which is the accumulated result of running each element through `iteratee`.

Supports arrays and plain object collections.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `iteratee`: The function invoked per iteration.
- `[accumulator]`: The initial accumulator value.

#### Returns

- Returns the accumulated value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3

zhiaiwanUtils.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```
### reduceRight(...args)
<a id="reduceRight"></a>

Exposes `reduceRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `reduceRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [[0, 1], [2, 3], [4, 5]];

zhiaiwanUtils.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```
### reject(...args)
<a id="reject"></a>

Exposes `reject` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `reject`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];

zhiaiwanUtils.reject(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.reject(users, ['active', false]);
// => objects for ['fred']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.reject(users, 'active');
// => objects for ['barney']
```
### sample(...args)
<a id="sample"></a>

Exposes `sample` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sample`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sample([1, 2, 3, 4]);
// => 2
```
### sampleSize(...args)
<a id="sampleSize"></a>

Exposes `sampleSize` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sampleSize`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sampleSize([1, 2, 3], 2);
// => [3, 1]

zhiaiwanUtils.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```
### shuffle(...args)
<a id="shuffle"></a>

Exposes `shuffle` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `shuffle`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```
### size(...args)
<a id="size"></a>

Gets the size of `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to inspect.

#### Returns

- Returns the collection size.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.size([1, 2, 3]);
// => 3

zhiaiwanUtils.size({ 'a': 1, 'b': 2 });
// => 2

zhiaiwanUtils.size('pebbles');
// => 7
```
### some(...args)
<a id="some"></a>

Checks if `predicate` returns truthy for any element of `collection`.

#### Since

`+0.1.0`

#### Arguments

- `collection`: The collection to iterate over.
- `[predicate]`: The predicate invoked per iteration.

#### Returns

- Returns `true` if any element passes, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.some([null, 0, 'yes', false], Boolean);
// => true

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.some(users, { 'user': 'barney', 'active': false });
// => false

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.some(users, ['active', false]);
// => true

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.some(users, 'active');
// => true
```
### sortBy(...args)
<a id="sortBy"></a>

Exposes `sortBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 30 },
  { 'user': 'barney', 'age': 34 }
];

zhiaiwanUtils.sortBy(users, [function(o) { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]

zhiaiwanUtils.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
```
### each(...args)
<a id="each"></a>

Alias of forEach. Thin wrapper around method each/forEach.


Mapped from Lodash: `forEach`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.each([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

zhiaiwanUtils.each({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
### eachRight(...args)
<a id="eachRight"></a>

Alias of forEachRight. Thin wrapper around method eachRight/forEachRight.


Mapped from Lodash: `forEachRight`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.eachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.
```
