import type { AnyFunction } from "./types.js";

/**
 * Creates a predicate that negates the boolean result of `predicate`.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} predicate The predicate to negate.
 * @returns {(...args: Parameters<T>) => boolean} Returns a negated predicate.
 * @example
 *
 * const isNotEven = negate((n: number) => n % 2 === 0)
 * isNotEven(3)
 * // => true
 *
 * const isDefined = negate((value: unknown) => value == null)
 * isDefined(undefined)
 * // => false
 */
export function negate<T extends AnyFunction>(predicate: T): (...args: Parameters<T>) => boolean {
	return (...args: Parameters<T>) => !predicate(...args);
}

export default negate;
