import { FULL_ENTRY_METHOD_NAMES, ROOT_METHODS } from './method-groups.mjs'

export const createFullEntryUtilityLines = ({ indent = '  ', noConflictBodyLines = ['return this;'] } = {}) => {
  const i = indent
  const ii = `${indent}  `

  return [
    `${i}methods: function () { return ${JSON.stringify(FULL_ENTRY_METHOD_NAMES)}; },`,
    `${i}has: function (name) { return typeof this[name] === 'function'; },`,
    `${i}tap: function (value, interceptor) { interceptor(value); return value; },`,
    `${i}thru: function (value, interceptor) { return interceptor(value); },`,
    `${i}mixin: function (source) {`,
    `${ii}if (source && typeof source === 'object') {`,
    `${ii}  for (var key in source) {`,
    `${ii}    if (Object.prototype.hasOwnProperty.call(source, key)) {`,
    `${ii}      this[key] = source[key];`,
    `${ii}    }`,
    `${ii}  }`,
    `${ii}}`,
    `${ii}return this;`,
    `${i}},`,
    `${i}runInContext: function () { return Object.assign({}, this); },`,
    `${i}noConflict: function () {`,
    ...noConflictBodyLines.map((line) => `${ii}${line}`),
    `${i}},`,
    `${i}chain: function (input) {`,
    `${ii}var current = input;`,
    `${ii}var self = this;`,
    `${ii}var wrapper = {`,
    `${ii}  value: function () { return current; },`,
    `${ii}  tap: function (interceptor) { interceptor(current); return wrapper; },`,
    `${ii}  thru: function (interceptor) { current = interceptor(current); return wrapper; }`,
    `${ii}};`,
    ...ROOT_METHODS.map(
      (name) =>
        `${ii}wrapper.${name} = function () { current = self.${name}.apply(self, [current].concat(Array.prototype.slice.call(arguments))); return wrapper; };`
    ),
    `${ii}return wrapper;`,
    `${i}}`
  ]
}
