/**
 * Creates an array of the own enumerable string keyed property names of `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to query.
 * @returns {string[]} Returns the property names.
 * @example
 *
 * keys({ a: 1, b: 2 })
 * // => ['a', 'b']
 */
export function keys(object: unknown): string[] {
	if (object == null) {
		return [];
	}
	return Object.keys(Object(object));
}

export default keys;
