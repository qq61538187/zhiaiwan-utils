/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @since +0.1.0
 * @category Lang
 * @param {unknown} value The value to check.
 * @returns {value is null | undefined} Returns `true` if `value` is nullish.
 * @example
 *
 * isNil(1)
 * // => false
 */
export function isNil(value: unknown): value is null | undefined {
	return value == null;
}

export default isNil;
