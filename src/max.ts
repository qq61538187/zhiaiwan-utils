/**
 * Gets the maximum numeric value from `values`.
 *
 * Returns `undefined` for an empty input array.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly number[]} values The values to inspect.
 * @returns {number | undefined} Returns the maximum value.
 * @example
 *
 * max([3, 8, 1])
 * // => 8
 */
export function max(values: readonly number[]): number | undefined {
	if (values.length === 0) {
		return undefined;
	}
	let result = -Infinity;
	for (const value of values) {
		const n = Number(value);
		if (n > result) {
			result = n;
		}
	}
	return result;
}

export default max;
