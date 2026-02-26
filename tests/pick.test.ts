import { describe, expect, it } from 'vitest'
import { pick } from '../src/pick'

describe('pick', () => {
  it('returns selected fields only', () => {
    const source = { id: 1, name: 'zhiaiwan', active: true }
    expect(pick(source, ['id', 'name'])).toEqual({ id: 1, name: 'zhiaiwan' })
  })

  it('ignores unknown keys', () => {
    const source = { id: 1, name: 'zhiaiwan' }
    expect(pick(source, ['id'])).toEqual({ id: 1 })
  })

  it('returns empty object when keys are empty', () => {
    const source = { id: 1, name: 'zhiaiwan' }
    expect(pick(source, [])).toEqual({})
  })

  it('keeps stable result with duplicated keys', () => {
    const source = { id: 1, name: 'zhiaiwan' }
    expect(pick(source, ['id', 'id', 'name'])).toEqual({ id: 1, name: 'zhiaiwan' })
  })
})
