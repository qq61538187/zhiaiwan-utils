# Util

Util category methods for `@zhiaiwan/utils`.

### attempt(...args)
<a id="attempt"></a>

Attempts to invoke `fn`, returning either the result or the caught error.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to attempt.
- `args`: The arguments to invoke `fn` with.

#### Returns

- Returns the function result or error object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

// Avoid throwing errors for invalid selectors.
var elements = zhiaiwanUtils.attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (zhiaiwanUtils.isError(elements)) {
  elements = [];
}
// => elements is either a NodeList (success) or [] (error fallback).
```
### bindAll(...args)
<a id="bindAll"></a>

Binds methods of an object to the object itself.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to bind methods on.
- `methodNames`: The object method names to bind.

#### Returns

- Returns `object`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var view = {
  'label': 'docs',
  'click': function() {
    console.log('clicked ' + this.label);
  }
};

zhiaiwanUtils.bindAll(view, ['click']);
jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.
```
### cond(...args)
<a id="cond"></a>

Creates a function that invokes the first matching branch in `pairs`.

#### Since

`+0.1.0`

#### Arguments

- `pairs`: The predicate-function pairs.

#### Returns

- Returns the new composite function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var func = zhiaiwanUtils.cond([
  [zhiaiwanUtils.matches({ 'a': 1 }),           zhiaiwanUtils.constant('matches A')],
  [zhiaiwanUtils.conforms({ 'b': zhiaiwanUtils.isNumber }), zhiaiwanUtils.constant('matches B')],
  [zhiaiwanUtils.stubTrue,                      zhiaiwanUtils.constant('no match')]
]);

func({ 'a': 1, 'b': 2 });
// => 'matches A'

func({ 'a': 0, 'b': 1 });
// => 'matches B'

func({ 'a': '1', 'b': '2' });
// => 'no match'
```
### conforms(...args)
<a id="conforms"></a>

Creates a function that checks if all predicates in `source` return truthy.

#### Since

`+0.1.0`

#### Arguments

- `source`: The object of property predicates.

#### Returns

- Returns the new spec function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [
  { 'a': 2, 'b': 1 },
  { 'a': 1, 'b': 2 }
];

zhiaiwanUtils.filter(objects, zhiaiwanUtils.conforms({ 'b': function(n) { return n > 1; } }));
// => [{ 'a': 1, 'b': 2 }]
```
### constant(...args)
<a id="constant"></a>

Creates a function that returns `value`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to return from the new function.

#### Returns

- Returns the new constant function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = zhiaiwanUtils.times(2, zhiaiwanUtils.constant({ 'a': 1 }));

console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]

console.log(objects[0] === objects[1]);
// => true
```
### defaultTo(...args)
<a id="defaultTo"></a>

Returns `defaultValue` if `value` is `null`, `undefined`, or `NaN`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to check.
- `defaultValue`: The default value.

#### Returns

- Returns the resolved value.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.defaultTo(1, 10);
// => 1

zhiaiwanUtils.defaultTo(undefined, 10);
// => 10
```
### flow(...args)
<a id="flow"></a>

Creates a function that performs left-to-right function composition.

When no function is provided, an identity function is returned.

#### Since

`+0.1.0`

#### Arguments

- `fns`: The functions to invoke from left to right.

#### Returns

- Returns the composed function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function square(n) {
  return n * n;
}

var addSquare = zhiaiwanUtils.flow([zhiaiwanUtils.add, square]);
addSquare(1, 2);
// => 9
```
### flowRight(...args)
<a id="flowRight"></a>

Creates a function that performs right-to-left function composition.

When no function is provided, an identity function is returned.

#### Since

`+0.1.0`

#### Arguments

- `fns`: The functions to compose from right to left.

#### Returns

- Returns the composed function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function square(n) {
  return n * n;
}

var addSquare = zhiaiwanUtils.flowRight([square, zhiaiwanUtils.add]);
addSquare(1, 2);
// => 9
```
### identity(...args)
<a id="identity"></a>

Returns the first argument it receives.

#### Since

`+0.1.0`

#### Arguments

- `value`: Any value.

#### Returns

- Returns `value`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1 };

console.log(zhiaiwanUtils.identity(object) === object);
// => true
```
### iteratee(...args)
<a id="iteratee"></a>

Converts `func` to a callback function.

Supports function, property path, `[path, value]`, and source object shorthands.

#### Since

`+0.1.0`

#### Arguments

- `[func=identity]`: The value to convert to a callback.

#### Returns

- Returns the callback.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.filter(users, zhiaiwanUtils.iteratee({ 'user': 'barney', 'active': true }));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]

// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.filter(users, zhiaiwanUtils.iteratee(['user', 'fred']));
// => [{ 'user': 'fred', 'age': 40 }]

// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.map(users, zhiaiwanUtils.iteratee('user'));
// => ['barney', 'fred']

// Create custom iteratee shorthands.
zhiaiwanUtils.iteratee = zhiaiwanUtils.wrap(zhiaiwanUtils.iteratee, function(iteratee, func) {
  return !zhiaiwanUtils.isRegExp(func) ? iteratee(func) : function(string) {
    return func.test(string);
  };
});

zhiaiwanUtils.filter(['abc', 'def'], /ef/);
// => ['def']
```
### matches(...args)
<a id="matches"></a>

Creates a function that performs a partial deep comparison with `source`.

#### Since

`+0.1.0`

#### Arguments

- `source`: The object of property values to match.

#### Returns

- Returns the new spec function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];

zhiaiwanUtils.filter(objects, zhiaiwanUtils.matches({ 'a': 4, 'c': 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]

// Checking for several possible values
zhiaiwanUtils.filter(objects, zhiaiwanUtils.overSome([zhiaiwanUtils.matches({ 'a': 1 }), zhiaiwanUtils.matches({ 'a': 4 })]));
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
```
### matchesProperty(...args)
<a id="matchesProperty"></a>

Creates a function that compares the value at `path` with `srcValue`.

#### Since

`+0.1.0`

#### Arguments

- `path`: The path of the property to get.
- `srcValue`: The value to match.

#### Returns

- Returns the new spec function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [
  { 'a': 1, 'b': 2, 'c': 3 },
  { 'a': 4, 'b': 5, 'c': 6 }
];

zhiaiwanUtils.find(objects, zhiaiwanUtils.matchesProperty('a', 4));
// => { 'a': 4, 'b': 5, 'c': 6 }

// Checking for several possible values
zhiaiwanUtils.filter(objects, zhiaiwanUtils.overSome([zhiaiwanUtils.matchesProperty('a', 1), zhiaiwanUtils.matchesProperty('a', 4)]));
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
```
### method(...args)
<a id="method"></a>

Creates a function that invokes the method at `path` of a given object.

#### Since

`+0.1.0`

#### Arguments

- `path`: The path of the method to invoke.
- `args`: The arguments to invoke the method with.

#### Returns

- Returns the new invoker function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [
  { 'a': { 'b': zhiaiwanUtils.constant(2) } },
  { 'a': { 'b': zhiaiwanUtils.constant(1) } }
];

zhiaiwanUtils.map(objects, zhiaiwanUtils.method('a.b'));
// => [2, 1]

zhiaiwanUtils.map(objects, zhiaiwanUtils.method(['a', 'b']));
// => [2, 1]
```
### methodOf(...args)
<a id="methodOf"></a>

Creates a function that invokes the method at a given path of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.
- `args`: The arguments to invoke the method with.

#### Returns

- Returns the new invoker function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = zhiaiwanUtils.times(3, zhiaiwanUtils.constant),
    object = { 'a': array, 'b': array, 'c': array };

zhiaiwanUtils.map(['a[2]', 'c[0]'], zhiaiwanUtils.methodOf(object));
// => [2, 0]

zhiaiwanUtils.map([['a', '2'], ['c', '0']], zhiaiwanUtils.methodOf(object));
// => [2, 0]
```
### mixin(...args)
<a id="mixin"></a>

Adds function properties of `source` to `object`.

If `object` is a function, methods are also added to its prototype.

#### Since

`+0.1.0`

#### Arguments

- `object`: The destination object.
- `source`: The object of functions to add.
- `[options]`: The options object.

#### Returns

- Returns `object`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function vowels(string) {
  return zhiaiwanUtils.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}

zhiaiwanUtils.mixin({ 'vowels': vowels });
zhiaiwanUtils.vowels('fred');
// => ['e']

_('fred').vowels().value();
// => ['e']

zhiaiwanUtils.mixin({ 'vowels': vowels }, { 'chain': false });
_('fred').vowels();
// => ['e']
```
### noConflict(...args)
<a id="noConflict"></a>

Reverts the `_`-style global variable to its previous value.

This method is primarily meaningful in global script/UMD scenarios.

#### Since

`+0.1.0`

#### Arguments

- `[thisArg]`: Optional current utility object passed via `Function.call`.

#### Returns

- Returns the current utility object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var lodash = zhiaiwanUtils.noConflict();
// => Returns the original lodash reference and restores the previous "_" global.
```
### noop(...args)
<a id="noop"></a>

Returns `undefined`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns `undefined`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.times(2, zhiaiwanUtils.noop);
// => [undefined, undefined]
```
### nthArg(...args)
<a id="nthArg"></a>

Creates a function that gets the argument at index `n`.

If `n` is negative, the nth argument from the end is returned.

#### Since

`+0.1.0`

#### Arguments

- `[n=0]`: The index of the argument to return.

#### Returns

- Returns the new pass-through function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var func = zhiaiwanUtils.nthArg(1);
func('a', 'b', 'c', 'd');
// => 'b'

var func = zhiaiwanUtils.nthArg(-2);
func('a', 'b', 'c', 'd');
// => 'c'
```
### over(...args)
<a id="over"></a>

Creates a function that invokes `iteratees` with the arguments it receives.

#### Since

`+0.1.0`

#### Arguments

- `iteratees`: The iteratees to invoke.

#### Returns

- Returns the new function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var func = zhiaiwanUtils.over([Math.max, Math.min]);

func(1, 2, 3, 4);
// => [4, 1]
```
### overEvery(...args)
<a id="overEvery"></a>

Creates a function that checks if all `predicates` return truthy.

#### Since

`+0.1.0`

#### Arguments

- `predicates`: The predicates to check.

#### Returns

- Returns the new function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var func = zhiaiwanUtils.overEvery([Boolean, isFinite]);

func('1');
// => true

func(null);
// => false

func(NaN);
// => false
```
### overSome(...args)
<a id="overSome"></a>

Creates a function that checks if any `predicates` return truthy.

#### Since

`+0.1.0`

#### Arguments

- `predicates`: The predicates to check.

#### Returns

- Returns the new function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var func = zhiaiwanUtils.overSome([Boolean, isFinite]);

func('1');
// => true

func(null);
// => true

func(NaN);
// => false

var matchesFunc = zhiaiwanUtils.overSome([{ 'a': 1 }, { 'a': 2 }])
var matchesPropertyFunc = zhiaiwanUtils.overSome([['a', 1], ['a', 2]])
```
### property(...args)
<a id="property"></a>

Creates a function that returns the value at `path` of a given object.

#### Since

`+0.1.0`

#### Arguments

- `path`: The path of the property to get.

#### Returns

- Returns the new accessor function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];

zhiaiwanUtils.map(objects, zhiaiwanUtils.property('a.b'));
// => [2, 1]

zhiaiwanUtils.map(zhiaiwanUtils.sortBy(objects, zhiaiwanUtils.property(['a', 'b'])), 'a.b');
// => [1, 2]
```
### propertyOf(...args)
<a id="propertyOf"></a>

Creates a function that returns the value at a given path of `object`.

#### Since

`+0.1.0`

#### Arguments

- `object`: The object to query.

#### Returns

- Returns the new accessor function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var array = [0, 1, 2],
    object = { 'a': array, 'b': array, 'c': array };

zhiaiwanUtils.map(['a[2]', 'c[0]'], zhiaiwanUtils.propertyOf(object));
// => [2, 0]

zhiaiwanUtils.map([['a', '2'], ['c', '0']], zhiaiwanUtils.propertyOf(object));
// => [2, 0]
```
### range(...args)
<a id="range"></a>

Creates an array of numbers progressing from `start` up to, but not including, `end`.

If `end` is omitted, `start` is set to `0` and `end` is set to the first argument.

#### Since

`+0.1.0`

#### Arguments

- `[start=0]`: The start of the range.
- `[end]`: The end of the range.
- `[step=1]`: The value to increment or decrement by.

#### Returns

- Returns the range of numbers.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.range(4);
// => [0, 1, 2, 3]

zhiaiwanUtils.range(-4);
// => [0, -1, -2, -3]

zhiaiwanUtils.range(1, 5);
// => [1, 2, 3, 4]

zhiaiwanUtils.range(0, 20, 5);
// => [0, 5, 10, 15]

zhiaiwanUtils.range(0, -4, -1);
// => [0, -1, -2, -3]

zhiaiwanUtils.range(1, 4, 0);
// => [1, 1, 1]

zhiaiwanUtils.range(0);
// => []
```
### rangeRight(...args)
<a id="rangeRight"></a>

Creates an array of numbers like `range`, but populated in descending order.

#### Since

`+0.1.0`

#### Arguments

- `[start=0]`: The start of the range.
- `[end]`: The end of the range.
- `[step=1]`: The value to increment or decrement by.

#### Returns

- Returns the range of numbers in reverse order.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.rangeRight(4);
// => [3, 2, 1, 0]

zhiaiwanUtils.rangeRight(-4);
// => [-3, -2, -1, 0]

zhiaiwanUtils.rangeRight(1, 5);
// => [4, 3, 2, 1]

zhiaiwanUtils.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

zhiaiwanUtils.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

zhiaiwanUtils.rangeRight(1, 4, 0);
// => [1, 1, 1]

zhiaiwanUtils.rangeRight(0);
// => []
```
### runInContext(...args)
<a id="runInContext"></a>

Creates a new isolated utility object using `context`.

In runtime globals, this helps avoid mutating the primary shared instance.

#### Since

`+0.1.0`

#### Arguments

- `[context=globalThis]`: The context object.

#### Returns

- Returns a new utility object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.mixin({ 'foo': zhiaiwanUtils.constant('foo') });

var lodash = zhiaiwanUtils.runInContext();
lodash.mixin({ 'bar': lodash.constant('bar') });

zhiaiwanUtils.isFunction(zhiaiwanUtils.foo);
// => true
zhiaiwanUtils.isFunction(zhiaiwanUtils.bar);
// => false

lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true

// Create a suped-up `defer` in Node.js.
var defer = zhiaiwanUtils.runInContext({ 'setTimeout': setImmediate }).defer;
```
### stubArray(...args)
<a id="stubArray"></a>

Returns a new empty array.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the new empty array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var arrays = zhiaiwanUtils.times(2, zhiaiwanUtils.stubArray);

console.log(arrays);
// => [[], []]

console.log(arrays[0] === arrays[1]);
// => false
```
### stubFalse(...args)
<a id="stubFalse"></a>

Returns `false`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns `false`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.times(2, zhiaiwanUtils.stubFalse);
// => [false, false]
```
### stubObject(...args)
<a id="stubObject"></a>

Returns a new empty object.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the new empty object.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var objects = zhiaiwanUtils.times(2, zhiaiwanUtils.stubObject);

console.log(objects);
// => [{}, {}]

console.log(objects[0] === objects[1]);
// => false
```
### stubString(...args)
<a id="stubString"></a>

Returns an empty string.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the empty string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.times(2, zhiaiwanUtils.stubString);
// => ['', '']
```
### stubTrue(...args)
<a id="stubTrue"></a>

Returns `true`.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns `true`.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.times(2, zhiaiwanUtils.stubTrue);
// => [true, true]
```
### times(...args)
<a id="times"></a>

Invokes `iteratee` `n` times and returns an array of results.

#### Since

`+0.1.0`

#### Arguments

- `n`: The number of times to invoke `iteratee`.
- `[iteratee]`: The function invoked per iteration.

#### Returns

- Returns the array of results.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.times(3, String);
// => ['0', '1', '2']

 zhiaiwanUtils.times(4, zhiaiwanUtils.constant(0));
// => [0, 0, 0, 0]
```
### toPath(...args)
<a id="toPath"></a>

Converts `value` to a property path array.

String paths support dot notation and bracket notation.

#### Since

`+0.1.0`

#### Arguments

- `value`: The value to convert.

#### Returns

- Returns the new property path array.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toPath('a.b.c');
// => ['a', 'b', 'c']

zhiaiwanUtils.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']
```
### uniqueId(...args)
<a id="uniqueId"></a>

Generates a unique id string.

If `prefix` is provided, the id is appended to it.

#### Since

`+0.1.0`

#### Arguments

- `[prefix='']`: The value to prefix the id with.

#### Returns

- Returns the unique id.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.uniqueId('contact_');
// => 'contact_104'

zhiaiwanUtils.uniqueId();
// => '105'
```
