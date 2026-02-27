/**
 * thru helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Seq
 * @param {unknown} value Parameter `value`.
 * @param {unknown} interceptor Parameter `interceptor`.
 * @returns {TResult} Returns the result.
 * @example
 *
 * thru([1, 2, 3], (arr) => arr.slice(1))
 * // => [2, 3]
 */
export function thru<T, TResult>(
	value: T,
	interceptor: (value: T) => TResult,
): TResult {
	return interceptor(value);
}

export default thru;
