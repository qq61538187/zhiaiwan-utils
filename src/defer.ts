import type { AnyFunction } from "./types.js";

/**
 * Defers invoking `fn` until the current call stack has cleared.
 *
 * The callback is scheduled with a minimal timeout.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to defer.
 * @param {Parameters<T>} args Arguments passed to `fn`.
 * @returns {ReturnType<typeof setTimeout>} Returns the timer id.
 * @example
 *
 * defer(console.log, 'hello')
 * // => timer id
 *
 * defer((value: string) => value, undefined as unknown as string)
 * // => timer id
 */
export function defer<T extends AnyFunction>(
	fn: T,
	...args: Parameters<T>
): ReturnType<typeof setTimeout> {
	return setTimeout(() => {
		fn(...args);
	}, 1);
}

export default defer;
