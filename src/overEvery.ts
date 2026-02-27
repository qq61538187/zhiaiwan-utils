/**
 * Creates a function that checks if all `predicates` return truthy.
 *
 * @since +0.1.0
 * @category Util
 * @param {Array<(...args: TArgs) => unknown>} predicates The predicates to check.
 * @returns {(...args: TArgs) => boolean} Returns the new function.
 * @example
 *
 * overEvery([(n) => n > 0, (n) => n < 3])(2)
 * // => true
 */
export function overEvery<TArgs extends readonly unknown[]>(
	predicates: ReadonlyArray<(...args: TArgs) => unknown>,
) {
	return (...args: TArgs): boolean =>
		predicates.every((predicate) => Boolean(predicate(...args)));
}

export default overEvery;
