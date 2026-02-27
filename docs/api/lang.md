# Lang

Lang category methods for `@zhiaiwan/utils`.

### castArray(...args)
<a id="castArray"></a>

Provides the public `castArray` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `castArray`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.castArray(1);
// => [1]

zhiaiwanUtils.castArray({ 'a': 1 });
// => [{ 'a': 1 }]

zhiaiwanUtils.castArray('abc');
// => ['abc']

zhiaiwanUtils.castArray(null);
// => [null]

zhiaiwanUtils.castArray(undefined);
// => [undefined]

zhiaiwanUtils.castArray();
// => []

var array = [1, 2, 3];
console.log(zhiaiwanUtils.castArray(array) === array);
// => true
```
### clone(...args)
<a id="clone"></a>

Provides the public `clone` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `clone`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'a': 1 }, { 'b': 2 }];

var shallow = zhiaiwanUtils.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
```
### cloneDeep(...args)
<a id="cloneDeep"></a>

Provides the public `cloneDeep` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `cloneDeep`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = zhiaiwanUtils.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```
### cloneDeepWith(...args)
<a id="cloneDeepWith"></a>

Provides the public `cloneDeepWith` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `cloneDeepWith`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(value) {
  if (zhiaiwanUtils.isElement(value)) {
    return value.cloneNode(true);
  }
}

var el = zhiaiwanUtils.cloneDeepWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20
```
### cloneWith(...args)
<a id="cloneWith"></a>

Provides the public `cloneWith` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `cloneWith`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function customizer(value) {
  if (zhiaiwanUtils.isElement(value)) {
    return value.cloneNode(false);
  }
}

var el = zhiaiwanUtils.cloneWith(document.body, customizer);

console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 0
```
### conformsTo(...args)
<a id="conformsTo"></a>

Provides the public `conformsTo` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `conformsTo`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': 2 };

zhiaiwanUtils.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true

zhiaiwanUtils.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```
### eq(...args)
<a id="eq"></a>

Provides the public `eq` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `eq`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1 };
var other = { 'a': 1 };

zhiaiwanUtils.eq(object, object);
// => true

zhiaiwanUtils.eq(object, other);
// => false

zhiaiwanUtils.eq('a', 'a');
// => true

zhiaiwanUtils.eq('a', Object('a'));
// => false

zhiaiwanUtils.eq(NaN, NaN);
// => true
```
### gt(...args)
<a id="gt"></a>

Provides the public `gt` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `gt`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.gt(3, 1);
// => true

zhiaiwanUtils.gt(3, 3);
// => false

zhiaiwanUtils.gt(1, 3);
// => false
```
### gte(...args)
<a id="gte"></a>

Provides the public `gte` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `gte`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.gte(3, 1);
// => true

zhiaiwanUtils.gte(3, 3);
// => true

zhiaiwanUtils.gte(1, 3);
// => false
```
### isArguments(...args)
<a id="isArguments"></a>

Provides the public `isArguments` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isArguments`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isArguments(function() { return arguments; }());
// => true

zhiaiwanUtils.isArguments([1, 2, 3]);
// => false
```
### isArray(...args)
<a id="isArray"></a>

Provides the public `isArray` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isArray`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isArray([1, 2, 3]);
// => true

zhiaiwanUtils.isArray(document.body.children);
// => false

zhiaiwanUtils.isArray('abc');
// => false

zhiaiwanUtils.isArray(zhiaiwanUtils.noop);
// => false
```
### isArrayBuffer(...args)
<a id="isArrayBuffer"></a>

Provides the public `isArrayBuffer` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isArrayBuffer`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isArrayBuffer(new ArrayBuffer(2));
// => true

zhiaiwanUtils.isArrayBuffer(new Array(2));
// => false
```
### isArrayLike(...args)
<a id="isArrayLike"></a>

Provides the public `isArrayLike` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isArrayLike`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isArrayLike([1, 2, 3]);
// => true

zhiaiwanUtils.isArrayLike(document.body.children);
// => true

zhiaiwanUtils.isArrayLike('abc');
// => true

zhiaiwanUtils.isArrayLike(zhiaiwanUtils.noop);
// => false
```
### isArrayLikeObject(...args)
<a id="isArrayLikeObject"></a>

Provides the public `isArrayLikeObject` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isArrayLikeObject`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isArrayLikeObject([1, 2, 3]);
// => true

zhiaiwanUtils.isArrayLikeObject(document.body.children);
// => true

zhiaiwanUtils.isArrayLikeObject('abc');
// => false

zhiaiwanUtils.isArrayLikeObject(zhiaiwanUtils.noop);
// => false
```
### isBoolean(...args)
<a id="isBoolean"></a>

Provides the public `isBoolean` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isBoolean`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isBoolean(false);
// => true

zhiaiwanUtils.isBoolean(null);
// => false
```
### isBuffer(...args)
<a id="isBuffer"></a>

Provides the public `isBuffer` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isBuffer`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isBuffer(new Buffer(2));
// => true

zhiaiwanUtils.isBuffer(new Uint8Array(2));
// => false
```
### isDate(...args)
<a id="isDate"></a>

Provides the public `isDate` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isDate`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isDate(new Date);
// => true

zhiaiwanUtils.isDate('Mon April 23 2012');
// => false
```
### isElement(...args)
<a id="isElement"></a>

Provides the public `isElement` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isElement`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isElement(document.body);
// => true

zhiaiwanUtils.isElement('<body>');
// => false
```
### isEmpty(...args)
<a id="isEmpty"></a>

Checks if `value` is an empty collection-like value.

Arrays, strings, maps, sets, and plain objects are considered empty when size/length/key count is zero.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.

#### Returns

- Returns `true` if `value` is empty.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isEmpty(null);
// => true

zhiaiwanUtils.isEmpty(true);
// => true

zhiaiwanUtils.isEmpty(1);
// => true

zhiaiwanUtils.isEmpty([1, 2, 3]);
// => false

zhiaiwanUtils.isEmpty({ 'a': 1 });
// => false
```
### isEqual(...args)
<a id="isEqual"></a>

Provides the public `isEqual` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isEqual`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1 };
var other = { 'a': 1 };

zhiaiwanUtils.isEqual(object, other);
// => true

object === other;
// => false
```
### isEqualWith(...args)
<a id="isEqualWith"></a>

Provides the public `isEqualWith` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isEqualWith`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

zhiaiwanUtils.isEqualWith(array, other, customizer);
// => true
```
### isError(...args)
<a id="isError"></a>

Provides the public `isError` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isError`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isError(new Error);
// => true

zhiaiwanUtils.isError(Error);
// => false
```
### isFinite(...args)
<a id="isFinite"></a>

Checks if `value` is a finite primitive number.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isFinite`.

#### Returns

- Returns `true` when value is finite.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isFinite(3);
// => true

zhiaiwanUtils.isFinite(Number.MIN_VALUE);
// => true

zhiaiwanUtils.isFinite(Infinity);
// => false

zhiaiwanUtils.isFinite('3');
// => false
```
### isFunction(...args)
<a id="isFunction"></a>

Provides the public `isFunction` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isFunction`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isFunction(_);
// => true

zhiaiwanUtils.isFunction(/abc/);
// => false
```
### isInteger(...args)
<a id="isInteger"></a>

Provides the public `isInteger` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isInteger`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isInteger(3);
// => true

zhiaiwanUtils.isInteger(Number.MIN_VALUE);
// => false

zhiaiwanUtils.isInteger(Infinity);
// => false

zhiaiwanUtils.isInteger('3');
// => false
```
### isLength(...args)
<a id="isLength"></a>

Provides the public `isLength` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isLength`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isLength(3);
// => true

zhiaiwanUtils.isLength(Number.MIN_VALUE);
// => false

zhiaiwanUtils.isLength(Infinity);
// => false

zhiaiwanUtils.isLength('3');
// => false
```
### isMap(...args)
<a id="isMap"></a>

Provides the public `isMap` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isMap`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isMap(new Map);
// => true

zhiaiwanUtils.isMap(new WeakMap);
// => false
```
### isMatch(...args)
<a id="isMatch"></a>

Provides the public `isMatch` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isMatch`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': 2 };

zhiaiwanUtils.isMatch(object, { 'b': 2 });
// => true

zhiaiwanUtils.isMatch(object, { 'b': 1 });
// => false
```
### isMatchWith(...args)
<a id="isMatchWith"></a>

Provides the public `isMatchWith` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isMatchWith`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = { 'greeting': 'hello' };
var source = { 'greeting': 'hi' };

zhiaiwanUtils.isMatchWith(object, source, customizer);
// => true
```
### isNaN(...args)
<a id="isNaN"></a>

Checks if `value` is `NaN`.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isNaN`.

#### Returns

- Returns `true` when value is `NaN`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isNaN(NaN);
// => true

zhiaiwanUtils.isNaN(new Number(NaN));
// => true

isNaN(undefined);
// => true

zhiaiwanUtils.isNaN(undefined);
// => false
```
### isNative(...args)
<a id="isNative"></a>

Provides the public `isNative` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isNative`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isNative(Array.prototype.push);
// => true

zhiaiwanUtils.isNative(_);
// => false
```
### isNil(...args)
<a id="isNil"></a>

Checks if `value` is `null` or `undefined`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.

#### Returns

- Returns `true` if `value` is nullish.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isNil(null);
// => true

zhiaiwanUtils.isNil(void 0);
// => true

zhiaiwanUtils.isNil(NaN);
// => false
```
### isNull(...args)
<a id="isNull"></a>

Provides the public `isNull` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isNull`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isNull(null);
// => true

zhiaiwanUtils.isNull(void 0);
// => false
```
### isNumber(...args)
<a id="isNumber"></a>

Checks if `value` is classified as a number primitive or `Number` object.

`NaN` and `Infinity` are treated as numbers, matching method behavior.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.

#### Returns

- Returns `true` if `value` is a number.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isNumber(3);
// => true

zhiaiwanUtils.isNumber(Number.MIN_VALUE);
// => true

zhiaiwanUtils.isNumber(Infinity);
// => true

zhiaiwanUtils.isNumber('3');
// => false
```
### isObject(...args)
<a id="isObject"></a>

Provides the public `isObject` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isObject`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isObject({});
// => true

zhiaiwanUtils.isObject([1, 2, 3]);
// => true

zhiaiwanUtils.isObject(zhiaiwanUtils.noop);
// => true

zhiaiwanUtils.isObject(null);
// => false
```
### isObjectLike(...args)
<a id="isObjectLike"></a>

Provides the public `isObjectLike` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isObjectLike`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isObjectLike({});
// => true

zhiaiwanUtils.isObjectLike([1, 2, 3]);
// => true

zhiaiwanUtils.isObjectLike(zhiaiwanUtils.noop);
// => false

zhiaiwanUtils.isObjectLike(null);
// => false
```
### isPlainObject(...args)
<a id="isPlainObject"></a>

Checks if `value` is a plain object.

Objects created by `{}`, `new Object()`, or `Object.create(null)` are considered plain.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.

#### Returns

- Returns `true` if `value` is a plain object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.a = 1;
}

zhiaiwanUtils.isPlainObject(new Foo);
// => false

zhiaiwanUtils.isPlainObject([1, 2, 3]);
// => false

zhiaiwanUtils.isPlainObject({ 'x': 0, 'y': 0 });
// => true

zhiaiwanUtils.isPlainObject(Object.create(null));
// => true
```
### isRegExp(...args)
<a id="isRegExp"></a>

Provides the public `isRegExp` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isRegExp`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isRegExp(/abc/);
// => true

zhiaiwanUtils.isRegExp('/abc/');
// => false
```
### isSafeInteger(...args)
<a id="isSafeInteger"></a>

Provides the public `isSafeInteger` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isSafeInteger`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isSafeInteger(3);
// => true

zhiaiwanUtils.isSafeInteger(Number.MIN_VALUE);
// => false

zhiaiwanUtils.isSafeInteger(Infinity);
// => false

zhiaiwanUtils.isSafeInteger('3');
// => false
```
### isSet(...args)
<a id="isSet"></a>

Provides the public `isSet` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isSet`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isSet(new Set);
// => true

zhiaiwanUtils.isSet(new WeakSet);
// => false
```
### isString(...args)
<a id="isString"></a>

Checks if `value` is classified as a string primitive or `String` object.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.

#### Returns

- Returns `true` if `value` is a string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isString('abc');
// => true

zhiaiwanUtils.isString(1);
// => false
```
### isSymbol(...args)
<a id="isSymbol"></a>

Provides the public `isSymbol` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isSymbol`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isSymbol(Symbol.iterator);
// => true

zhiaiwanUtils.isSymbol('abc');
// => false
```
### isTypedArray(...args)
<a id="isTypedArray"></a>

Provides the public `isTypedArray` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isTypedArray`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isTypedArray(new Uint8Array);
// => true

zhiaiwanUtils.isTypedArray([]);
// => false
```
### isUndefined(...args)
<a id="isUndefined"></a>

Provides the public `isUndefined` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isUndefined`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isUndefined(void 0);
// => true

zhiaiwanUtils.isUndefined(null);
// => false
```
### isWeakMap(...args)
<a id="isWeakMap"></a>

Provides the public `isWeakMap` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isWeakMap`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isWeakMap(new WeakMap);
// => true

zhiaiwanUtils.isWeakMap(new Map);
// => false
```
### isWeakSet(...args)
<a id="isWeakSet"></a>

Provides the public `isWeakSet` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `isWeakSet`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.isWeakSet(new WeakSet);
// => true

zhiaiwanUtils.isWeakSet(new Set);
// => false
```
### lt(...args)
<a id="lt"></a>

Provides the public `lt` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `lt`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.lt(1, 3);
// => true

zhiaiwanUtils.lt(3, 3);
// => false

zhiaiwanUtils.lt(3, 1);
// => false
```
### lte(...args)
<a id="lte"></a>

Provides the public `lte` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `lte`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.lte(1, 3);
// => true

zhiaiwanUtils.lte(3, 3);
// => true

zhiaiwanUtils.lte(3, 1);
// => false
```
### toArray(...args)
<a id="toArray"></a>

Provides the public `toArray` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toArray`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]

zhiaiwanUtils.toArray('abc');
// => ['a', 'b', 'c']

zhiaiwanUtils.toArray(1);
// => []

zhiaiwanUtils.toArray(null);
// => []
```
### toFinite(...args)
<a id="toFinite"></a>

Provides the public `toFinite` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toFinite`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toFinite(3.2);
// => 3.2

zhiaiwanUtils.toFinite(Number.MIN_VALUE);
// => 5e-324

zhiaiwanUtils.toFinite(Infinity);
// => 1.7976931348623157e+308

zhiaiwanUtils.toFinite('3.2');
// => 3.2
```
### toInteger(...args)
<a id="toInteger"></a>

Provides the public `toInteger` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toInteger`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toInteger(3.2);
// => 3

zhiaiwanUtils.toInteger(Number.MIN_VALUE);
// => 0

zhiaiwanUtils.toInteger(Infinity);
// => 1.7976931348623157e+308

zhiaiwanUtils.toInteger('3.2');
// => 3
```
### toLength(...args)
<a id="toLength"></a>

Provides the public `toLength` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toLength`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toLength(3.2);
// => 3

zhiaiwanUtils.toLength(Number.MIN_VALUE);
// => 0

zhiaiwanUtils.toLength(Infinity);
// => 4294967295

zhiaiwanUtils.toLength('3.2');
// => 3
```
### toNumber(...args)
<a id="toNumber"></a>

Provides the public `toNumber` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toNumber`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toNumber(3.2);
// => 3.2

zhiaiwanUtils.toNumber(Number.MIN_VALUE);
// => 5e-324

zhiaiwanUtils.toNumber(Infinity);
// => Infinity

zhiaiwanUtils.toNumber('3.2');
// => 3.2
```
### toPlainObject(...args)
<a id="toPlainObject"></a>

Provides the public `toPlainObject` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toPlainObject`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function Foo() {
  this.b = 2;
}

Foo.prototype.c = 3;

zhiaiwanUtils.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }

zhiaiwanUtils.assign({ 'a': 1 }, zhiaiwanUtils.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
```
### toSafeInteger(...args)
<a id="toSafeInteger"></a>

Provides the public `toSafeInteger` API entry.

It preserves the same runtime behavior as the underlying implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toSafeInteger`.

#### Returns

- Returns the runtime result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toSafeInteger(3.2);
// => 3

zhiaiwanUtils.toSafeInteger(Number.MIN_VALUE);
// => 0

zhiaiwanUtils.toSafeInteger(Infinity);
// => 9007199254740991

zhiaiwanUtils.toSafeInteger('3.2');
// => 3
```
### toString(...args)
<a id="toString"></a>

Converts `value` to a string.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments passed through to `toString`.

#### Returns

- Returns the string result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toString(null);
// => ''

zhiaiwanUtils.toString(-0);
// => '-0'

zhiaiwanUtils.toString([1, 2, 3]);
// => '1,2,3'
```
