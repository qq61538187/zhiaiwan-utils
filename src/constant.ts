/**
 * Creates a function that returns `value`.
 *
 * @since +0.1.0
 * @category Util
 * @param {T} value The value to return from the new function.
 * @returns {() => T} Returns the new constant function.
 * @example
 *
 * constant(42)()
 * // => 42
 */
export function constant<T>(value: T): () => T {
	return () => value;
}

export default constant;
