/**
 * Computes the sum of all numeric values in an array.
 *
 * Each item is converted with `Number(...)` before accumulation.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly number[]} values The values to add.
 * @returns {number} Returns the total sum.
 * @example
 *
 * sum([1, 2, 3, 4])
 * // => 10
 */
export function sum(values: readonly number[]): number {
	return values.reduce((total, value) => total + Number(value), 0);
}

export default sum;
