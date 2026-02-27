import { toCollectionEntries } from "./internal/collection-core.js";
import type { Collection } from "./types.js";

const toStartIndex = (length: number, fromIndex: number): number => {
	if (fromIndex >= 0) {
		return fromIndex;
	}
	return Math.max(length + fromIndex, 0);
};

const sameValueZero = (left: unknown, right: unknown): boolean =>
	left === right || (Number.isNaN(left) && Number.isNaN(right));

/**
 * Checks if `value` is in `collection`.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | string | null | undefined} collection The collection to inspect.
 * @param {unknown} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * includes([1, 2, 3], 1)
 * // => true
 */
export function includes<TValue>(
	collection: Collection<TValue> | string | null | undefined,
	value: unknown,
	fromIndex = 0,
): boolean {
	if (collection == null) {
		return false;
	}

	if (typeof collection === "string" && typeof value === "string") {
		const startIndex = toStartIndex(collection.length, fromIndex);
		return collection.includes(value, startIndex);
	}

	const values = toCollectionEntries(collection as Collection<TValue>).map(
		([, item]) => item,
	);
	const startIndex = toStartIndex(values.length, fromIndex);
	for (let index = startIndex; index < values.length; index += 1) {
		if (sameValueZero(values[index], value)) {
			return true;
		}
	}
	return false;
}

export default includes;
