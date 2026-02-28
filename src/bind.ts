import type { AnyFunction } from "./types.js";

/**
 * Creates a function that invokes `fn` with bound `thisArg` and prepended arguments.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The target function.
 * @param {any} thisArg The `this` binding used when invoking `fn`.
 * @param {...unknown[]} partials Arguments prepended to each call.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns the bound wrapper.
 * @example
 *
 * const bound = bind((prefix: string, value: string) => prefix + value, null, "hi ")
 * bound("there")
 * // => "hi there"
 *
 * const withDefault = bind(
 *   function (this: { base?: string }, suffix: string) {
 *     return (this.base ?? "safe") + suffix
 *   },
 *   {},
 * )
 * withDefault("!")
 * // => "safe!"
 */
export function bind<T extends AnyFunction>(
	fn: T,
	thisArg: unknown,
	...partials: unknown[]
): (...args: unknown[]) => ReturnType<T> {
	return (...args: unknown[]): ReturnType<T> =>
		fn.apply(
			thisArg as ThisParameterType<T>,
			[...partials, ...args] as Parameters<T>,
		) as ReturnType<T>;
}

export default bind;
