import { hasAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Checks if `path` is a direct property path of `object`.
 *
 * This method only checks own properties at each segment.
 *
 * @since +0.1.0
 * @category Object
 * @param {object | null | undefined} object The object to query.
 * @param {PropertyPath} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * has({ a: { b: 2 } }, 'a.b')
 * // => true
 *
 * has(null, 'a.b')
 * // => false
 */
export function has(object: unknown, path: PropertyPath): boolean {
	return hasAtPath(object, path);
}

export default has;
