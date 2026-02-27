import { isEqualCore } from "./internal/equal-core.js";
import { getAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates a function that compares the value at `path` with `srcValue`.
 *
 * @since +0.1.0
 * @category Util
 * @param {PropertyPath} path The path of the property to get.
 * @param {unknown} srcValue The value to match.
 * @returns {(value: unknown) => boolean} Returns the new spec function.
 * @example
 *
 * matchesProperty("a", 1)({ a: 1, b: 2 })
 * // => true
 */
export function matchesProperty(path: PropertyPath, srcValue: unknown) {
	return (value: unknown): boolean =>
		isEqualCore(getAtPath(value, path), srcValue);
}

export default matchesProperty;
