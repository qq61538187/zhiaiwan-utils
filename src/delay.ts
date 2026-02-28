import type { AnyFunction } from "./types.js";

/**
 * Invokes `fn` after `wait` milliseconds.
 *
 * Negative wait values are normalized to `0`.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to delay.
 * @param {number} wait The delay in milliseconds.
 * @param {Parameters<T>} args Arguments passed to `fn`.
 * @returns {ReturnType<typeof setTimeout>} Returns the timer id.
 * @example
 *
 * delay(console.log, 50, 'hello')
 * // => timer id
 *
 * delay(() => "safe", -1)
 * // => timer id
 */
export function delay<T extends AnyFunction>(
	fn: T,
	wait = 0,
	...args: Parameters<T>
): ReturnType<typeof setTimeout> {
	return setTimeout(
		() => {
			fn(...args);
		},
		Math.max(0, wait),
	);
}

export default delay;
