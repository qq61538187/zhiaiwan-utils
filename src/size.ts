import type { Collection } from "./types.js";

/**
 * Gets the size of `collection`.
 *
 * @since +0.1.0
 * @category Collection
 * @param {Collection<TValue> | string | null | undefined} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * size({ a: 1, b: 2 })
 * // => 2
 */
export function size<TValue>(
	collection: Collection<TValue> | string | null | undefined,
): number {
	if (collection == null) {
		return 0;
	}
	if (typeof collection === "string" || Array.isArray(collection)) {
		return collection.length;
	}
	return Object.keys(collection).length;
}

export default size;
