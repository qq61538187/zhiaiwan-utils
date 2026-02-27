import type { AnyFunction } from "./types.js";

/**
 * partial helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} partials Parameter `partials`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const addOne = partial((a: number, b: number) => a + b, 1)
 * addOne(2)
 * // => 3
 */
export function partial<T extends AnyFunction>(
	fn: T,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...([...partials, ...args] as Parameters<T>)) as ReturnType<T>;
}

export default partial;
