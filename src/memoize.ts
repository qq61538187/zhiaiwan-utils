import type { AnyFunction, FirstArgument, MemoizedFunction } from "./types.js";

/**
 * Creates a function that memoizes the result of `fn`.
 *
 * If `resolver` is provided, its return value is used as the cache key.
 * Otherwise the first argument is used as the cache key.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to memoize.
 * @param {(this: ThisParameterType<T>, ...args: Parameters<T>) => TKey} [resolver] The resolver to resolve the cache key.
 * @returns {MemoizedFunction<T, TKey>} Returns the new memoized function.
 * @example
 *
 * const cached = memoize(
 *   (a: number, b: number) => a + b,
 *   (a, b) => `${a}:${b}`
 * )
 * cached(1, 2)
 * // => 3
 */
export function memoize<T extends AnyFunction>(
	fn: T,
): MemoizedFunction<T, FirstArgument<T>>;
export function memoize<T extends AnyFunction, TKey>(
	fn: T,
	resolver: (this: ThisParameterType<T>, ...args: Parameters<T>) => TKey,
): MemoizedFunction<T, TKey>;
export function memoize<T extends AnyFunction, TKey = Parameters<T>[0]>(
	fn: T,
	resolver?: (this: ThisParameterType<T>, ...args: Parameters<T>) => TKey,
): MemoizedFunction<T, TKey> {
	const cache = new Map<TKey, ReturnType<T>>();
	const memoized = function (
		this: ThisParameterType<T>,
		...args: Parameters<T>
	) {
		const key = resolver ? resolver.apply(this, args) : (args[0] as TKey);
		if (cache.has(key)) {
			return cache.get(key) as ReturnType<T>;
		}
		const result = fn.apply(this, args) as ReturnType<T>;
		cache.set(key, result);
		return result;
	} as MemoizedFunction<T, TKey>;

	memoized.cache = cache;
	return memoized;
}

export default memoize;
