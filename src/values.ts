/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to query.
 * @returns {unknown[]} Returns the property values.
 * @example
 *
 * values({ a: 1, b: 2 })
 * // => [1, 2]
 */
export function values(object: unknown): unknown[] {
	if (object == null) {
		return [];
	}
	const source = Object(object) as Record<string, unknown>;
	return Object.keys(source).map((key) => source[key]);
}

export default values;
