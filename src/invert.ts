/**
 * Creates an object composed of inverted keys and values of `object`.
 *
 * If `object` contains duplicate values, subsequent values overwrite previous assignments.
 *
 * @since +0.1.0
 * @category Object
 * @param {Record<string, unknown> | null | undefined} object The object to invert.
 * @returns {Record<string, string>} Returns the new inverted object.
 * @example
 *
 * invert({ a: 1, b: 2, c: 1 })
 * // => { '1': 'c', '2': 'b' }
 */
export function invert(
	object: Record<string, unknown> | null | undefined,
): Record<string, string> {
	if (object == null) {
		return {};
	}
	const source = Object(object) as Record<string, unknown>;
	const result: Record<string, string> = {};
	for (const key of Object.keys(source)) {
		result[String(source[key])] = key;
	}
	return result;
}

export default invert;
