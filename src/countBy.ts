import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

/**
 * Creates an object composed of keys generated from iteratee results.
 *
 * The corresponding value of each key is the number of times the key is returned.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, unknown>} iteratee The iteratee to transform keys.
 * @returns {Record<string, number>} Returns the composed aggregate object.
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': 1, '6': 2 }
 */
export function countBy<TValue>(
	collection: Collection<TValue> | null | undefined,
	iteratee: Iteratee<TValue, unknown>,
): Record<string, number> {
	const runner = toIterateeCore<TValue, unknown>(iteratee);
	const source = collection as Collection<TValue>;
	return toCollectionEntries(collection).reduce<Record<string, number>>(
		(acc, [key, value]) => {
			const countKey = String(runner(value, key, source));
			acc[countKey] = (acc[countKey] ?? 0) + 1;
			return acc;
		},
		{},
	);
}

export default countBy;
