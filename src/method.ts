import { invokeAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

/**
 * Creates a function that invokes the method at `path` of a given object.
 *
 * @since +0.1.0
 * @category Util
 * @param {PropertyPath} path The path of the method to invoke.
 * @param {...unknown[]} args The arguments to invoke the method with.
 * @returns {(value: unknown) => unknown} Returns the new invoker function.
 * @example
 *
 * method("a.b")({ a: { b: () => 3 } })
 * // => 3
 */
export function method(path: PropertyPath, ...args: readonly unknown[]) {
	return (value: unknown): unknown => invokeAtPath(value, path, args);
}

export default method;
