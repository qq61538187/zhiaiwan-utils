import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

/**
 * Creates an object composed of keys generated from the results of running each element of `collection` through `iteratee`.
 *
 * The corresponding value of each key is an array of elements responsible for generating the key.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, unknown>} iteratee The iteratee to transform keys.
 * @returns {Record<string, TValue[]>} Returns the composed aggregate object.
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
export function groupBy<TValue>(
	collection: Collection<TValue> | null | undefined,
	iteratee: Iteratee<TValue, unknown>,
): Record<string, TValue[]> {
	const runner = toIterateeCore<TValue, unknown>(iteratee);
	const source = collection as Collection<TValue>;
	return toCollectionEntries(collection).reduce<Record<string, TValue[]>>(
		(acc, [key, value]) => {
			const groupKey = String(runner(value, key, source));
			if (!acc[groupKey]) {
				acc[groupKey] = [];
			}
			acc[groupKey].push(value);
			return acc;
		},
		{},
	);
}

export default groupBy;
