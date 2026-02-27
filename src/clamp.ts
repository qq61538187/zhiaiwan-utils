/**
 * Clamps `value` within the inclusive lower and upper bounds.
 *
 * If `upper` is omitted, the range becomes `[0, lower]`.
 * Bounds are normalized when `lower > upper`.
 *
 * @since +0.1.0
 * @category Number
 * @param {number} value The number to clamp.
 * @param {number} lower The lower bound, or upper bound when `upper` is omitted.
 * @param {number} [upper] The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(12, 0, 10)
 * // => 10
 */
export function clamp(value: number, lower: number, upper?: number): number {
	let min = Number(lower);
	let max = upper === undefined ? min : Number(upper);
	if (upper === undefined) {
		min = 0;
	}
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
	const n = Number(value);
	if (n < min) {
		return min;
	}
	if (n > max) {
		return max;
	}
	return n;
}

export default clamp;
