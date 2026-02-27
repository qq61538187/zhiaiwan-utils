import { toCollectionEntries } from "./internal/collection-core.js";
import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Collection, Iteratee } from "./types.js";

const defaultPredicate = <TValue>(value: TValue): TValue => value;

/**
 * Checks if `predicate` returns truthy for all elements of `collection`.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Iteratee<TValue, unknown>} [predicate] The predicate invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass, else `false`.
 * @example
 *
 * every([true, 1, 'ok'])
 * // => true
 */
export function every<TValue>(
	collection: Collection<TValue> | null | undefined,
	predicate?: Iteratee<TValue, unknown>,
): boolean {
	const runner = toIterateeCore<TValue, unknown>(
		(predicate ?? defaultPredicate) as Iteratee<TValue, unknown>,
	);
	const source = collection as Collection<TValue>;
	return toCollectionEntries(collection).every(([key, value]) =>
		Boolean(runner(value, key, source)),
	);
}

export default every;
