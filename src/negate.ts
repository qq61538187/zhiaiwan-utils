import type { AnyFunction } from "./types.js";

/**
 * negate helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} predicate Parameter `predicate`.
 * @returns {(...args: Parameters<T>)} Returns the result.
 * @example
 *
 * const isNotEven = negate((n: number) => n % 2 === 0)
 * isNotEven(3)
 * // => true
 */
export function negate<T extends AnyFunction>(
	predicate: T,
): (...args: Parameters<T>) => boolean {
	return (...args: Parameters<T>) => !predicate(...args);
}

export default negate;
