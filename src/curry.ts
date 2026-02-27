import type { AnyFunction } from "./types.js";

type Curried2<A, B, R> = {
	(a: A): (b: B) => R;
	(a: A, b: B): R;
};

type Curried3<A, B, C, R> = {
	(a: A): Curried2<B, C, R>;
	(a: A, b: B): (c: C) => R;
	(a: A, b: B, c: C): R;
};

/**
 * Creates a function that accepts arguments until `arity` is reached, then invokes `fn`.
 *
 * This implementation supports progressive argument application without placeholders.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to curry.
 * @param {number} [arity=fn.length] The arity of `fn`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * const sum3 = curry((a: number, b: number, c: number) => a + b + c)
 * sum3(1)(2)(3)
 * // => 6
 */
export function curry<A, B, R>(
	fn: (a: A, b: B) => R,
	arity?: number,
): Curried2<A, B, R>;
export function curry<A, B, C, R>(
	fn: (a: A, b: B, c: C) => R,
	arity?: number,
): Curried3<A, B, C, R>;
export function curry<T extends AnyFunction>(fn: T, arity?: number): T;
export function curry<T extends AnyFunction>(fn: T, arity = fn.length): T {
	const curried = (...args: unknown[]): unknown => {
		if (args.length >= arity) {
			return fn(...(args as never[]));
		}
		return (...rest: unknown[]) => curried(...args, ...rest);
	};
	return curried as unknown as T;
}

export default curry;
