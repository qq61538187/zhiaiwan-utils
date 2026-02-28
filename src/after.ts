import type { AnyFunction } from "./types.js";

/**
 * Creates a function that invokes `fn` only after it has been called `n` times.
 *
 * @since +0.1.0
 * @category Function
 * @param {number} n The invocation threshold before `fn` starts executing.
 * @param {T} fn The function to defer.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} Returns a deferred invoker.
 * @example
 *
 * const done = after(1, (value: number) => value * 2)
 * done(3)
 * // => 6
 *
 * const deferred = after(2, (value: number) => value)
 * deferred(1)
 * // => undefined
 */
export function after<T extends AnyFunction>(
	n: number,
	fn: T,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
	let remaining = Number.isFinite(n) ? Math.trunc(n) : 0;
	return function afterInvoker(
		this: ThisParameterType<T>,
		...args: Parameters<T>
	): ReturnType<T> | undefined {
		remaining -= 1;
		if (remaining < 1) {
			return fn.apply(this, args) as ReturnType<T>;
		}
		return undefined;
	};
}

export default after;
