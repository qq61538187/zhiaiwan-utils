import type { AnyFunction } from "./types.js";

/**
 * Creates a function that packs arguments from `start` into a single rest array.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The target function.
 * @param {number} start The rest-collection start index.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a rest-args wrapper.
 * @example
 *
 * const fn = rest((prefix: string, items: string[]) => prefix + items.join(","), 1)
 * fn("x", "a", "b")
 * // => "xa,b"
 *
 * const emptyTail = rest((prefix: string, items: string[]) => `${prefix}:${items.length}`, 1)
 * emptyTail("safe")
 * // => "safe:0"
 */
export function rest<T extends AnyFunction>(
	fn: T,
	start = Math.max(0, fn.length - 1),
): (...args: unknown[]) => ReturnType<T> {
	const startIndex = Math.max(0, Math.trunc(start));
	return (...args: unknown[]): ReturnType<T> => {
		const leading = args.slice(0, startIndex);
		const restArgs = args.slice(startIndex);
		return fn(...([...leading, restArgs] as Parameters<T>)) as ReturnType<T>;
	};
}

export default rest;
