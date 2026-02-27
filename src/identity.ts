/**
 * Returns the first argument it receives.
 *
 * @since +0.1.0
 * @category Util
 * @param {T} value Any value.
 * @returns {T} Returns `value`.
 * @example
 *
 * identity(3)
 * // => 3
 */
export function identity<T>(value: T): T {
	return value;
}

export default identity;
