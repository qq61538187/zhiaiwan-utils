import { getAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Gets the value at `path` of `object`.
 *
 * If the resolved value is `undefined`, the `defaultValue` is returned.
 *
 * @since +0.1.0
 * @category Object
 * @param {object | null | undefined} object The object to query.
 * @param {PropertyPath} path The path of the property to get.
 * @param {TDefault} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {unknown | TDefault} Returns the resolved value.
 * @example
 *
 * get({ a: [{ b: 2 }] }, 'a[0].b')
 * // => 2
 *
 * get(null, 'a.b', 'safe')
 * // => 'safe'
 */
export function get<TDefault = undefined>(
	object: unknown,
	path: PropertyPath,
	defaultValue?: TDefault,
): unknown | TDefault {
	return getAtPath(object, path, defaultValue);
}

export default get;
