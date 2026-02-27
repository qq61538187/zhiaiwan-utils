import { getAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @since +0.1.0
 * @category Util
 * @param {PropertyPath} path The path of the property to get.
 * @returns {(value: unknown) => unknown} Returns the new accessor function.
 * @example
 *
 * property("a.b")({ a: { b: 2 } })
 * // => 2
 */
export function property(path: PropertyPath) {
	return (value: unknown): unknown => getAtPath(value, path);
}

export default property;
