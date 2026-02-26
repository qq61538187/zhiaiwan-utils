import type { AnyFunction, DebouncedFunction } from "./types.js";

/**
 * Creates a debounced function that delays invoking `fn`.
 *
 * The debounced function exposes `cancel()` and `flush()` for lifecycle control.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @returns {DebouncedFunction<T>} Returns the new debounced function.
 * @example
 *
 * const fn = debounce((value: number) => value * 2, 100)
 * fn(2)
 * fn.flush()
 * // => 4
 */
export function debounce<T extends AnyFunction>(
	fn: T,
	wait = 0,
): DebouncedFunction<T> {
	type ThisArg = ThisParameterType<T>;
	let timer: ReturnType<typeof setTimeout> | undefined;
	let lastArgs: Parameters<T> | undefined;
	let lastThis: ThisArg | undefined;
	let lastResult: ReturnType<T> | undefined;

	const invoke = (): ReturnType<T> | undefined => {
		if (!lastArgs) {
			return lastResult;
		}
		lastResult = fn.apply(lastThis, lastArgs) as ReturnType<T>;
		lastArgs = undefined;
		lastThis = undefined;
		return lastResult;
	};

	const debounced = function (this: ThisArg, ...args: Parameters<T>) {
		lastArgs = args;
		lastThis = this;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			timer = undefined;
			invoke();
		}, wait);
	} as DebouncedFunction<T>;

	debounced.cancel = () => {
		if (timer) {
			clearTimeout(timer);
			timer = undefined;
		}
		lastArgs = undefined;
		lastThis = undefined;
	};

	debounced.flush = () => {
		if (timer) {
			clearTimeout(timer);
			timer = undefined;
		}
		return invoke();
	};

	return debounced;
}

export default debounce;
