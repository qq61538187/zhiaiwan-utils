import type { AnyFunction } from "./types.js";

/**
 * flip helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const flipped = flip((a: string, b: string) => a + b)
 * flipped("A", "B")
 * // => "BA"
 */
export function flip<T extends AnyFunction>(
	fn: T,
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...(args.reverse() as Parameters<T>)) as ReturnType<T>;
}

export default flip;
