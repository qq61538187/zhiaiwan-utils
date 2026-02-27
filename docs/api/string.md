# String

String category methods for `@zhiaiwan/utils`.

### camelCase(...args)
<a id="camelCase"></a>

Converts `string` to camel case.

Word boundaries are detected from separators and transitions between lower/upper letters.

#### Since

`+0.1.0`

#### Arguments

- `input`: The string to convert.

#### Returns

- Returns the camel cased string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.camelCase('Foo Bar');
// => 'fooBar'

zhiaiwanUtils.camelCase('--foo-bar--');
// => 'fooBar'

zhiaiwanUtils.camelCase('__FOO_BAR__');
// => 'fooBar'
```
### capitalize(...args)
<a id="capitalize"></a>

Converts the first character of `string` to upper case and the remaining to lower case.

#### Since

`+0.1.0`

#### Arguments

- `input`: The string to capitalize.

#### Returns

- Returns the capitalized string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.capitalize('FRED');
// => 'Fred'
```
### deburr(...args)
<a id="deburr"></a>

Exposes `deburr` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `deburr`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.deburr('déjà vu');
// => 'deja vu'
```
### endsWith(...args)
<a id="endsWith"></a>

Exposes `endsWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `endsWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.endsWith('abc', 'c');
// => true

zhiaiwanUtils.endsWith('abc', 'b');
// => false

zhiaiwanUtils.endsWith('abc', 'b', 2);
// => true
```
### escape(...args)
<a id="escape"></a>

Converts characters `&`, `<`, `>`, `"`, and `'` in `string` to HTML entities.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `escape`.

#### Returns

- Returns the escaped string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```
### escapeRegExp(...args)
<a id="escapeRegExp"></a>

Exposes `escapeRegExp` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `escapeRegExp`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```
### kebabCase(...args)
<a id="kebabCase"></a>

Converts `string` to kebab case.

#### Since

`+0.1.0`

#### Arguments

- `input`: The string to convert.

#### Returns

- Returns the kebab cased string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.kebabCase('Foo Bar');
// => 'foo-bar'

zhiaiwanUtils.kebabCase('fooBar');
// => 'foo-bar'

zhiaiwanUtils.kebabCase('__FOO_BAR__');
// => 'foo-bar'
```
### lowerCase(...args)
<a id="lowerCase"></a>

Exposes `lowerCase` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `lowerCase`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.lowerCase('--Foo-Bar--');
// => 'foo bar'

zhiaiwanUtils.lowerCase('fooBar');
// => 'foo bar'

zhiaiwanUtils.lowerCase('__FOO_BAR__');
// => 'foo bar'
```
### lowerFirst(...args)
<a id="lowerFirst"></a>

Exposes `lowerFirst` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `lowerFirst`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.lowerFirst('Fred');
// => 'fred'

zhiaiwanUtils.lowerFirst('FRED');
// => 'fRED'
```
### pad(...args)
<a id="pad"></a>

Exposes `pad` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `pad`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.pad('abc', 8);
// => '  abc   '

zhiaiwanUtils.pad('abc', 8, '_-');
// => '_-abc_-_'

zhiaiwanUtils.pad('abc', 3);
// => 'abc'
```
### padEnd(...args)
<a id="padEnd"></a>

Exposes `padEnd` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `padEnd`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.padEnd('abc', 6);
// => 'abc   '

zhiaiwanUtils.padEnd('abc', 6, '_-');
// => 'abc_-_'

zhiaiwanUtils.padEnd('abc', 3);
// => 'abc'
```
### padStart(...args)
<a id="padStart"></a>

Exposes `padStart` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `padStart`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.padStart('abc', 6);
// => '   abc'

zhiaiwanUtils.padStart('abc', 6, '_-');
// => '_-_abc'

zhiaiwanUtils.padStart('abc', 3);
// => 'abc'
```
### parseInt(...args)
<a id="parseInt"></a>

Converts `string` to an integer of the specified radix.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `parseInt`.

#### Returns

- Returns the parsed integer.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.parseInt('08');
// => 8

zhiaiwanUtils.map(['6', '08', '10'], zhiaiwanUtils.parseInt);
// => [6, 8, 10]
```
### repeat(...args)
<a id="repeat"></a>

Exposes `repeat` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `repeat`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.repeat('*', 3);
// => '***'

zhiaiwanUtils.repeat('abc', 2);
// => 'abcabc'

zhiaiwanUtils.repeat('abc', 0);
// => ''
```
### replace(...args)
<a id="replace"></a>

Exposes `replace` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `replace`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'
```
### snakeCase(...args)
<a id="snakeCase"></a>

Converts `string` to snake case.

#### Since

`+0.1.0`

#### Arguments

- `input`: The string to convert.

#### Returns

- Returns the snake cased string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.snakeCase('Foo Bar');
// => 'foo_bar'

zhiaiwanUtils.snakeCase('fooBar');
// => 'foo_bar'

zhiaiwanUtils.snakeCase('--FOO-BAR--');
// => 'foo_bar'
```
### split(...args)
<a id="split"></a>

Exposes `split` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `split`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.split('a-b-c', '-', 2);
// => ['a', 'b']
```
### startCase(...args)
<a id="startCase"></a>

Exposes `startCase` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `startCase`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.startCase('--foo-bar--');
// => 'Foo Bar'

zhiaiwanUtils.startCase('fooBar');
// => 'Foo Bar'

zhiaiwanUtils.startCase('__FOO_BAR__');
// => 'FOO BAR'
```
### startsWith(...args)
<a id="startsWith"></a>

Exposes `startsWith` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `startsWith`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.startsWith('abc', 'a');
// => true

zhiaiwanUtils.startsWith('abc', 'b');
// => false

zhiaiwanUtils.startsWith('abc', 'b', 1);
// => true
```
### template(...args)
<a id="template"></a>

Exposes `template` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `template`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

// Use the "interpolate" delimiter to create a compiled template.
var compiled = zhiaiwanUtils.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values.
var compiled = zhiaiwanUtils.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled = zhiaiwanUtils.template('<% zhiaiwanUtils.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the internal `print` function in "evaluate" delimiters.
var compiled = zhiaiwanUtils.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'

// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiled = zhiaiwanUtils.template('hello ${ user }!');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'

// Use backslashes to treat delimiters as plain text.
var compiled = zhiaiwanUtils.template('<%= "\\<%- value %\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'

// Use the `imports` option to import `jQuery` as `jq`.
var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = zhiaiwanUtils.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the `sourceURL` option to specify a custom sourceURL for the template.
var compiled = zhiaiwanUtils.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.

// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
var compiled = zhiaiwanUtils.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// Use custom template delimiters.
zhiaiwanUtils.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = zhiaiwanUtils.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'

// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
  var JST = {\
    "main": ' + zhiaiwanUtils.template(mainText).source + '\
  };\
');
```
### toLower(...args)
<a id="toLower"></a>

Exposes `toLower` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `toLower`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toLower('--Foo-Bar--');
// => '--foo-bar--'

zhiaiwanUtils.toLower('fooBar');
// => 'foobar'

zhiaiwanUtils.toLower('__FOO_BAR__');
// => '__foo_bar__'
```
### toUpper(...args)
<a id="toUpper"></a>

Exposes `toUpper` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `toUpper`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.toUpper('--foo-bar--');
// => '--FOO-BAR--'

zhiaiwanUtils.toUpper('fooBar');
// => 'FOOBAR'

zhiaiwanUtils.toUpper('__foo_bar__');
// => '__FOO_BAR__'
```
### trim(...args)
<a id="trim"></a>

Removes leading and trailing whitespace or specified characters from `string`.

#### Since

`+0.1.0`

#### Arguments

- `input`: The string to trim.
- `[chars]`: The characters to trim.

#### Returns

- Returns the trimmed string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.trim('  abc  ');
// => 'abc'

zhiaiwanUtils.trim('-_-abc-_-', '_-');
// => 'abc'

zhiaiwanUtils.map(['  foo  ', '  bar  '], zhiaiwanUtils.trim);
// => ['foo', 'bar']
```
### trimEnd(...args)
<a id="trimEnd"></a>

Exposes `trimEnd` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `trimEnd`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.trimEnd('  abc  ');
// => '  abc'

zhiaiwanUtils.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'
```
### trimStart(...args)
<a id="trimStart"></a>

Exposes `trimStart` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `trimStart`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.trimStart('  abc  ');
// => 'abc  '

zhiaiwanUtils.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'
```
### truncate(...args)
<a id="truncate"></a>

Exposes `truncate` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `truncate`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

zhiaiwanUtils.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'

zhiaiwanUtils.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'

zhiaiwanUtils.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'
```
### unescape(...args)
<a id="unescape"></a>

Converts HTML entities in `string` back to characters.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `unescape`.

#### Returns

- Returns the unescaped string.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
```
### upperCase(...args)
<a id="upperCase"></a>

Exposes `upperCase` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `upperCase`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.upperCase('--foo-bar');
// => 'FOO BAR'

zhiaiwanUtils.upperCase('fooBar');
// => 'FOO BAR'

zhiaiwanUtils.upperCase('__foo_bar__');
// => 'FOO BAR'
```
### upperFirst(...args)
<a id="upperFirst"></a>

Exposes `upperFirst` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `upperFirst`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.upperFirst('fred');
// => 'Fred'

zhiaiwanUtils.upperFirst('FRED');
// => 'FRED'
```
### words(...args)
<a id="words"></a>

Exposes `words` as a public API method.

This wrapper forwards all received arguments to the internal implementation.

#### Since

`+0.1.0`

#### Arguments

- `args`: The arguments forwarded to `words`.

#### Returns

- Returns the forwarded result.

#### Example

```ts
import zhiaiwanUtils from '@zhiaiwan/utils'

zhiaiwanUtils.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

zhiaiwanUtils.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
