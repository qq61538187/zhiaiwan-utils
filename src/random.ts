/**
 * Produces a random number between `lower` and `upper`.
 *
 * Returns an integer by default, and a floating-point number when `floating`
 * is `true` or either bound is non-integer.
 *
 * @since +0.1.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Whether to return a floating-point value.
 * @returns {number} Returns the random number.
 * @example
 *
 * random(1, 3)
 * // => 1 | 2 | 3
 */
export function random(lower = 0, upper = 1, floating?: boolean): number {
	let min = Number(lower);
	let max = Number(upper);
	if (Number.isNaN(max)) {
		max = min;
		min = 0;
	}
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
	const shouldFloat =
		floating ?? (!Number.isInteger(min) || !Number.isInteger(max));
	if (shouldFloat) {
		return min + Math.random() * (max - min);
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default random;
