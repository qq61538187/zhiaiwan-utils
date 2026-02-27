/**
 * Creates a duplicate-free version of an array.
 *
 * Equality is based on `SameValueZero` semantics from `Set`.
 *
 * @since +0.1.0
 * @category Array
 * @param {T} array The array to inspect.
 * @returns {Array<T[number]>} Returns the new duplicate-free array.
 * @example
 *
 * unique([1, 1, 2, 3, 3] as const)
 * // => [1, 2, 3]
 */
export function unique<const T extends readonly unknown[]>(
	array: T,
): Array<T[number]> {
	if (!Array.isArray(array)) {
		return [];
	}
	return Array.from(new Set(array)) as Array<T[number]>;
}

export default unique;
