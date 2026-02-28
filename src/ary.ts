import type { AnyFunction } from "./types.js";

/**
 * Creates a function that accepts up to `n` positional arguments.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The target function.
 * @param {number} n The maximum number of arguments forwarded to `fn`.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns an arity-capped wrapper.
 * @example
 *
 * const takeOne = ary((a: number, b: number) => a + b, 1)
 * takeOne(2, 3)
 * // => 2
 *
 * const noArgs = ary((value: string) => value, 0)
 * noArgs("x")
 * // => undefined
 */
export function ary<T extends AnyFunction>(
	fn: T,
	n = fn.length,
): (...args: unknown[]) => ReturnType<T> {
	const cap = Math.max(0, Math.trunc(n));
	return function arityCapped(this: ThisParameterType<T>, ...args: unknown[]): ReturnType<T> {
		return fn.apply(this, args.slice(0, cap) as Parameters<T>) as ReturnType<T>;
	};
}

export default ary;
