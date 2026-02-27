import { toIterateeCore } from "./internal/iteratee-core.js";

/**
 * sumBy helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Math
 * @param {unknown} collection Parameter `collection`.
 * @param {unknown} iteratee Parameter `iteratee`.
 * @returns {number} Returns the result.
 * @example
 *
 * sumBy([{ n: 2 }, { n: 4 }], "n")
 * // => 6
 */
export function sumBy<T>(collection: readonly T[], iteratee: unknown): number {
	const iterateeFn = toIterateeCore<T, unknown>(iteratee);
	return collection.reduce((total, value, index) => {
		const current = Number(iterateeFn(value, index, collection));
		return total + (Number.isNaN(current) ? 0 : current);
	}, 0);
}

export default sumBy;
