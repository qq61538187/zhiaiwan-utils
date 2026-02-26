/**
 * Creates an object composed of the picked object properties.
 *
 * Unknown keys are ignored and only own enumerable properties are copied.
 *
 * @since +0.1.0
 * @category Object
 * @param {T} source The source object.
 * @param {K} keys The property names to pick.
 * @returns {Pick<T, K[number]>} Returns the new picked object.
 * @example
 *
 * pick({ id: 1, name: 'zw', active: true }, ['id', 'name'] as const)
 * // => { id: 1, name: 'zw' }
 */
export function pick<T extends object, const K extends readonly (keyof T)[]>(
	source: T,
	keys: K,
): Pick<T, K[number]> {
	const result = {} as Pick<T, K[number]>;
	for (const key of keys) {
		if (Object.hasOwn(source, key)) {
			result[key] = source[key];
		}
	}
	return result;
}

export default pick;
