import type { AnyFunction } from "./types.js";

/**
 * ary helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} n Parameter `n`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const takeOne = ary((a: number, b: number) => a + b, 1)
 * takeOne(2, 3)
 * // => 2
 */
export function ary<T extends AnyFunction>(
	fn: T,
	n = fn.length,
): (...args: unknown[]) => ReturnType<T> {
	const cap = Math.max(0, Math.trunc(n));
	return function arityCapped(
		this: ThisParameterType<T>,
		...args: unknown[]
	): ReturnType<T> {
		return fn.apply(this, args.slice(0, cap) as Parameters<T>) as ReturnType<T>;
	};
}

export default ary;
