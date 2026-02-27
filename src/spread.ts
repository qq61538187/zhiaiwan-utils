import type { AnyFunction } from "./types.js";

/**
 * spread helper method.
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
 * const fn = spread((a: number, b: number) => a + b)
 * fn([1, 2])
 * // => 3
 */
export function spread<T extends AnyFunction>(
	fn: T,
	start = 0,
): (...args: unknown[]) => ReturnType<T> {
	const startIndex = Math.max(0, Math.trunc(start));
	return (...args: unknown[]): ReturnType<T> => {
		const head = args.slice(0, startIndex);
		const spreadArg = args[startIndex];
		const tail = args.slice(startIndex + 1);
		const middle = Array.isArray(spreadArg) ? spreadArg : [spreadArg];
		return fn(
			...([...head, ...middle, ...tail] as Parameters<T>),
		) as ReturnType<T>;
	};
}

export default spread;
