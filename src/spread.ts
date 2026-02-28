import type { AnyFunction } from "./types.js";

/**
 * Creates a function that spreads an array argument into positional arguments.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The target function.
 * @param {number} start The index of the argument to spread.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a spread-wrapper function.
 * @example
 *
 * const fn = spread((a: number, b: number) => a + b)
 * fn([1, 2])
 * // => 3
 *
 * const safeJoin = spread((a: string, b: string) => `${a}:${b}`)
 * safeJoin(undefined)
 * // => "undefined:undefined"
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
		return fn(...([...head, ...middle, ...tail] as Parameters<T>)) as ReturnType<T>;
	};
}

export default spread;
