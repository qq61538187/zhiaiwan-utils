import { toPathCore } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

const isUnsafeSegment = (segment: PropertyKey): boolean =>
	segment === "__proto__" ||
	segment === "constructor" ||
	segment === "prototype";

/**
 * Checks if `path` is a direct or inherited property path of `object`.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to query.
 * @param {PropertyPath} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * const source = Object.create({ a: { b: 2 } })
 * hasIn(source, 'a.b')
 * // => true
 */
export function hasIn(object: unknown, path: PropertyPath): boolean {
	const segments = toPathCore(path);
	if (segments.length === 0) {
		return false;
	}

	let current = object as Record<PropertyKey, unknown> | null | undefined;
	for (const segment of segments) {
		if (isUnsafeSegment(segment)) {
			return false;
		}
		if (current == null || !((segment as PropertyKey) in Object(current))) {
			return false;
		}
		current = current[segment as PropertyKey] as
			| Record<PropertyKey, unknown>
			| null
			| undefined;
	}

	return true;
}

export default hasIn;
