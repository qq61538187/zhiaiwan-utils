export { add } from './add.js'
export { pick } from './pick.js'
export { debounce } from './debounce.js'
export { chunk } from './chunk.js'
export { unique } from './unique.js'
export { difference } from './difference.js'
export { once } from './once.js'
export { memoize } from './memoize.js'
export { compose } from './compose.js'

import { chunk } from './chunk.js'
import { unique } from './unique.js'
import { difference } from './difference.js'
import { debounce } from './debounce.js'
import { once } from './once.js'
import { memoize } from './memoize.js'
import { compose } from './compose.js'
import { pick } from './pick.js'
import { add } from './add.js'

export const array = Object.freeze({
  chunk,
  unique,
  difference
})

export const func = Object.freeze({
  debounce,
  once,
  memoize,
  compose
})

export const object = Object.freeze({
  pick
})

export const math = Object.freeze({
  add
})

export type { AnyFunction, DebouncedFunction, MemoizedFunction } from './types.js'
