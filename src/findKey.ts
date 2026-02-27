import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Iteratee } from "./types.js";

const identity = <TValue>(value: TValue): TValue => value;

/**
 * Iterates over own enumerable string keyed properties of an object and returns the first key
 * `predicate` returns truthy for.
 *
 * @since +0.1.0
 * @category Object
 * @param {Record<string, TValue> | null | undefined} object The object to inspect.
 * @param {Iteratee<TValue, unknown>} [predicate] The function invoked per iteration.
 * @returns {string | undefined} Returns the matched key, else `undefined`.
 * @example
 *
 * findKey({ a: { age: 1 }, b: { age: 3 } }, (value) => value.age > 1)
 * // => 'b'
 */
export function findKey<TValue>(
	object: Record<string, TValue> | null | undefined,
	predicate?: Iteratee<TValue, unknown>,
): string | undefined {
	if (object == null) {
		return undefined;
	}
	const source = Object(object) as Record<string, TValue>;
	const runner = toIterateeCore<TValue, unknown>(
		(predicate ?? identity) as Iteratee<TValue, unknown>,
	);
	for (const key of Object.keys(source)) {
		if (runner(source[key], key, source)) {
			return key;
		}
	}
	return undefined;
}

export default findKey;
