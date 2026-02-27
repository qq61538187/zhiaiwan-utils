import type { AnyFunction } from "./types.js";

/**
 * after helper method.
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
 * const done = after(1, (value: number) => value * 2)
 * done(3)
 * // => 6
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
