import { setAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Sets the value at `path` of `object`.
 *
 * Missing path segments are created as arrays or plain objects, based on the next segment.
 *
 * @since +0.1.0
 * @category Object
 * @param {Record<PropertyKey, unknown>} object The object to modify.
 * @param {PropertyPath} path The path of the property to set.
 * @param {unknown} value The value to set.
 * @returns {Record<PropertyKey, unknown>} Returns `object`.
 * @example
 *
 * const target = {}
 * set(target, 'a[0].b', 2)
 * // => { a: [{ b: 2 }] }
 */
export function set<T extends Record<PropertyKey, unknown>>(
	object: T,
	path: PropertyPath,
	value: unknown,
): T {
	return setAtPath(object, path, value);
}

export default set;
