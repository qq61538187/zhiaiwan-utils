import type { AnyFunction } from "./types.js";

/**
 * Creates a function with prepended partial arguments.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to partially apply.
 * @param {...unknown[]} partials The arguments to prepend.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a partially applied wrapper.
 * @example
 *
 * const addOne = partial((a: number, b: number) => a + b, 1)
 * addOne(2)
 * // => 3
 *
 * const fallback = partial((prefix: string, value: string) => prefix + value, "safe:")
 * fallback("")
 * // => "safe:"
 */
export function partial<T extends AnyFunction>(
	fn: T,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...([...partials, ...args] as Parameters<T>)) as ReturnType<T>;
}

export default partial;
