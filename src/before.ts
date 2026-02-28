import type { AnyFunction } from "./types.js";

/**
 * Creates a function that invokes `fn` while it is called fewer than `n` times.
 *
 * @since +0.1.0
 * @category Function
 * @param {number} n The maximum call threshold.
 * @param {T} fn The function to restrict.
 * @returns {(...args: Parameters<T>) => ReturnType<T> | undefined} Returns a guarded invoker.
 * @example
 *
 * const run = before(2, (value: number) => value + 1)
 * run(3)
 * // => 4
 *
 * const blocked = before(0, (value: number) => value + 1)
 * blocked(3)
 * // => undefined
 */
export function before<T extends AnyFunction>(
	n: number,
	fn: T,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
	let remaining = Number.isFinite(n) ? Math.trunc(n) : 0;
	let result: ReturnType<T> | undefined;
	let current: T | undefined = fn;
	return function beforeInvoker(
		this: ThisParameterType<T>,
		...args: Parameters<T>
	): ReturnType<T> | undefined {
		if (remaining > 0 && current) {
			remaining -= 1;
			result = current.apply(this, args) as ReturnType<T>;
			if (remaining <= 1) {
				current = undefined;
			}
		}
		return result;
	};
}

export default before;
