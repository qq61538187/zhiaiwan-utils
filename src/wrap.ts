/**
 * Creates a function that provides `value` as the first argument to `wrapper`.
 *
 * Extra runtime arguments are appended after `value`.
 *
 * @since +0.1.0
 * @category Function
 * @param {unknown} value The wrapped value.
 * @param {unknown} wrapper The wrapper function.
 * @returns {(...args: unknown[]) => TResult} Returns the wrapped function.
 * @example
 *
 * const wrapped = wrap('x', (v, s: string) => v + s)
 * wrapped('y')
 * // => 'xy'
 */
export function wrap<TValue, TResult>(
	value: TValue,
	wrapper: (value: TValue, ...args: unknown[]) => TResult,
): (...args: unknown[]) => TResult {
	return (...args: unknown[]): TResult => wrapper(value, ...args);
}

export default wrap;
