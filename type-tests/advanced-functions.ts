import addDefault from '@zhiaiwan/utils/add'
import chunkDefault from '@zhiaiwan/utils/chunk'
import { compose, debounce, difference, memoize, once, pick, unique } from '@zhiaiwan/utils'

const picked = pick({ id: 1, name: 'zhiaiwan', active: true }, ['id', 'name'] as const)
const pickedId: number = picked.id
const pickedName: string = picked.name

const composed = compose(
  (value: { count: number }) => value.count,
  (value: string) => ({ count: Number(value) }),
  (value: boolean) => (value ? '1' : '0')
)
const composedResult: number = composed(true)

const composedLong = compose(
  (value: { size: number }) => value.size,
  (value: [number, number]) => ({ size: value[0] + value[1] }),
  (value: string) => [Number(value), 2] as [number, number],
  (value: boolean) => (value ? '1' : '0'),
  (value: Date) => value.getFullYear() > 2000
)
const composedLongResult: number = composedLong(new Date())

const memoizedByArgs = memoize(
  (a: number, b: number) => a + b,
  (a, b) => `${a}:${b}`
)
const memoizedSum: number = memoizedByArgs(1, 2)
const memoizedCachedValue = memoizedByArgs.cache.get('1:2')
const memoizedByArgsCache: Map<string, number> = memoizedByArgs.cache

const memoizedDefaultKey = memoize((value: { id: number }) => value.id)
const memoizedId: number = memoizedDefaultKey({ id: 1 })
const memoizedDefaultCachedValue = memoizedDefaultKey.cache.get({ id: 1 })
const memoizedDefaultCache: Map<{ id: number }, number> = memoizedDefaultKey.cache

const debounced = debounce((value: number) => value + 1, 50)
const debouncedFlushResult: number | undefined = debounced.flush()

const uniqueStatuses = unique(['todo', 'done', 'todo'] as const)
const uniqueStatus: 'todo' | 'done' = uniqueStatuses[0]

const remained = difference(['a', 'b', 'c'] as const, ['b'] as const)
const remainedValue: 'a' | 'c' = remained[0]
// @ts-expect-error value 'b' should be excluded by difference literal types
const excludedValue: 'b' = remained[0]

const chunkedPairs = chunkDefault([1, 2, 3, 4] as const, 2)
const chunkedPairItem: 1 | 2 | 3 | 4 = chunkedPairs[0][0]
const addedBySubpath: number = addDefault(1, 2)

const onceWithThis = once(function (this: { base: number }, plus: number) {
  return this.base + plus
})
const onceResult: number = onceWithThis.call({ base: 2 }, 3)

// @ts-expect-error pick should not expose key not selected
picked.active

// @ts-expect-error compose input type should be boolean
composed('1')

const invalidCompose = compose(
  (value: number) => value + 1,
  (value: string) => value
)
// @ts-expect-error invalid compose should become never and not be callable
invalidCompose('x')

void pickedId
void pickedName
void composedResult
void composedLongResult
void memoizedSum
void memoizedCachedValue
void memoizedByArgsCache
void memoizedId
void memoizedDefaultCachedValue
void memoizedDefaultCache
void debouncedFlushResult
void uniqueStatus
void remainedValue
void excludedValue
void chunkedPairItem
void addedBySubpath
void onceResult
