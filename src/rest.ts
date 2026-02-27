import type { AnyFunction } from "./types.js";

/**
 * rest helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} start Parameter `start`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const fn = rest((prefix: string, items: string[]) => prefix + items.join(","), 1)
 * fn("x", "a", "b")
 * // => "xa,b"
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
