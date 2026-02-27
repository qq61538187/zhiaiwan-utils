/**
 * Checks if `value` is classified as a string primitive or `String` object.
 *
 * @since +0.1.0
 * @category Lang
 * @param {unknown} value The value to check.
 * @returns {value is string} Returns `true` if `value` is a string.
 * @example
 *
 * isString('abc')
 * // => true
 */
export function isString(value: unknown): value is string {
	return (
		typeof value === "string" ||
		Object.prototype.toString.call(value) === "[object String]"
	);
}

export default isString;
