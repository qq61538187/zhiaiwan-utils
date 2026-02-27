import { sumBy } from "./sumBy.js";

/**
 * meanBy helper method.
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
 * meanBy([{ n: 2 }, { n: 4 }], "n")
 * // => 3
 */
export function meanBy<T>(collection: readonly T[], iteratee: unknown): number {
	if (collection.length === 0) {
		return Number.NaN;
	}
	return sumBy(collection, iteratee) / collection.length;
}

export default meanBy;
