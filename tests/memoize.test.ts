import { describe, expect, it, vi } from 'vitest'
import { memoize } from '../src/memoize'

describe('memoize', () => {
  it('caches function result by argument', () => {
    const fn = vi.fn((n: number) => n * 10)
    const wrapped = memoize(fn)
    expect(wrapped(2)).toBe(20)
    expect(wrapped(2)).toBe(20)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('supports resolver-based cache key for multiple args', () => {
    const fn = vi.fn((a: number, b: number) => a + b)
    const wrapped = memoize(fn, (a, b) => `${a}:${b}`)
    expect(wrapped(1, 2)).toBe(3)
    expect(wrapped(1, 2)).toBe(3)
    expect(wrapped.cache.get('1:2')).toBe(3)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
