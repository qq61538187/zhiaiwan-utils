/**
 * Binds methods of an object to the object itself.
 *
 * @since +0.1.0
 * @category Util
 * @param {TObject} object The object to bind methods on.
 * @param {ReadonlyArray<keyof TObject | string>} methodNames The object method names to bind.
 * @returns {TObject} Returns `object`.
 * @example
 *
 * const view = {
 *   label: 'docs',
 *   click() { return this.label }
 * }
 * bindAll(view, ['click'])
 * view.click()
 * // => 'docs'
 */
export function bindAll<TObject extends Record<PropertyKey, unknown>>(
	object: TObject,
	methodNames: ReadonlyArray<keyof TObject | string>,
): TObject {
	for (const methodName of methodNames) {
		const key = methodName as keyof TObject;
		const value = object[key];
		if (typeof value === "function") {
			object[key] = value.bind(object) as TObject[keyof TObject];
		}
	}
	return object;
}

export default bindAll;
