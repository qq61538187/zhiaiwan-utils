import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

/**
 * Creates an array of values by running each element in `collection` through `iteratee`.
 *
 * Supports arrays and plain object collections.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, TResult>} iteratee The iteratee invoked per element.
 * @returns {TResult[]} Returns the new mapped array.
 * @example
 *
 * map([{ n: 1 }, { n: 2 }], 'n')
 * // => [1, 2]
 */
export function map<TValue, TResult>(
	collection: Collection<TValue> | null | undefined,
	iteratee: Iteratee<TValue, TResult>,
): TResult[] {
	const runner = toIterateeCore<TValue, TResult>(iteratee);
	return toCollectionEntries(collection).map(([key, value]) =>
		runner(value, key, collection as Collection<TValue>),
	);
}

export default map;
