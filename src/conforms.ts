/**
 * Creates a function that checks if all predicates in `source` return truthy.
 *
 * @since +0.1.0
 * @category Util
 * @param {Record<string, (value: unknown) => boolean>} source The object of property predicates.
 * @returns {(value: unknown) => boolean} Returns the new spec function.
 * @example
 *
 * conforms({ a: (value) => value > 1 })({ a: 2 })
 * // => true
 */
export function conforms(source: Record<string, (value: unknown) => boolean>) {
	const entries = Object.entries(source);
	return (value: unknown): boolean => {
		const objectValue = value as Record<string, unknown> | null | undefined;
		if (objectValue == null) {
			return false;
		}
		return entries.every(([key, predicate]) => predicate(objectValue[key]));
	};
}

export default conforms;
