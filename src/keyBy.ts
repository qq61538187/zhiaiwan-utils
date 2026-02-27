import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

/**
 * Creates an object composed of keys generated from the results of running each element of `collection` through `iteratee`.
 *
 * The corresponding value of each key is the last element responsible for generating the key.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, unknown>} iteratee The iteratee to transform keys.
 * @returns {Record<string, TValue>} Returns the composed object.
 * @example
 *
 * keyBy([{ id: 'a', value: 1 }, { id: 'b', value: 2 }], 'id')
 * // => { a: { id: 'a', value: 1 }, b: { id: 'b', value: 2 } }
 */
export function keyBy<TValue>(
	collection: Collection<TValue> | null | undefined,
	iteratee: Iteratee<TValue, unknown>,
): Record<string, TValue> {
	const runner = toIterateeCore<TValue, unknown>(iteratee);
	const source = collection as Collection<TValue>;
	return toCollectionEntries(collection).reduce<Record<string, TValue>>(
		(acc, [key, value]) => {
			acc[String(runner(value, key, source))] = value;
			return acc;
		},
		{},
	);
}

export default keyBy;
