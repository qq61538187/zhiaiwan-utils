export const GROUP_METHODS = {
  math: ['add'],
  object: ['pick'],
  array: ['chunk', 'unique', 'difference'],
  func: ['debounce', 'once', 'memoize', 'compose']
}

export const GROUP_EXPORTS = Object.keys(GROUP_METHODS)
export const ROOT_METHODS = GROUP_EXPORTS.flatMap((groupName) => GROUP_METHODS[groupName])

export const MATH_METHODS = GROUP_METHODS.math
export const OBJECT_METHODS = GROUP_METHODS.object
export const ARRAY_METHODS = GROUP_METHODS.array
export const FUNCTION_METHODS = GROUP_METHODS.func
export const FULL_ENTRY_METHOD_NAMES = [...ROOT_METHODS, 'tap', 'thru']
