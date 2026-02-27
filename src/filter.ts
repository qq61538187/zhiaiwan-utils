import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

/**
 * Iterates over elements of `collection`, returning an array of all elements `predicate` returns truthy for.
 *
 * Supports arrays and plain object collections.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, unknown>} predicate The function invoked per iteration.
 * @returns {TValue[]} Returns the new filtered array.
 * @example
 *
 * filter([1, 2, 3, 4], (n) => n % 2 === 0)
 * // => [2, 4]
 */
export function filter<TValue>(
	collection: Collection<TValue> | null | undefined,
	predicate: Iteratee<TValue, unknown>,
): TValue[] {
	const runner = toIterateeCore<TValue, unknown>(predicate);
	const source = collection as Collection<TValue>;
	return toCollectionEntries(collection)
		.filter(([key, value]) => Boolean(runner(value, key, source)))
		.map(([, value]) => value);
}

export default filter;
