# Object

Object category methods for `@zhiaiwan/utils`.

### assign(...args)
<a id="assign"></a>

Assigns own enumerable string keyed properties of source objects to `object`.

Source objects are applied from left to right. This method mutates `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The destination object.
- `sources`: The source objects.

#### Returns

- Returns `object`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

zhiaiwanUtils.assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }
```
### assignIn(...args)
<a id="assignIn"></a>

Exposes `assignIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `assignIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

zhiaiwanUtils.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
```
### assignInWith(...args)
<a id="assignInWith"></a>

Exposes `assignInWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `assignInWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(objValue, srcValue) {
  return zhiaiwanUtils.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = zhiaiwanUtils.partialRight(zhiaiwanUtils.assignInWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
### assignWith(...args)
<a id="assignWith"></a>

Exposes `assignWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `assignWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(objValue, srcValue) {
  return zhiaiwanUtils.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = zhiaiwanUtils.partialRight(zhiaiwanUtils.assignWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
### at(...args)
<a id="at"></a>

Creates an array of values corresponding to `paths` of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to iterate over.
- `paths`: The property paths to pick.

#### Returns

- Returns the picked values.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

zhiaiwanUtils.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```
### create(...args)
<a id="create"></a>

Exposes `create` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `create`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Shape() {
  this.x = 0;
  this.y = 0;
}

function Circle() {
  Shape.call(this);
}

Circle.prototype = zhiaiwanUtils.create(Shape.prototype, {
  'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true
```
### defaults(...args)
<a id="defaults"></a>

Assigns own enumerable string keyed properties of source objects for all destination
properties that resolve to `undefined`.

Source objects are applied from left to right. This method mutates `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The destination object.
- `sources`: The source objects.

#### Returns

- Returns `object`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
### defaultsDeep(...args)
<a id="defaultsDeep"></a>

Exposes `defaultsDeep` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `defaultsDeep`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
```
### entries(...args)
<a id="entries"></a>

Creates an array of own enumerable string-keyed `[key, value]` pairs.

This method is an alias of `toPairs`.


Mapped from Lodash: `toPairs`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `entries`.

#### Returns

- Returns the key-value pairs array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.entries(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```
### entriesIn(...args)
<a id="entriesIn"></a>

Creates an array of own and inherited enumerable string-keyed `[key, value]` pairs.

This method is an alias of `toPairsIn`.


Mapped from Lodash: `toPairsIn`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `entriesIn`.

#### Returns

- Returns the key-value pairs array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.entriesIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
```
### extend(...args)
<a id="extend"></a>

Assigns own and inherited enumerable properties of source objects to `object`.

This method is an alias of `assignIn`.


Mapped from Lodash: `assignIn`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `extend`.

#### Returns

- Returns the destination object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

zhiaiwanUtils.extend({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
```
### extendWith(...args)
<a id="extendWith"></a>

Like `extend`, but accepts a customizer function.

This method is an alias of `assignInWith`.


Mapped from Lodash: `assignInWith`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `extendWith`.

#### Returns

- Returns the destination object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(objValue, srcValue) {
  return zhiaiwanUtils.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = zhiaiwanUtils.partialRight(zhiaiwanUtils.extendWith, customizer);

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```
### findKey(...args)
<a id="findKey"></a>

Iterates over own enumerable string keyed properties of an object and returns the first key
`predicate` returns truthy for.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to inspect.
- `[predicate]`: The function invoked per iteration.

#### Returns

- Returns the matched key, else `undefined`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

zhiaiwanUtils.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findKey(users, ['active', false]);
// => 'fred'

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findKey(users, 'active');
// => 'barney'
```
### findLastKey(...args)
<a id="findLastKey"></a>

Exposes `findLastKey` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `findLastKey`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

zhiaiwanUtils.findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming `zhiaiwanUtils.findKey` returns 'barney'

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, ['active', false]);
// => 'fred'

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, 'active');
// => 'pebbles'
```
### forIn(...args)
<a id="forIn"></a>

Exposes `forIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
```
### forInRight(...args)
<a id="forInRight"></a>

Exposes `forInRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forInRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'c', 'b', then 'a' assuming `zhiaiwanUtils.forIn` logs 'a', 'b', then 'c'.
```
### forOwn(...args)
<a id="forOwn"></a>

Exposes `forOwn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forOwn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```
### forOwnRight(...args)
<a id="forOwnRight"></a>

Exposes `forOwnRight` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `forOwnRight`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'b' then 'a' assuming `zhiaiwanUtils.forOwn` logs 'a' then 'b'.
```
### functions(...args)
<a id="functions"></a>

Exposes `functions` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `functions`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = zhiaiwanUtils.constant('a');
  this.b = zhiaiwanUtils.constant('b');
}

Foo.prototype.c = zhiaiwanUtils.constant('c');

zhiaiwanUtils.functions(new Foo);
// => ['a', 'b']
```
### functionsIn(...args)
<a id="functionsIn"></a>

Exposes `functionsIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `functionsIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = zhiaiwanUtils.constant('a');
  this.b = zhiaiwanUtils.constant('b');
}

Foo.prototype.c = zhiaiwanUtils.constant('c');

zhiaiwanUtils.functionsIn(new Foo);
// => ['a', 'b', 'c']
```
### get(...args)
<a id="get"></a>

Gets the value at `path` of `object`.

If the resolved value is `undefined`, the `defaultValue` is returned.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.
- `path`: The path of the property to get.
- `[defaultValue]`: The value returned for `undefined` resolved values.

#### Returns

- Returns the resolved value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': 3 } }] };

zhiaiwanUtils.get(object, 'a[0].b.c');
// => 3

zhiaiwanUtils.get(object, ['a', '0', 'b', 'c']);
// => 3

zhiaiwanUtils.get(object, 'a.b.c', 'default');
// => 'default'
```
### has(...args)
<a id="has"></a>

Checks if `path` is a direct property path of `object`.

This method only checks own properties at each segment.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.
- `path`: The path to check.

#### Returns

- Returns `true` if `path` exists, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': { 'b': 2 } };
var other = zhiaiwanUtils.create({ 'a': zhiaiwanUtils.create({ 'b': 2 }) });

zhiaiwanUtils.has(object, 'a');
// => true

zhiaiwanUtils.has(object, 'a.b');
// => true

zhiaiwanUtils.has(object, ['a', 'b']);
// => true

zhiaiwanUtils.has(other, 'a');
// => false
```
### hasIn(...args)
<a id="hasIn"></a>

Checks if `path` is a direct or inherited property path of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.
- `path`: The path to check.

#### Returns

- Returns `true` if `path` exists, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = zhiaiwanUtils.create({ 'a': zhiaiwanUtils.create({ 'b': 2 }) });

zhiaiwanUtils.hasIn(object, 'a');
// => true

zhiaiwanUtils.hasIn(object, 'a.b');
// => true

zhiaiwanUtils.hasIn(object, ['a', 'b']);
// => true

zhiaiwanUtils.hasIn(object, 'b');
// => false
```
### invert(...args)
<a id="invert"></a>

Creates an object composed of inverted keys and values of `object`.

If `object` contains duplicate values, subsequent values overwrite previous assignments.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to invert.

#### Returns

- Returns the new inverted object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': 2, 'c': 1 };

zhiaiwanUtils.invert(object);
// => { '1': 'c', '2': 'b' }
```
### invertBy(...args)
<a id="invertBy"></a>

Exposes `invertBy` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `invertBy`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': 2, 'c': 1 };

zhiaiwanUtils.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

zhiaiwanUtils.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
```
### invoke(...args)
<a id="invoke"></a>

Exposes `invoke` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `invoke`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };

zhiaiwanUtils.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```
### keys(...args)
<a id="keys"></a>

Creates an array of the own enumerable string keyed property names of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.

#### Returns

- Returns the property names.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)

zhiaiwanUtils.keys('hi');
// => ['0', '1']
```
### keysIn(...args)
<a id="keysIn"></a>

Exposes `keysIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `keysIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
```
### mapKeys(...args)
<a id="mapKeys"></a>

Creates an object with keys generated by running each own enumerable property of `object`
through `iteratee`. The corresponding value is the original property value.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to iterate over.
- `[iteratee]`: The iteratee invoked per property.

#### Returns

- Returns the new mapped object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```
### mapValues(...args)
<a id="mapValues"></a>

Creates an object with the same keys as `object` and values generated by running each own
enumerable property value through `iteratee`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to iterate over.
- `[iteratee]`: The iteratee invoked per property.

#### Returns

- Returns the new mapped object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};

zhiaiwanUtils.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```
### merge(...args)
<a id="merge"></a>

Exposes `merge` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `merge`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

zhiaiwanUtils.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```
### mergeWith(...args)
<a id="mergeWith"></a>

Exposes `mergeWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `mergeWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(objValue, srcValue) {
  if (zhiaiwanUtils.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };

zhiaiwanUtils.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
```
### omit(...args)
<a id="omit"></a>

Creates an object composed of the own and inherited enumerable properties of `object` that are not omitted.

This method supports deep property paths and does not mutate the input object.

#### Since

`+0.1.0`

#### Arguments

- `object`: The source object.
- `paths`: The property paths to omit.

#### Returns

- Returns the new object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': '2', 'c': 3 };

zhiaiwanUtils.omit(object, ['a', 'c']);
// => { 'b': '2' }
```
### omitBy(...args)
<a id="omitBy"></a>

Creates an object composed of the properties `predicate` does not return truthy for.

#### Since

`+0.1.0`

#### Arguments

- `object`: The source object.
- `[predicate]`: The predicate invoked per property.

#### Returns

- Returns the new object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': '2', 'c': 3 };

zhiaiwanUtils.omitBy(object, zhiaiwanUtils.isNumber);
// => { 'b': '2' }
```
### pick(...args)
<a id="pick"></a>

Creates an object composed of the picked object properties.

Unknown keys are ignored and only own enumerable properties are copied.

#### Since

`+0.1.0`

#### Arguments

- `source`: The source object.
- `keys`: The property names to pick.

#### Returns

- Returns the new picked object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': '2', 'c': 3 };

zhiaiwanUtils.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```
### pickBy(...args)
<a id="pickBy"></a>

Creates an object composed of the properties `predicate` returns truthy for.

#### Since

`+0.1.0`

#### Arguments

- `object`: The source object.
- `[predicate]`: The predicate invoked per property.

#### Returns

- Returns the new object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': '2', 'c': 3 };

zhiaiwanUtils.pickBy(object, zhiaiwanUtils.isNumber);
// => { 'a': 1, 'c': 3 }
```
### result(...args)
<a id="result"></a>

Resolves the value at `path` of `object`.

If the resolved value is a function it's invoked with its parent object as `this`.
If the resolved value is `undefined`, `defaultValue` is used and invoked when it's a function.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.
- `path`: The path to resolve.
- `[defaultValue]`: The fallback value.

#### Returns

- Returns the resolved value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c1': 3, 'c2': zhiaiwanUtils.constant(4) } }] };

zhiaiwanUtils.result(object, 'a[0].b.c1');
// => 3

zhiaiwanUtils.result(object, 'a[0].b.c2');
// => 4

zhiaiwanUtils.result(object, 'a[0].b.c3', 'default');
// => 'default'

zhiaiwanUtils.result(object, 'a[0].b.c3', zhiaiwanUtils.constant('default'));
// => 'default'
```
### set(...args)
<a id="set"></a>

Sets the value at `path` of `object`.

Missing path segments are created as arrays or plain objects, based on the next segment.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to modify.
- `path`: The path of the property to set.
- `value`: The value to set.

#### Returns

- Returns `object`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': 3 } }] };

zhiaiwanUtils.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

zhiaiwanUtils.set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```
### setWith(...args)
<a id="setWith"></a>

Exposes `setWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `setWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = {};

zhiaiwanUtils.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }
```
### toPairs(...args)
<a id="toPairs"></a>

Exposes `toPairs` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `toPairs`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```
### toPairsIn(...args)
<a id="toPairsIn"></a>

Exposes `toPairsIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `toPairsIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
```
### transform(...args)
<a id="transform"></a>

Exposes `transform` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `transform`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]

zhiaiwanUtils.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
```
### unset(...args)
<a id="unset"></a>

Removes the property at `path` of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to modify.
- `path`: The path of the property to unset.

#### Returns

- Returns `true` if the property is removed, else `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': 7 } }] };
zhiaiwanUtils.unset(object, 'a[0].b.c');
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };

zhiaiwanUtils.unset(object, ['a', '0', 'b', 'c']);
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };
```
### update(...args)
<a id="update"></a>

Exposes `update` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `update`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': [{ 'b': { 'c': 3 } }] };

zhiaiwanUtils.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9

zhiaiwanUtils.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0
```
### updateWith(...args)
<a id="updateWith"></a>

Exposes `updateWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `updateWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = {};

zhiaiwanUtils.updateWith(object, '[0][1]', zhiaiwanUtils.constant('a'), Object);
// => { '0': { '1': 'a' } }
```
### values(...args)
<a id="values"></a>

Creates an array of the own enumerable string keyed property values of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.

#### Returns

- Returns the property values.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)

zhiaiwanUtils.values('hi');
// => ['h', 'i']
```
### valuesIn(...args)
<a id="valuesIn"></a>

Exposes `valuesIn` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `valuesIn`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.valuesIn(new Foo);
// => [1, 2, 3] (iteration order is not guaranteed)
```
### methods(...args)
<a id="methods"></a>

Gets the function property names of `object`.

This method is an alias of `functions`.


Mapped from Lodash: `functions`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `methods`.

#### Returns

- Returns the method names array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = zhiaiwanUtils.constant('a');
  this.b = zhiaiwanUtils.constant('b');
}

Foo.prototype.c = zhiaiwanUtils.constant('c');

zhiaiwanUtils.methods(new Foo);
// => ['a', 'b']
```
### methodsIn(...args)
<a id="methodsIn"></a>

Gets function property names of `object`, including inherited ones.

This method is an alias of `functionsIn`.


Mapped from Lodash: `functionsIn`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `methodsIn`.

#### Returns

- Returns the method names array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = zhiaiwanUtils.constant('a');
  this.b = zhiaiwanUtils.constant('b');
}

Foo.prototype.c = zhiaiwanUtils.constant('c');

zhiaiwanUtils.methodsIn(new Foo);
// => ['a', 'b', 'c']
```
