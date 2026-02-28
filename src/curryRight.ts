import type { AnyFunction } from "./types.js";

/**
 * Creates a function that accepts arguments until `arity` is reached, then invokes from right.
 *
 * When enough arguments are collected, the latest `arity` arguments are reversed
 * before invoking the original function.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to curry from right.
 * @param {number} arity The arity of `fn`.
 * @returns {T} Returns the new curried function.
 * @example
 *
 * const r = curryRight((a: string, b: string) => a + b)
 * r('b')('a')
 * // => 'ab'
 *
 * const withFallback = curryRight((a = "safe", b = "safe") => `${a}:${b}`)
 * withFallback(undefined)()
 * // => "safe:safe"
 */
export function curryRight<T extends AnyFunction>(fn: T, arity = fn.length): T {
	const curried = (...args: unknown[]): unknown => {
		if (args.length >= arity) {
			return fn(...(args.slice(-arity).reverse() as Parameters<T>));
		}
		return (...rest: unknown[]) => curried(...args, ...rest);
	};
	return curried as unknown as T;
}

export default curryRight;
