import { getAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to iterate over.
 * @param {readonly PropertyPath[]} paths The property paths to pick.
 * @returns {unknown[]} Returns the picked values.
 * @example
 *
 * at({ a: [{ b: { c: 3 } }, 4] }, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */
export function at(object: unknown, paths: readonly PropertyPath[]): unknown[] {
	return paths.map((path) => getAtPath(object, path));
}

export default at;
