/**
 * Rounds `value` down to a given precision.
 *
 * Precision can be positive (decimal places) or negative (integer places).
 *
 * @since +0.1.0
 * @category Math
 * @param {number} value The number to round down.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * floor(4.006, 2)
 * // => 4
 */
function floorWithPrecision(value: number, precision = 0): number {
	const n = Number(value);
	const p = Math.trunc(precision);
	if (!Number.isFinite(n) || p === 0) {
		return Math.floor(n);
	}
	const factor = 10 ** Math.abs(p);
	if (p > 0) {
		return Math.floor(n * factor) / factor;
	}
	return Math.floor(n / factor) * factor;
}

export { floorWithPrecision as floor };

export default floorWithPrecision;
