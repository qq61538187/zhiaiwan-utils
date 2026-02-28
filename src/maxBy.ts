import { toIterateeCore } from "./internal/iteratee-core.js";

/**
 * Returns the element that yields the largest iteratee score.
 *
 * @since +0.1.0
 * @category Math
 * @param {readonly T[]} collection The array to inspect.
 * @param {any} iteratee The iteratee used to compute comparison scores.
 * @returns {T | undefined} Returns the maximum-scoring element, or `undefined` for an empty collection.
 * @example
 *
 * maxBy([{ n: 1 }, { n: 3 }], "n")?.n
 * // => 3
 *
 * maxBy([] as Array<{ n: number }>, "n")
 * // => undefined
 */
export function maxBy<T>(collection: readonly T[], iteratee: unknown): T | undefined {
	if (collection.length === 0) {
		return undefined;
	}
	const iterateeFn = toIterateeCore<T, unknown>(iteratee);
	let selected = collection[0];
	let selectedScore = Number(iterateeFn(selected, 0, collection));
	for (let index = 1; index < collection.length; index += 1) {
		const item = collection[index];
		const score = Number(iterateeFn(item, index, collection));
		if (score > selectedScore) {
			selected = item;
			selectedScore = score;
		}
	}
	return selected;
}

export default maxBy;
