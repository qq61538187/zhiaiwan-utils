import { toCollectionEntries } from "./internal/collection-core.js";
import type { Collection } from "./types.js";

/**
 * Reduces `collection` to a value which is the accumulated result of running each element through `iteratee`.
 *
 * Supports arrays and plain object collections.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | null | undefined} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {TAcc} [accumulator] The initial accumulator value.
 * @returns {TAcc | TValue} Returns the accumulated value.
 * @example
 *
 * reduce([1, 2, 3], (sum, n) => sum + n, 0)
 * // => 6
 */
export function reduce<TValue>(
	collection: Collection<TValue> | null | undefined,
	iteratee: (
		accumulator: TValue,
		value: TValue,
		key: string | number,
		collection: Collection<TValue>,
	) => TValue,
): TValue;
export function reduce<TValue, TAcc>(
	collection: Collection<TValue> | null | undefined,
	iteratee: (
		accumulator: TAcc,
		value: TValue,
		key: string | number,
		collection: Collection<TValue>,
	) => TAcc,
	accumulator: TAcc,
): TAcc;
export function reduce<TValue, TAcc>(
	collection: Collection<TValue> | null | undefined,
	iteratee: (
		accumulator: TAcc | TValue,
		value: TValue,
		key: string | number,
		collection: Collection<TValue>,
	) => TAcc | TValue,
	accumulator?: TAcc,
): TAcc | TValue {
	const entries = toCollectionEntries(collection);
	if (entries.length === 0) {
		if (accumulator !== undefined) {
			return accumulator;
		}
		throw new TypeError("Reduce of empty collection with no initial value");
	}

	let startIndex = 0;
	let result: TAcc | TValue;
	if (accumulator === undefined) {
		result = entries[0][1];
		startIndex = 1;
	} else {
		result = accumulator;
	}

	const source = collection as Collection<TValue>;
	for (let index = startIndex; index < entries.length; index += 1) {
		const [key, value] = entries[index];
		result = iteratee(result, value, key, source);
	}

	return result;
}

export default reduce;
