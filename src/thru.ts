/**
 * Passes `value` to an interceptor and returns the interceptor result.
 *
 * @since +0.1.0
 * @category Seq
 * @param {T} value The value to transform.
 * @param {(value: T) => TResult} interceptor The transformation function.
 * @returns {TResult} Returns the transformed value.
 * @example
 *
 * thru([1, 2, 3], (arr) => arr.slice(1))
 * // => [2, 3]
 *
 * thru(null, (value) => value ?? "safe")
 * // => "safe"
 */
export function thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult {
	return interceptor(value);
}

export default thru;
