/**
 * tap helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Seq
 * @param {unknown} value Parameter `value`.
 * @param {unknown} interceptor Parameter `interceptor`.
 * @returns {T} Returns the result.
 * @example
 *
 * tap([1, 2, 3], (arr) => arr.pop())
 * // => [1, 2]
 */
export function tap<T>(value: T, interceptor: (value: T) => unknown): T {
	interceptor(value);
	return value;
}

export default tap;
