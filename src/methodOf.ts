import { invokeAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates a function that invokes the method at a given path of `object`.
 *
 * @since +0.1.0
 * @category Util
 * @param {object | null | undefined} object The object to query.
 * @param {...unknown[]} args The arguments to invoke the method with.
 * @returns {(path: PropertyPath) => unknown} Returns the new invoker function.
 * @example
 *
 * methodOf({ a: { b: () => 3 } })("a.b")
 * // => 3
 *
 * methodOf(null)("a.b")
 * // => undefined
 */
export function methodOf(object: unknown, ...args: readonly unknown[]) {
	return (path: PropertyPath): unknown => invokeAtPath(object, path, args);
}

export default methodOf;
