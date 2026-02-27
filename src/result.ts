import { toPathCore } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

const isUnsafeSegment = (segment: PropertyKey): boolean =>
	segment === "__proto__" ||
	segment === "constructor" ||
	segment === "prototype";

const invokeIfFunction = (value: unknown, thisArg: unknown): unknown =>
	typeof value === "function"
		? (value as (...args: readonly unknown[]) => unknown).call(thisArg)
		: value;

/**
 * Resolves the value at `path` of `object`.
 *
 * If the resolved value is a function it's invoked with its parent object as `this`.
 * If the resolved value is `undefined`, `defaultValue` is used and invoked when it's a function.
 *
 * @since +0.1.0
 * @category Object
 * @param {unknown} object The object to query.
 * @param {PropertyPath} path The path to resolve.
 * @param {unknown} [defaultValue] The fallback value.
 * @returns {unknown} Returns the resolved value.
 * @example
 *
 * const source = { a: [{ b: { c: () => 3 } }] }
 * result(source, 'a[0].b.c')
 * // => 3
 */
export function result(
	object: unknown,
	path: PropertyPath,
	defaultValue?: unknown,
): unknown {
	const segments = toPathCore(path);
	let parent: unknown;
	let current = object as Record<PropertyKey, unknown> | null | undefined;

	for (const segment of segments) {
		if (isUnsafeSegment(segment)) {
			current = undefined;
			break;
		}
		if (current == null) {
			current = undefined;
			break;
		}
		parent = current;
		current = current[segment as PropertyKey] as
			| Record<PropertyKey, unknown>
			| null
			| undefined;
	}

	if (current === undefined) {
		return invokeIfFunction(defaultValue, parent);
	}
	return invokeIfFunction(current, parent);
}

export default result;
