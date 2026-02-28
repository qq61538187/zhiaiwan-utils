/**
 * Checks if `value` is classified as a number primitive or `Number` object.
 *
 * `NaN` and `Infinity` are treated as numbers, matching method behavior.
 *
 * @since +0.1.0
 * @category Lang
 * @param {any} value The value to check.
 * @returns {value is number} Returns `true` if `value` is a number.
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.NaN)
 * // => true
 */
export function isNumber(value: unknown): value is number {
	return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}

export default isNumber;
