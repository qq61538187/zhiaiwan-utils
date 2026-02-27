/**
 * Returns `defaultValue` if `value` is `null`, `undefined`, or `NaN`.
 *
 * @since +0.1.0
 * @category Util
 * @param {T} value The value to check.
 * @param {TDefault} defaultValue The default value.
 * @returns {Exclude<T, null | undefined> | TDefault} Returns the resolved value.
 * @example
 *
 * defaultTo(NaN, 10)
 * // => 10
 */
export function defaultTo<T, TDefault>(
	value: T,
	defaultValue: TDefault,
): Exclude<T, null | undefined> | TDefault {
	if (value == null) {
		return defaultValue;
	}
	if (typeof value === "number" && Number.isNaN(value)) {
		return defaultValue;
	}
	return value as Exclude<T, null | undefined>;
}

export default defaultTo;
