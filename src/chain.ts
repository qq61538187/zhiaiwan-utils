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
 * Wraps a value to enable sequential `tap` / `thru` transformations.
 *
 * @since +0.1.0
 * @category Seq
 * @param {T} value The initial value to wrap.
 * @returns {ChainWrapper<T>} Returns a chain wrapper.
 * @example
 *
 * chain([1, 2, 3]).thru((arr) => arr.slice(1)).value()
 * // => [2, 3]
 *
 * const empty = chain([] as number[]).tap(() => {}).value()
 * // => []
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
