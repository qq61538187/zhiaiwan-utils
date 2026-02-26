import { describe, expect, it } from 'vitest'
import { chunk } from '../src/chunk'

describe('chunk', () => {
  it('splits array by size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('returns empty when size is invalid', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([])
  })

  it('normalizes non-integer size and handles empty input', () => {
    expect(chunk([1, 2, 3], 2.9)).toEqual([[1, 2], [3]])
    expect(chunk([], 2)).toEqual([])
    expect(chunk([1, 2, 3], -1)).toEqual([])
  })
})
