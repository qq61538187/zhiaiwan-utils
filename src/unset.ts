import { hasAtPath, unsetAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Removes the property at `path` of `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to modify.
 * @param {PropertyPath} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is removed, else `false`.
 * @example
 *
 * const target = { a: [{ b: { c: 7 } }] }
 * unset(target, 'a[0].b.c')
 * // => true
 */
export function unset(object: unknown, path: PropertyPath): boolean {
	if (object == null || typeof object !== "object") {
		return true;
	}
	if (!hasAtPath(object, path)) {
		return false;
	}
	unsetAtPath(object as Record<PropertyKey, unknown>, path);
	return true;
}

export default unset;
