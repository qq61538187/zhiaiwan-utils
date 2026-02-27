import { getAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates a function that returns the value at a given path of `object`.
 *
 * @since +0.1.0
 * @category Util
 * @param {unknown} object The object to query.
 * @returns {(path: PropertyPath) => unknown} Returns the new accessor function.
 * @example
 *
 * propertyOf({ a: { b: 2 } })("a.b")
 * // => 2
 */
export function propertyOf(object: unknown) {
	return (path: PropertyPath): unknown => getAtPath(object, path);
}

export default propertyOf;
