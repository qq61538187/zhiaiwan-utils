import { unsetAtPath } from "./internal/path-core.js";
import type { PropertyPath } from "./types.js";

const cloneDeep = <T>(value: T): T => {
	if (Array.isArray(value)) {
		return value.map((item) => cloneDeep(item)) as T;
	}
	if (value !== null && typeof value === "object") {
		const cloned: Record<PropertyKey, unknown> = {};
		for (const key of Reflect.ownKeys(value as object)) {
			cloned[key] = cloneDeep((value as Record<PropertyKey, unknown>)[key]);
		}
		return cloned as T;
	}
	return value;
};

/**
 * Creates an object composed of the own and inherited enumerable properties of `object` that are not omitted.
 *
 * This method supports deep property paths and does not mutate the input object.
 *
 * @since +0.1.0
 * @category Object
 * @param {T} object The source object.
 * @param {readonly PropertyPath[]} paths The property paths to omit.
 * @returns {T} Returns the new object.
 * @example
 *
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])
 * // => { b: 2 }
 */
export function omit<T extends Record<PropertyKey, unknown>>(
	object: T,
	paths: readonly PropertyPath[],
): T {
	if (object === null || typeof object !== "object") {
		return {} as T;
	}
	const result = cloneDeep(object);
	for (const path of paths) {
		unsetAtPath(result as Record<PropertyKey, unknown>, path);
	}
	return result;
}

export default omit;
