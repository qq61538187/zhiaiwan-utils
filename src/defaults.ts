/**
 * Assigns own enumerable string keyed properties of source objects for all destination
 * properties that resolve to `undefined`.
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
 * defaults(target, { a: 3, b: 2 }, { b: 4, c: 5 })
 * // => { a: 1, b: 2, c: 5 }
 */
export function defaults<TObject extends Record<string, unknown>>(
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
			if (target[key] === undefined) {
				target[key] = from[key];
			}
		}
	}
	return object;
}

export default defaults;
