/**
 * Assigns own enumerable string keyed properties of source objects to `object`.
 *
 * Source objects are applied from left to right. This method mutates `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {TObject} object The destination object.
 * @param {...unknown[]} sources The source objects.
 * @returns {TObject} Returns `object`.
 * @example
 *
 * const target = { a: 1 }
 * assign(target, { b: 2 }, { a: 3 })
 * // => { a: 3, b: 2 }
 */
export function assign<TObject extends Record<string, unknown>>(
	object: TObject,
	...sources: readonly unknown[]
): TObject {
	const target = object as Record<string, unknown>;
	for (const source of sources) {
		if (source == null) {
			continue;
		}
		const from = Object(source) as Record<string, unknown>;
		for (const key of Object.keys(from)) {
			target[key] = from[key];
		}
	}
	return object;
}

export default assign;
