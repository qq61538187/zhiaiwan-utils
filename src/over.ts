/**
 * Creates a function that invokes `iteratees` with the arguments it receives.
 *
 * @since +0.1.0
 * @category Util
 * @param {Array<(...args: TArgs) => TResult>} iteratees The iteratees to invoke.
 * @returns {(...args: TArgs) => TResult[]} Returns the new function.
 * @example
 *
 * over([Math.max, Math.min])(1, 2, 3)
 * // => [ 3, 1 ]
 */
export function over<TArgs extends readonly unknown[], TResult>(
	iteratees: ReadonlyArray<(...args: TArgs) => TResult>,
) {
	return (...args: TArgs): TResult[] =>
		iteratees.map((iteratee) => iteratee(...args));
}

export default over;
