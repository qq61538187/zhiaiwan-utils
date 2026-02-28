import type { AnyFunction } from "./types.js";

type Transform = (value: unknown) => unknown;

/**
 * Creates a function that transforms arguments before invoking `fn`.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The target function.
 * @param {...Array<Transform | Transform[]>} transforms The argument transforms.
 * @returns {(...args: unknown[]) => ReturnType<T>} Returns a transformed-args wrapper.
 * @example
 *
 * const fn = overArgs((a: number, b: number) => a + b, [(v) => v * 2, (v) => v + 1])
 * fn(2, 3)
 * // => 8
 *
 * const fallback = overArgs((value: string) => value, [(v) => String(v ?? "safe")])
 * fallback(undefined)
 * // => "safe"
 */
export function overArgs<T extends AnyFunction>(
	fn: T,
	...transforms: Array<Transform | Transform[]>
): (...args: unknown[]) => ReturnType<T> {
	const flat = (
		transforms.length === 1 && Array.isArray(transforms[0]) ? transforms[0] : transforms
	) as Transform[];
	return (...args: unknown[]): ReturnType<T> => {
		const mapped = args.map((value, index) => {
			const transform = flat[index];
			return transform ? transform(value) : value;
		});
		return fn(...(mapped as Parameters<T>)) as ReturnType<T>;
	};
}

export default overArgs;
