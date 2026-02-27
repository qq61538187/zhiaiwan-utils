/**
 * Recursively flattens `array`.
 *
 * Nested arrays are flattened until no nested array remains.
 *
 * @since +0.1.0
 * @category Array
 * @param {readonly unknown[]} array The array to flatten.
 * @returns {unknown[]} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]]]])
 * // => [1, 2, 3, 4]
 */
export function flattenDeep(array: readonly unknown[]): unknown[] {
	if (!Array.isArray(array)) {
		return [];
	}
	return array.flat(Infinity);
}

export default flattenDeep;
