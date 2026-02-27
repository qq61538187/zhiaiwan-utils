import type { AnyFunction } from "./types.js";

/**
 * partialRight helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} fn Parameter `fn`.
 * @param {unknown} partials Parameter `partials`.
 * @returns {(...args: unknown[])} Returns the result.
 * @example
 *
 * const appendExclamation = partialRight((a: string, b: string) => a + b, "!")
 * appendExclamation("hi")
 * // => "hi!"
 */
export function partialRight<T extends AnyFunction>(
	fn: T,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...([...args, ...partials] as Parameters<T>)) as ReturnType<T>;
}

export default partialRight;
