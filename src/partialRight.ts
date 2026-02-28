import type { AnyFunction } from "./types.js";

/**
 * Creates a function with appended partial arguments.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to partially apply.
 * @param {...unknown[]} partials The arguments to append.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a right-partially applied wrapper.
 * @example
 *
 * const appendExclamation = partialRight((a: string, b: string) => a + b, "!")
 * appendExclamation("hi")
 * // => "hi!"
 *
 * const fallback = partialRight((value: string, suffix: string) => value + suffix, "-safe")
 * fallback("")
 * // => "-safe"
 */
export function partialRight<T extends AnyFunction>(
	fn: T,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...([...args, ...partials] as Parameters<T>)) as ReturnType<T>;
}

export default partialRight;
