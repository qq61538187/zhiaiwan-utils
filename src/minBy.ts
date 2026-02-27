import { toIterateeCore } from "./internal/iteratee-core.js";

/**
 * minBy helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Math
 * @param {unknown} collection Parameter `collection`.
 * @param {unknown} iteratee Parameter `iteratee`.
 * @returns {T | undefined} Returns the result.
 * @example
 *
 * minBy([{ n: 2 }, { n: 4 }], "n")?.n
 * // => 2
 */
export function minBy<T>(
	collection: readonly T[],
	iteratee: unknown,
): T | undefined {
	if (collection.length === 0) {
		return undefined;
	}
	const iterateeFn = toIterateeCore<T, unknown>(iteratee);
	let selected = collection[0];
	let selectedScore = Number(iterateeFn(selected, 0, collection));
	for (let index = 1; index < collection.length; index += 1) {
		const item = collection[index];
		const score = Number(iterateeFn(item, index, collection));
		if (score < selectedScore) {
			selected = item;
			selectedScore = score;
		}
	}
	return selected;
}

export default minBy;
