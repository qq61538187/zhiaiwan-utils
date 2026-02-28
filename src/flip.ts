import type { AnyFunction } from "./types.js";

/**
 * Creates a function that invokes `fn` with arguments reversed.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to wrap.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a reversed-args wrapper.
 * @example
 *
 * const flipped = flip((a: string, b: string) => a + b)
 * flipped("A", "B")
 * // => "BA"
 *
 * const withFallback = flip((a?: string, b?: string) => `${a ?? "safe"}:${b ?? "safe"}`)
 * withFallback("A")
 * // => "safe:A"
 */
export function flip<T extends AnyFunction>(fn: T): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn(...(args.reverse() as Parameters<T>)) as ReturnType<T>;
}

export default flip;
