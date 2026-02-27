import type { AnyFunction } from "./types.js";

/**
 * bind helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} thisArg Parameter `thisArg`.
 * @param {unknown} partials Parameter `partials`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const bound = bind((prefix: string, value: string) => prefix + value, null, "hi ")
 * bound("there")
 * // => "hi there"
 */
export function bind<T extends AnyFunction>(
	fn: T,
	thisArg: unknown,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn.apply(
			thisArg as ThisParameterType<T>,
			[...partials, ...args] as Parameters<T>,
		) as ReturnType<T>;
}

export default bind;
