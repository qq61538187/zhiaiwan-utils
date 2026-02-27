import { toIterateeCore } from "./internal/iteratee-core.js";

/**
 * Converts `func` to a callback function.
 *
 * Supports function, property path, `[path, value]`, and source object shorthands.
 *
 * @since +0.1.0
 * @category Util
 * @param {unknown} [func=identity] The value to convert to a callback.
 * @returns {(value: unknown) => unknown} Returns the callback.
 * @example
 *
 * iteratee("a")({ a: 2 })
 * // => 2
 */
export function iteratee(func: unknown = (value: unknown) => value) {
	if (func == null) {
		return (value: unknown) => value;
	}
	const runner = toIterateeCore<unknown, unknown>(func);
	return (value: unknown) => runner(value, 0, [value]);
}

export default iteratee;
