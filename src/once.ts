import type { AnyFunction } from "./types.js";

/**
 * Creates a function that is restricted to invoking `fn` once.
 *
 * Repeated calls return the result of the first invocation.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to restrict.
 * @returns {T} Returns the new restricted function.
 * @example
 *
 * const initialize = once((value: number) => value + 1)
 * initialize(1)
 * // => 2
 * initialize(10)
 * // => 2
 */
export function once<T extends AnyFunction>(fn: T): T {
	type ThisArg = ThisParameterType<T>;
	let called = false;
	let result: ReturnType<T> | undefined;
	const wrapped = function (this: ThisArg, ...args: Parameters<T>) {
		if (!called) {
			called = true;
			result = fn.apply(this, args) as ReturnType<T>;
		}
		return result as ReturnType<T>;
	};

	return wrapped as T;
}

export default once;
