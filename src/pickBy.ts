import { toIterateeCore } from "./internal/iteratee-core.js";
import type { Iteratee } from "./types.js";

const identity = <TValue>(value: TValue): TValue => value;

/**
 * Creates an object composed of the properties `predicate` returns truthy for.
 *
 * @since +0.1.0
 * @category Object
 * @param {Record<string, TValue> | null | undefined} object The source object.
 * @param {Iteratee<TValue, unknown>} [predicate] The predicate invoked per property.
 * @returns {Record<string, TValue>} Returns the new object.
 * @example
 *
 * pickBy({ a: 1, b: '2', c: 3 }, (value) => typeof value === 'number')
 * // => { a: 1, c: 3 }
 */
export function pickBy<TValue>(
	object: Record<string, TValue> | null | undefined,
	predicate?: Iteratee<TValue, unknown>,
): Record<string, TValue> {
	if (object == null) {
		return {};
	}
	const source = Object(object) as Record<string, TValue>;
	const runner = toIterateeCore<TValue, unknown>(
		(predicate ?? identity) as Iteratee<TValue, unknown>,
	);
	const result: Record<string, TValue> = {};
	for (const key of Object.keys(source)) {
		const value = source[key];
		if (runner(value, key, source)) {
			result[key] = value;
		}
	}
	return result;
}

export default pickBy;
