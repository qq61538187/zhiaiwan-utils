import type { AnyFunction } from "./types.js";

/**
 * before helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} n Parameter `n`.
 * @param {unknown} fn Parameter `fn`.
 * @returns {(...args: Parameters<T>)} Returns the result.
 * @example
 *
 * const run = before(2, (value: number) => value + 1)
 * run(3)
 * // => 4
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
