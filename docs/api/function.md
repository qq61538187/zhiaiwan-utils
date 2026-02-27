# Function

Function category methods for `@zhiaiwan/utils`.

### after(...args)
<a id="after"></a>

Applies `after`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `n`: The `n` value consumed by this utility.
- `fn`: The `fn` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var saves = ['profile', 'settings'];

var done = zhiaiwanUtils.after(saves.length, function() {
  console.log('done saving!');
});

zhiaiwanUtils.forEach(saves, function(type) {
  asyncSave({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.
```
### ary(...args)
<a id="ary"></a>

Applies `ary`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `n`: The `n` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.map(['6', '8', '10'], zhiaiwanUtils.ary(parseInt, 1));
// => [6, 8, 10]
```
### before(...args)
<a id="before"></a>

Applies `before`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `n`: The `n` value consumed by this utility.
- `fn`: The `fn` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

jQuery(element).on('click', zhiaiwanUtils.before(5, addContactToList));
// => Allows adding up to 4 contacts to the list.
```
### bind(...args)
<a id="bind"></a>

Applies `bind`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `thisArg`: The `thisArg` value consumed by this utility.
- `partials`: The `partials` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

var bound = zhiaiwanUtils.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// Bound with placeholders.
var bound = zhiaiwanUtils.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```
### bindKey(...args)
<a id="bindKey"></a>

Creates a function that invokes `object[key]` with bound `object` and prepended args.

#### Since

`+0.1.0`

#### Arguments

- `args`: Arguments passed to this method.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = {
  'user': 'fred',
  'greet': function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};

var bound = zhiaiwanUtils.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function(greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// Bound with placeholders.
var bound = zhiaiwanUtils.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```
### curry(...args)
<a id="curry"></a>

Creates a function that accepts arguments until `arity` is reached, then invokes `fn`.

This implementation supports progressive argument application without placeholders.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to curry.
- `[arity=fn.length]`: The arity of `fn`.

#### Returns

- Returns the new curried function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = zhiaiwanUtils.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```
### curryRight(...args)
<a id="curryRight"></a>

Creates a function that accepts arguments until `arity` is reached, then invokes from right.

When enough arguments are collected, the latest `arity` arguments are reversed
before invoking the original function.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to curry from right.
- `arity`: The arity of `fn`.

#### Returns

- Returns the new curried function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = zhiaiwanUtils.curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
```
### debounce(...args)
<a id="debounce"></a>

Creates a debounced function that delays invoking `fn`.

The debounced function exposes `cancel()` and `flush()` for lifecycle control.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to debounce.
- `[wait=0]`: The number of milliseconds to delay.

#### Returns

- Returns the new debounced function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', zhiaiwanUtils.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', zhiaiwanUtils.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = zhiaiwanUtils.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);
// => Debounced function calls are rate-limited by the configured wait/options.
```
### defer(...args)
<a id="defer"></a>

Defers invoking `fn` until the current call stack has cleared.

The callback is scheduled with a minimal timeout.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to defer.
- `args`: Arguments passed to `fn`.

#### Returns

- Returns the timer id.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.
```
### delay(...args)
<a id="delay"></a>

Invokes `fn` after `wait` milliseconds.

Negative wait values are normalized to `0`.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to delay.
- `wait`: The delay in milliseconds.
- `args`: Arguments passed to `fn`.

#### Returns

- Returns the timer id.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.delay(function(text) {
  console.log(text);
}, 1000, 'later');
// => Logs 'later' after one second.
```
### flip(...args)
<a id="flip"></a>

Applies `flip`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var flipped = zhiaiwanUtils.flip(function() {
  return zhiaiwanUtils.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```
### memoize(...args)
<a id="memoize"></a>

Creates a function that memoizes the result of `fn`.

If `resolver` is provided, its return value is used as the cache key.
Otherwise the first argument is used as the cache key.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to memoize.
- `[resolver]`: The resolver to resolve the cache key.

#### Returns

- Returns the new memoized function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = zhiaiwanUtils.memoize(zhiaiwanUtils.values);
values(object);
// => [1, 2]

values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// Replace `zhiaiwanUtils.memoize.Cache`.
zhiaiwanUtils.memoize.Cache = WeakMap;
```
### negate(...args)
<a id="negate"></a>

Applies `negate`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `predicate`: The `predicate` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function isEven(n) {
  return n % 2 == 0;
}

zhiaiwanUtils.filter([1, 2, 3, 4, 5, 6], zhiaiwanUtils.negate(isEven));
// => [1, 3, 5]
```
### once(...args)
<a id="once"></a>

Creates a function that is restricted to invoking `fn` once.

Repeated calls return the result of the first invocation.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to restrict.

#### Returns

- Returns the new restricted function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var initialize = zhiaiwanUtils.once(createApplication);
initialize();
initialize();
// => `createApplication` is invoked once
```
### overArgs(...args)
<a id="overArgs"></a>

Applies `overArgs`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `transforms`: The `transforms` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

var func = zhiaiwanUtils.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]
```
### partial(...args)
<a id="partial"></a>

Applies `partial`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `partials`: The `partials` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var sayHelloTo = zhiaiwanUtils.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
var greetFred = zhiaiwanUtils.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```
### partialRight(...args)
<a id="partialRight"></a>

Applies `partialRight`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `partials`: The `partials` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var greetFred = zhiaiwanUtils.partialRight(greet, 'fred');
greetFred('hi');
// => 'hi fred'

// Partially applied with placeholders.
var sayHelloTo = zhiaiwanUtils.partialRight(greet, 'hello', _);
sayHelloTo('fred');
// => 'hello fred'
```
### rearg(...args)
<a id="rearg"></a>

Applies `rearg`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `indexes`: The `indexes` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var rearged = zhiaiwanUtils.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);

rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
```
### rest(...args)
<a id="rest"></a>

Applies `rest`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `start`: The `start` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var say = zhiaiwanUtils.rest(function(what, names) {
  return what + ' ' + zhiaiwanUtils.initial(names).join(', ') +
    (zhiaiwanUtils.size(names) > 1 ? ', & ' : '') + zhiaiwanUtils.last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```
### spread(...args)
<a id="spread"></a>

Applies `spread`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.
- `start`: The `start` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var say = zhiaiwanUtils.spread(function(who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);

numbers.then(zhiaiwanUtils.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76
```
### throttle(...args)
<a id="throttle"></a>

Creates a throttled function that only invokes `fn` at most once per `wait` milliseconds.

The throttled function exposes `cancel()` and `flush()` for lifecycle control.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The function to throttle.
- `[wait=0]`: The number of milliseconds to throttle invocations to.
- `[options]`: The options object.

#### Returns

- Returns the new throttled function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', zhiaiwanUtils.throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
var throttled = zhiaiwanUtils.throttle(renewToken, 300000, { 'trailing': false });
jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel);
// => Throttled function calls are limited to at most once per wait window.
```
### unary(...args)
<a id="unary"></a>

Applies `unary`-style function wrapping behavior.

#### Since

`+0.1.0`

#### Arguments

- `fn`: The `fn` value consumed by this utility.

#### Returns

- Returns the wrapped function result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.map(['6', '8', '10'], zhiaiwanUtils.unary(parseInt));
// => [6, 8, 10]
```
### wrap(...args)
<a id="wrap"></a>

Creates a function that provides `value` as the first argument to `wrapper`.

Extra runtime arguments are appended after `value`.

#### Since

`+0.1.0`

#### Arguments

- `value`: The wrapped value.
- `wrapper`: The wrapper function.

#### Returns

- Returns the wrapped function.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

var p = zhiaiwanUtils.wrap(zhiaiwanUtils.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```
