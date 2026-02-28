import type { AnyFunction } from "./types.js";

/**
 * Creates a function that invokes `fn` with arguments arranged by `indexes`.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to wrap.
 * @param {number[]} indexes The argument order mapping.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns an argument-reordered wrapper.
 * @example
 *
 * const fn = rearg((a: string, b: string) => a + b, [1, 0])
 * fn("A", "B")
 * // => "BA"
 *
 * const withFallback = rearg((left?: string, right?: string) => `${left ?? "safe"}:${right ?? "safe"}`, [1, 0])
 * withFallback("A")
 * // => "safe:A"
 */
export function rearg<T extends AnyFunction>(
	fn: T,
	indexes: number[],
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> => {
		const arranged = indexes.map((index) => args[index]);
		return fn(...(arranged as Parameters<T>)) as ReturnType<T>;
	};
}

export default rearg;
