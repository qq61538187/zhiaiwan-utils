import type { AnyFunction } from "./types.js";

/**
 * Creates a function that only forwards the first argument to `fn`.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to cap to one argument.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a unary wrapper.
 * @example
 *
 * const toNumberOnly = unary((value: string) => Number(value))
 * toNumberOnly("2", "ignored")
 * // => 2
 *
 * const parse = unary((value: string | undefined) => Number(value))
 * parse(undefined, "ignored")
 * // => NaN
 */
export function unary<T extends AnyFunction>(fn: T): (...args: unknown[]) => ReturnType<T> {
	return (arg: unknown): ReturnType<T> => fn(arg as Parameters<T>[0]) as ReturnType<T>;
}

export default unary;
