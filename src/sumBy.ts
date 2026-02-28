import { toIterateeCore } from "./internal/iteratee-core.js";

/**
 * Sums iteratee results for each element in `collection`.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly T[]} collection The array to sum.
 * @param {any} iteratee The iteratee used to map each element to a number.
 * @returns {number} Returns the accumulated numeric sum.
 * @example
 *
 * sumBy([{ n: 2 }, { n: 4 }], "n")
 * // => 6
 *
 * sumBy([{ n: 2 }, { n: Number.NaN }], "n")
 * // => 2
 */
export function sumBy<T>(collection: readonly T[], iteratee: unknown): number {
	const iterateeFn = toIterateeCore<T, unknown>(iteratee);
	return collection.reduce((total, value, index) => {
		const current = Number(iterateeFn(value, index, collection));
		return total + (Number.isNaN(current) ? 0 : current);
	}, 0);
}

export default sumBy;
