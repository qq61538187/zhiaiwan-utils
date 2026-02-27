import type { AnyFunction, ThrottledFunction } from "./types.js";

export interface ThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
}

/**
 * Creates a throttled function that only invokes `fn` at most once per `wait` milliseconds.
 *
 * The throttled function exposes `cancel()` and `flush()` for lifecycle control.
 *
 * @since +0.1.0
 * @category Function
 * @param {T} fn The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {ThrottleOptions} [options] The options object.
 * @returns {ThrottledFunction<T>} Returns the new throttled function.
 * @example
 *
 * const fn = throttle((value: number) => value * 2, 100)
 * fn(2)
 * fn.flush()
 * // => 4
 */
export function throttle<T extends AnyFunction>(
	fn: T,
	wait = 0,
	options: ThrottleOptions = {},
): ThrottledFunction<T> {
	type ThisArg = ThisParameterType<T>;
	const leading = options.leading ?? true;
	const trailing = options.trailing ?? true;

	let timer: ReturnType<typeof setTimeout> | undefined;
	let lastArgs: Parameters<T> | undefined;
	let lastThis: ThisArg | undefined;
	let lastInvokeTime = 0;
	let result: ReturnType<T> | undefined;

	const invoke = (time: number) => {
		lastInvokeTime = time;
		result = fn.apply(lastThis, lastArgs as Parameters<T>) as ReturnType<T>;
		lastArgs = undefined;
		lastThis = undefined;
		return result;
	};

	const shouldInvoke = (time: number) =>
		lastInvokeTime === 0 || time - lastInvokeTime >= wait;

	const startTimer = (remainingWait: number) => {
		timer = setTimeout(() => {
			timer = undefined;
			const now = Date.now();
			if (trailing && lastArgs) {
				invoke(now);
			}
		}, remainingWait);
	};

	const throttled = function (this: ThisArg, ...args: Parameters<T>) {
		const now = Date.now();
		if (!lastInvokeTime && !leading) {
			lastInvokeTime = now;
		}

		lastArgs = args;
		lastThis = this;

		if (shouldInvoke(now)) {
			if (!timer) {
				return invoke(now);
			}
		}

		if (!timer && trailing) {
			const remaining = Math.max(wait - (now - lastInvokeTime), 0);
			startTimer(remaining);
		}
		return result;
	} as ThrottledFunction<T>;

	throttled.cancel = () => {
		if (timer) {
			clearTimeout(timer);
			timer = undefined;
		}
		lastInvokeTime = 0;
		lastArgs = undefined;
		lastThis = undefined;
	};

	throttled.flush = () => {
		if (!timer || !lastArgs) {
			return result;
		}
		clearTimeout(timer);
		timer = undefined;
		return invoke(Date.now());
	};

	return throttled;
}

export default throttle;
