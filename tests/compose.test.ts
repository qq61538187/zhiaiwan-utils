import { describe, expect, it } from 'vitest'
import { compose } from '../src/compose'

describe('compose', () => {
  it('composes functions from right to left', () => {
    const add1 = (n: number) => n + 1
    const double = (n: number) => n * 2
    const run = compose(double, add1)
    expect(run(3)).toBe(8)
  })

  it('returns identity function when called without arguments', () => {
    const identity = compose()
    expect(identity(3)).toBe(3)
    expect(identity('a')).toBe('a')
  })
})
