/**
 * Checks if `value` is a plain object.
 *
 * Objects created by `{}`, `new Object()`, or `Object.create(null)` are considered plain.
 *
 * @since +0.1.0
 * @category Lang
 * @param {unknown} value The value to check.
 * @returns {value is Record<PropertyKey, unknown>} Returns `true` if `value` is a plain object.
 * @example
 *
 * isPlainObject({ a: 1 })
 * // => true
 */
export function isPlainObject(
	value: unknown,
): value is Record<PropertyKey, unknown> {
	if (Object.prototype.toString.call(value) !== "[object Object]") {
		return false;
	}
	const proto = Object.getPrototypeOf(value);
	return proto === null || proto === Object.prototype;
}

export default isPlainObject;
