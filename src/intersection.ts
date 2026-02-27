/**
 * Creates an array of unique values included in all given arrays.
 *
 * The order of result values follows the first array.
 *
 * @since +0.1.0
 * @category Array
 * @param {readonly unknown[][]} arrays The arrays to inspect.
 * @returns {unknown[]} Returns the new array of intersecting values.
 * @example
 *
 * intersection([2, 1], [2, 3], [2, 4])
 * // => [2]
 */
export function intersection(...arrays: readonly unknown[][]): unknown[] {
	if (arrays.length === 0) {
		return [];
	}
	const [first, ...rest] = arrays;
	if (!Array.isArray(first)) {
		return [];
	}
	const result: unknown[] = [];
	for (const item of first) {
		if (result.includes(item)) {
			continue;
		}
		if (rest.every((arr) => Array.isArray(arr) && arr.includes(item))) {
			result.push(item);
		}
	}
	return result;
}

export default intersection;
