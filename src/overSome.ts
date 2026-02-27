/**
 * Creates a function that checks if any `predicates` return truthy.
 *
 * @since +0.1.0
 * @category Util
 * @param {Array<(...args: TArgs) => unknown>} predicates The predicates to check.
 * @returns {(...args: TArgs) => boolean} Returns the new function.
 * @example
 *
 * overSome([(n) => n > 5, (n) => n < 3])(2)
 * // => true
 */
export function overSome<TArgs extends readonly unknown[]>(
	predicates: ReadonlyArray<(...args: TArgs) => unknown>,
) {
	return (...args: TArgs): boolean =>
		predicates.some((predicate) => Boolean(predicate(...args)));
}

export default overSome;
