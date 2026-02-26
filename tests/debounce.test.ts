import { describe, expect, it, vi } from 'vitest'
import { debounce } from '../src/debounce'

describe('debounce', () => {
  it('delays invocation until wait timeout', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const debounced = debounce(fn, 50)

    debounced('a')
    debounced('b')

    expect(fn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(50)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('b')
    vi.useRealTimers()
  })

  it('supports cancel and flush', () => {
    vi.useFakeTimers()
    const fn = vi.fn((value: number) => value * 2)
    const debounced = debounce(fn, 100)

    debounced(2)
    debounced.cancel()
    vi.advanceTimersByTime(100)
    expect(fn).not.toHaveBeenCalled()

    debounced(3)
    const result = debounced.flush()
    expect(fn).toHaveBeenCalledTimes(1)
    expect(result).toBe(6)
    vi.useRealTimers()
  })

  it('returns last result on flush without pending timer', () => {
    vi.useFakeTimers()
    const fn = vi.fn((value: number) => value * 3)
    const debounced = debounce(fn, 10)

    debounced(2)
    expect(debounced.flush()).toBe(6)
    expect(debounced.flush()).toBe(6)
    expect(fn).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  it('preserves this binding when invoked', () => {
    vi.useFakeTimers()
    const fn = vi.fn(function (this: { factor: number }, value: number) {
      return this.factor * value
    })
    const debounced = debounce(fn, 10)
    debounced.call({ factor: 4 }, 2)
    expect(debounced.flush()).toBe(8)
    expect(fn).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })
})
