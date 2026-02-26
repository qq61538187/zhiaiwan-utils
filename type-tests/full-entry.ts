import zhiaiwanUtils, { add, array, math, object } from '@zhiaiwan/utils'
import arrayDefault from '@zhiaiwan/utils/array'
import mathDefault from '@zhiaiwan/utils/math'
import objectDefault from '@zhiaiwan/utils/object'
import func from '@zhiaiwan/utils/func'
import { func as funcNamed } from '@zhiaiwan/utils'

const addResult: number = add(1, 2)
const chunked: number[][] = array.chunk([1, 2, 3, 4], 2)
const chunkedFromDefaultArray: number[][] = arrayDefault.chunk([1, 2, 3, 4], 2)
const pickedFromObject: { id: number } = object.pick({ id: 1, name: 'zw' }, ['id'] as const)
const pickedFromDefaultObject: { name: string } = objectDefault.pick({ id: 1, name: 'zw' }, ['name'] as const)
const addedFromMath: number = math.add(1, 2)
const addedFromDefaultMath: number = mathDefault.add(2, 3)
const onceWrapped = func.once((value: number) => value + 1)
const onceResult: number = onceWrapped(1)
const onceWrappedFromNamed = funcNamed.once((value: number) => value + 1)
const onceResultFromNamed: number = onceWrappedFromNamed(1)

const methods: string[] = zhiaiwanUtils.methods()
const hasAdd: boolean = zhiaiwanUtils.has('add')
const tapped: { value: number } = zhiaiwanUtils.tap({ value: 1 }, (payload) => {
  payload.value += 1
})
const thruResult: string = zhiaiwanUtils.thru(1, (value) => String(value))

const cloned = zhiaiwanUtils.runInContext()
const clonedMethods: string[] = cloned.methods()
const mixed = zhiaiwanUtils.mixin({
  plusOne: (value: number) => value + 1
})
const mixedMethods: string[] = mixed.methods()

const chained = zhiaiwanUtils
  .chain([1, 2, 3, 4])
  .tap((value) => {
    if (!Array.isArray(value)) {
      throw new Error('unexpected chain value')
    }
  })
  .thru((value: unknown) => value)
  .value()
const chainedValue: unknown = chained

// @ts-expect-error add only accepts numbers
add('1', 2)

// @ts-expect-error tap interceptor receives the same input type
zhiaiwanUtils.tap(1, (value: string) => value)

void addResult
void chunked
void chunkedFromDefaultArray
void pickedFromObject
void pickedFromDefaultObject
void addedFromMath
void addedFromDefaultMath
void onceResult
void onceResultFromNamed
void methods
void hasAdd
void tapped
void thruResult
void clonedMethods
void mixedMethods
void chainedValue
