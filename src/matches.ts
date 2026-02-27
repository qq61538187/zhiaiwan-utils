import { isEqualCore } from "./internal/equal-core.js";

const matchesIsObjectLike = (
	value: unknown,
): value is Record<PropertyKey, unknown> =>
	typeof value === "object" && value !== null;

/**
 * Creates a function that performs a partial deep comparison with `source`.
 *
 * @since +0.1.0
 * @category Util
 * @param {Record<PropertyKey, unknown>} source The object of property values to match.
 * @returns {(value: unknown) => boolean} Returns the new spec function.
 * @example
 *
 * matches({ a: 1 })({ a: 1, b: 2 })
 * // => true
 */
export function matches(source: Record<PropertyKey, unknown>) {
	return (value: unknown): boolean => {
		if (!matchesIsObjectLike(value)) {
			return false;
		}
		return isEqualCore(value, source);
	};
}

export default matches;
