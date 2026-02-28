import { sumBy } from "./sumBy.js";

/**
 * Computes the arithmetic mean of iteratee results for `collection`.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly T[]} collection The array to average.
 * @param {any} iteratee The iteratee used to map each element to a number.
 * @returns {number} Returns the mean value, or `NaN` when the collection is empty.
 * @example
 *
 * meanBy([{ n: 2 }, { n: 4 }], "n")
 * // => 3
 *
 * meanBy([] as Array<{ n: number }>, "n")
 * // => NaN
 */
export function meanBy<T>(collection: readonly T[], iteratee: unknown): number {
	if (collection.length === 0) {
		return Number.NaN;
	}
	return sumBy(collection, iteratee) / collection.length;
}

export default meanBy;
