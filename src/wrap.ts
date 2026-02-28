/**
 * Creates a function that provides `value` as the first argument to `wrapper`.
 *
 * Extra runtime arguments are appended after `value`.
 *
 * @since +0.1.0
 * @category Function
 * @param {TValue} value The wrapped value.
 * @param {(value: TValue, ...args: unknown[]) => TResult} wrapper The wrapper function.
 * @returns {(...args: unknown[]) => TResult} Returns the wrapped function.
 * @example
 *
 * const wrapped = wrap('x', (v, s: string) => v + s)
 * wrapped('y')
 * // => 'xy'
 *
 * wrap(null, (value) => value ?? "safe")()
 * // => "safe"
 */
export function wrap<TValue, TResult>(
	value: TValue,
	wrapper: (value: TValue, ...args: unknown[]) => TResult,
): (...args: unknown[]) => TResult {
	return (...args: unknown[]): TResult => wrapper(value, ...args);
}

export default wrap;
