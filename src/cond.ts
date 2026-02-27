/**
 * Creates a function that invokes the first matching branch in `pairs`.
 *
 * @since +0.1.0
 * @category Util
 * @param {Array<readonly [(...args: TArgs) => boolean, (...args: TArgs) => TResult]>} pairs The predicate-function pairs.
 * @returns {(...args: TArgs) => TResult | undefined} Returns the new composite function.
 * @example
 *
 * cond([[(n) => n > 0, () => "positive"], [() => true, () => "other"]])(1)
 * // => 'positive'
 */
export function cond<TArgs extends readonly unknown[], TResult>(
	pairs: ReadonlyArray<
		readonly [(...args: TArgs) => boolean, (...args: TArgs) => TResult]
	>,
) {
	return (...args: TArgs): TResult | undefined => {
		for (const [predicate, branch] of pairs) {
			if (predicate(...args)) {
				return branch(...args);
			}
		}
		return undefined;
	};
}

export default cond;
