import type { AnyFunction } from "./types.js";

/**
 * rearg helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} indexes Parameter `indexes`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const fn = rearg((a: string, b: string) => a + b, [1, 0])
 * fn("A", "B")
 * // => "BA"
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
