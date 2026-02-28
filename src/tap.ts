/**
 * Invokes an interceptor with `value` and returns the original `value`.
 *
 * @since +0.1.0
 * @category Seq
 * @param {T} value The value to pass through.
 * @param {(value: T) => unknown} interceptor The side-effect interceptor.
 * @returns {T} Returns the same input value.
 * @example
 *
 * tap([1, 2, 3], (arr) => arr.pop())
 * // => [1, 2]
 *
 * const empty = tap([] as number[], () => {})
 * // => []
 */
export function tap<T>(value: T, interceptor: (value: T) => unknown): T {
	interceptor(value);
	return value;
}

export default tap;
