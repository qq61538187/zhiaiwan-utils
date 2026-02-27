/**
 * Gets the minimum numeric value from `values`.
 *
 * Returns `undefined` for an empty input array.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly number[]} values The values to inspect.
 * @returns {number | undefined} Returns the minimum value.
 * @example
 *
 * min([3, 8, 1])
 * // => 1
 */
export function min(values: readonly number[]): number | undefined {
	if (values.length === 0) {
		return undefined;
	}
	let result = Infinity;
	for (const value of values) {
		const n = Number(value);
		if (n < result) {
			result = n;
		}
	}
	return result;
}

export default min;
