import type { AnyFunction } from "./types.js";

/**
 * unary helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const toNumberOnly = unary((value: string) => Number(value))
 * toNumberOnly("2", "ignored")
 * // => 2
 */
export function unary<T extends AnyFunction>(
	fn: T,
): (...args: unknown[]) => ReturnType<T> {
	return (arg: unknown): ReturnType<T> =>
		fn(arg as Parameters<T>[0]) as ReturnType<T>;
}

export default unary;
