import { sum } from "./sum.js";

/**
 * Computes the arithmetic mean of numeric values.
 *
 * Returns `NaN` when `values` is empty.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly number[]} values The values to average.
 * @returns {number} Returns the mean.
 * @example
 *
 * mean([2, 4, 6])
 * // => 4
 */
export function mean(values: readonly number[]): number {
	if (values.length === 0) {
		return Number.NaN;
	}
	return sum(values) / values.length;
}

export default mean;
