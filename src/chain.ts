import { tap } from "./tap.js";
import { thru } from "./thru.js";

export interface ChainWrapper<T> {
	tap(interceptor: (value: T) => unknown): ChainWrapper<T>;
	thru<TResult>(interceptor: (value: T) => TResult): ChainWrapper<TResult>;
	value(): T;
	valueOf(): T;
	toJSON(): T;
}

/**
 * chain helper method.
 *
 * This method follows the project utility behavior contract.
 *
 * @since +0.1.0
 * @category Seq
 * @param {unknown} value Parameter `value`.
 * @returns {ChainWrapper<T>} Returns the result.
 * @example
 *
 * chain([1, 2, 3]).thru((arr) => arr.slice(1)).value()
 * // => [2, 3]
 */
export function chain<T>(value: T): ChainWrapper<T> {
	let current = value;
	const wrapper: ChainWrapper<T> = {
		tap(interceptor) {
			current = tap(current, interceptor);
			return wrapper;
		},
		thru(interceptor) {
			const next = thru(current, interceptor);
			return chain(next);
		},
		value() {
			return current;
		},
		valueOf() {
			return current;
		},
		toJSON() {
			return current;
		},
	};
	return wrapper;
}

export default chain;
