const isPlainObjectValue = (
	value: unknown,
): value is Record<PropertyKey, unknown> => {
	if (Object.prototype.toString.call(value) !== "[object Object]") {
		return false;
	}
	const proto = Object.getPrototypeOf(value);
	return proto === null || proto === Object.prototype;
};

/**
 * Checks if `value` is an empty collection-like value.
 *
 * Arrays, strings, maps, sets, and plain objects are considered empty when size/length/key count is zero.
 *
 * @since +0.1.0
 * @category Lang
 * @param {unknown} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty.
 * @example
 *
 * isEmpty([])
 * // => true
 */
export function isEmpty(value: unknown): boolean {
	if (value == null) {
		return true;
	}
	if (Array.isArray(value) || typeof value === "string") {
		return value.length === 0;
	}
	if (value instanceof Map || value instanceof Set) {
		return value.size === 0;
	}
	if (isPlainObjectValue(value)) {
		return Object.keys(value).length === 0;
	}
	return false;
}

export default isEmpty;
