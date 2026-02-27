/**
 * Creates an array of unique values from all given arrays.
 *
 * The order of result values follows their first appearance across arrays.
 *
 * @since +0.1.0
 * @category Array
 * @param {readonly unknown[][]} arrays The arrays to inspect.
 * @returns {unknown[]} Returns the new union array.
 * @example
 *
 * union([2], [1, 2], [3])
 * // => [2, 1, 3]
 */
export function union(...arrays: readonly unknown[][]): unknown[] {
	const result: unknown[] = [];
	for (const array of arrays) {
		if (!Array.isArray(array)) {
			continue;
		}
		for (const item of array) {
			if (!result.includes(item)) {
				result.push(item);
			}
		}
	}
	return result;
}

export default union;
