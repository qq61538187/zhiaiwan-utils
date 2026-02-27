/**
 * Flattens `array` a single level deep.
 *
 * Only one nesting level is flattened, matching method `flatten`.
 *
 * @since +0.1.0
 * @category Array
 * @param {readonly unknown[]} array The array to flatten.
 * @returns {unknown[]} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3]], 4])
 * // => [1, 2, [3], 4]
 */
export function flatten(array: readonly unknown[]): unknown[] {
	if (!Array.isArray(array)) {
		return [];
	}
	return array.flat(1);
}

export default flatten;
