# Array

Array category methods for `@zhiaiwan/utils`.

### chunk(...args)
<a id="chunk"></a>

Splits an array into groups the length of `size`.

Non-array inputs or non-finite/less-than-one sizes return an empty array.
Non-integer finite sizes are truncated before chunking.

#### Since

`+0.1.0`

#### Arguments

- `array`: The array to process.
- `size`: The length of each chunk.

#### Returns

- Returns the array of chunks.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

zhiaiwanUtils.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
### compact(...args)
<a id="compact"></a>

Exposes `compact` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `compact`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
### concat(...args)
<a id="concat"></a>

Exposes `concat` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `concat`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [1];
var other = zhiaiwanUtils.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```
### difference(...args)
<a id="difference"></a>

Creates an array of values from `array` not included in `values`.

If `values` is empty, a shallow copy of `array` is returned.

#### Since

`+0.1.0`

#### Arguments

- `array`: The source array.
- `values`: The values to exclude.

#### Returns

- Returns the filtered array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.difference([2, 1], [2, 3]);
// => [1]
```
### differenceBy(...args)
<a id="differenceBy"></a>

Exposes `differenceBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `differenceBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
### differenceWith(...args)
<a id="differenceWith"></a>

Exposes `differenceWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `differenceWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

zhiaiwanUtils.differenceWith(objects, [{ 'x': 1, 'y': 2 }], zhiaiwanUtils.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```
### drop(...args)
<a id="drop"></a>

Exposes `drop` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `drop`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.drop([1, 2, 3]);
// => [2, 3]

zhiaiwanUtils.drop([1, 2, 3], 2);
// => [3]

zhiaiwanUtils.drop([1, 2, 3], 5);
// => []

zhiaiwanUtils.drop([1, 2, 3], 0);
// => [1, 2, 3]
```
### dropRight(...args)
<a id="dropRight"></a>

Exposes `dropRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `dropRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.dropRight([1, 2, 3]);
// => [1, 2]

zhiaiwanUtils.dropRight([1, 2, 3], 2);
// => [1]

zhiaiwanUtils.dropRight([1, 2, 3], 5);
// => []

zhiaiwanUtils.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```
### dropRightWhile(...args)
<a id="dropRightWhile"></a>

Exposes `dropRightWhile` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `dropRightWhile`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

zhiaiwanUtils.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```
### dropWhile(...args)
<a id="dropWhile"></a>

Exposes `dropWhile` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `dropWhile`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

zhiaiwanUtils.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```
### fill(...args)
<a id="fill"></a>

Exposes `fill` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `fill`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [1, 2, 3];

zhiaiwanUtils.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

zhiaiwanUtils.fill(Array(3), 2);
// => [2, 2, 2]

zhiaiwanUtils.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
### findIndex(...args)
<a id="findIndex"></a>

Exposes `findIndex` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `findIndex`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

zhiaiwanUtils.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findIndex(users, { 'user': 'fred', 'active': false });
// => 1

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findIndex(users, ['active', false]);
// => 0

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findIndex(users, 'active');
// => 2
```
### findLastIndex(...args)
<a id="findLastIndex"></a>

Exposes `findLastIndex` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `findLastIndex`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

zhiaiwanUtils.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, ['active', false]);
// => 2

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, 'active');
// => 0
```
### first(...args)
<a id="first"></a>

Alias of head. Thin wrapper around method first/head.


Mapped from Lodash: `head`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.first([1, 2, 3]);
// => 1

zhiaiwanUtils.first([]);
// => undefined
```
### flatten(...args)
<a id="flatten"></a>

Flattens `array` a single level deep.

Only one nesting level is flattened, matching method `flatten`.

#### Since

`+0.1.0`

#### Arguments

- `array`: The array to flatten.

#### Returns

- Returns the new flattened array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```
### flattenDeep(...args)
<a id="flattenDeep"></a>

Recursively flattens `array`.

Nested arrays are flattened until no nested array remains.

#### Since

`+0.1.0`

#### Arguments

- `array`: The array to flatten.

#### Returns

- Returns the new flattened array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```
### flattenDepth(...args)
<a id="flattenDepth"></a>

Exposes `flattenDepth` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `flattenDepth`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [1, [2, [3, [4]], 5]];

zhiaiwanUtils.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

zhiaiwanUtils.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```
### fromPairs(...args)
<a id="fromPairs"></a>

Exposes `fromPairs` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `fromPairs`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
```
### head(...args)
<a id="head"></a>

Exposes `head` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `head`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.head([1, 2, 3]);
// => 1

zhiaiwanUtils.head([]);
// => undefined
```
### indexOf(...args)
<a id="indexOf"></a>

Exposes `indexOf` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `indexOf`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
zhiaiwanUtils.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```
### initial(...args)
<a id="initial"></a>

Exposes `initial` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `initial`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.initial([1, 2, 3]);
// => [1, 2]
```
### intersection(...args)
<a id="intersection"></a>

Creates an array of unique values included in all given arrays.

The order of result values follows the first array.

#### Since

`+0.1.0`

#### Arguments

- `arrays`: The arrays to inspect.

#### Returns

- Returns the new array of intersecting values.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.intersection([2, 1], [2, 3]);
// => [2]
```
### intersectionBy(...args)
<a id="intersectionBy"></a>

Exposes `intersectionBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `intersectionBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```
### intersectionWith(...args)
<a id="intersectionWith"></a>

Exposes `intersectionWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `intersectionWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

zhiaiwanUtils.intersectionWith(objects, others, zhiaiwanUtils.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```
### join(...args)
<a id="join"></a>

Exposes `join` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `join`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```
### last(...args)
<a id="last"></a>

Exposes `last` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `last`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.last([1, 2, 3]);
// => 3
```
### lastIndexOf(...args)
<a id="lastIndexOf"></a>

Exposes `lastIndexOf` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `lastIndexOf`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
zhiaiwanUtils.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```
### nth(...args)
<a id="nth"></a>

Exposes `nth` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `nth`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = ['a', 'b', 'c', 'd'];

zhiaiwanUtils.nth(array, 1);
// => 'b'

zhiaiwanUtils.nth(array, -2);
// => 'c';
```
### pull(...args)
<a id="pull"></a>

Exposes `pull` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pull`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

zhiaiwanUtils.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```
### pullAll(...args)
<a id="pullAll"></a>

Exposes `pullAll` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pullAll`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = ['a', 'b', 'c', 'a', 'b', 'c'];

zhiaiwanUtils.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']
```
### pullAllBy(...args)
<a id="pullAllBy"></a>

Exposes `pullAllBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pullAllBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];

zhiaiwanUtils.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```
### pullAllWith(...args)
<a id="pullAllWith"></a>

Exposes `pullAllWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pullAllWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];

zhiaiwanUtils.pullAllWith(array, [{ 'x': 3, 'y': 4 }], zhiaiwanUtils.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```
### pullAt(...args)
<a id="pullAt"></a>

Exposes `pullAt` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pullAt`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = ['a', 'b', 'c', 'd'];
var pulled = zhiaiwanUtils.pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']
```
### remove(...args)
<a id="remove"></a>

Exposes `remove` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `remove`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [1, 2, 3, 4];
var evens = zhiaiwanUtils.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```
### reverse(...args)
<a id="reverse"></a>

Exposes `reverse` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `reverse`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [1, 2, 3];

zhiaiwanUtils.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```
### slice(...args)
<a id="slice"></a>

Exposes `slice` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `slice`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.slice([1, 2, 3], 1, 2);
// => [2]
```

### sortedIndex(...args)
<a id="sortedIndex"></a>

Exposes `sortedIndex` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedIndex`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedIndex([30, 50], 40);
// => 1
```
### sortedIndexBy(...args)
<a id="sortedIndexBy"></a>

Exposes `sortedIndexBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedIndexBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 4 }, { 'x': 5 }];

zhiaiwanUtils.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0
```
### sortedIndexOf(...args)
<a id="sortedIndexOf"></a>

Exposes `sortedIndexOf` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedIndexOf`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
```
### sortedLastIndex(...args)
<a id="sortedLastIndex"></a>

Exposes `sortedLastIndex` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedLastIndex`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
```
### sortedLastIndexBy(...args)
<a id="sortedLastIndexBy"></a>

Exposes `sortedLastIndexBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedLastIndexBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 4 }, { 'x': 5 }];

zhiaiwanUtils.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 1

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
// => 1
```
### sortedLastIndexOf(...args)
<a id="sortedLastIndexOf"></a>

Exposes `sortedLastIndexOf` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedLastIndexOf`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3
```
### sortedUniq(...args)
<a id="sortedUniq"></a>

Exposes `sortedUniq` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedUniq`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedUniq([1, 1, 2]);
// => [1, 2]
```
### sortedUniqBy(...args)
<a id="sortedUniqBy"></a>

Exposes `sortedUniqBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `sortedUniqBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```
### tail(...args)
<a id="tail"></a>

Exposes `tail` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `tail`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.tail([1, 2, 3]);
// => [2, 3]
```
### take(...args)
<a id="take"></a>

Exposes `take` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `take`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.take([1, 2, 3]);
// => [1]

zhiaiwanUtils.take([1, 2, 3], 2);
// => [1, 2]

zhiaiwanUtils.take([1, 2, 3], 5);
// => [1, 2, 3]

zhiaiwanUtils.take([1, 2, 3], 0);
// => []
```
### takeRight(...args)
<a id="takeRight"></a>

Exposes `takeRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `takeRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.takeRight([1, 2, 3]);
// => [3]

zhiaiwanUtils.takeRight([1, 2, 3], 2);
// => [2, 3]

zhiaiwanUtils.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

zhiaiwanUtils.takeRight([1, 2, 3], 0);
// => []
```
### takeRightWhile(...args)
<a id="takeRightWhile"></a>

Exposes `takeRightWhile` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `takeRightWhile`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

zhiaiwanUtils.takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, 'active');
// => []
```
### takeWhile(...args)
<a id="takeWhile"></a>

Exposes `takeWhile` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `takeWhile`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

zhiaiwanUtils.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.takeWhile(users, 'active');
// => []
```
### union(...args)
<a id="union"></a>

Creates an array of unique values from all given arrays.

The order of result values follows their first appearance across arrays.

#### Since

`+0.1.0`

#### Arguments

- `arrays`: The arrays to inspect.

#### Returns

- Returns the new union array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.union([2], [1, 2]);
// => [2, 1]
```
### unionBy(...args)
<a id="unionBy"></a>

Exposes `unionBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `unionBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
### unionWith(...args)
<a id="unionWith"></a>

Exposes `unionWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `unionWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

zhiaiwanUtils.unionWith(objects, others, zhiaiwanUtils.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
### unique(...args)
<a id="unique"></a>

Creates a duplicate-free version of an array.

Equality is based on `SameValueZero` semantics from `Set`.


Mapped from Lodash: `uniq`.

#### Since

`+0.1.0`

#### Arguments

- `array`: The array to inspect.

#### Returns

- Returns the new duplicate-free array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.unique([2, 1, 2]);
// => [2, 1]
```
### uniq(...args)
<a id="uniq"></a>

Exposes `uniq` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `uniq`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.uniq([2, 1, 2]);
// => [2, 1]
```
### uniqBy(...args)
<a id="uniqBy"></a>

Exposes `uniqBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `uniqBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```
### uniqWith(...args)
<a id="uniqWith"></a>

Exposes `uniqWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `uniqWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

zhiaiwanUtils.uniqWith(objects, zhiaiwanUtils.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```
### unzip(...args)
<a id="unzip"></a>

Exposes `unzip` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `unzip`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var zipped = zhiaiwanUtils.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

zhiaiwanUtils.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
```
### unzipWith(...args)
<a id="unzipWith"></a>

Exposes `unzipWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `unzipWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var zipped = zhiaiwanUtils.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

zhiaiwanUtils.unzipWith(zipped, zhiaiwanUtils.add);
// => [3, 30, 300]
```
### without(...args)
<a id="without"></a>

Exposes `without` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `without`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.without([2, 1, 2, 3], 1, 2);
// => [3]
```
### xor(...args)
<a id="xor"></a>

Exposes `xor` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `xor`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.xor([2, 1], [2, 3]);
// => [1, 3]
```
### xorBy(...args)
<a id="xorBy"></a>

Exposes `xorBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `xorBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
### xorWith(...args)
<a id="xorWith"></a>

Exposes `xorWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `xorWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

zhiaiwanUtils.xorWith(objects, others, zhiaiwanUtils.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
### zip(...args)
<a id="zip"></a>

Exposes `zip` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `zip`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```
### zipObject(...args)
<a id="zipObject"></a>

Exposes `zipObject` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `zipObject`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
```
### zipObjectDeep(...args)
<a id="zipObjectDeep"></a>

Exposes `zipObjectDeep` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `zipObjectDeep`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```
### zipWith(...args)
<a id="zipWith"></a>

Exposes `zipWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `zipWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
// => [111, 222]
```
