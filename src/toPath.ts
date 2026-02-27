import { toPathCore } from "./internal/path-core.js";
import type { PathSegment, PropertyPath } from "./types.js";

/**
 * Converts `value` to a property path array.
 *
 * String paths support dot notation and bracket notation.
 *
 * @since +0.1.0
 * @category Util
 * @param {PropertyPath} value The value to convert.
 * @returns {PathSegment[]} Returns the new property path array.
 * @example
 *
 * toPath('a[0].b.c')
 * // => ['a', 0, 'b', 'c']
 */
export function toPath(value: PropertyPath): PathSegment[] {
	return toPathCore(value);
}

export default toPath;
