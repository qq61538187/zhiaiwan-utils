/**
 * Attempts to invoke `fn`, returning either the result or the caught error.
 *
 * @since +0.1.0
 * @category Util
 * @param {(...args: TArgs) => TResult} fn The function to attempt.
 * @param {...TArgs} args The arguments to invoke `fn` with.
 * @returns {TResult | Error} Returns the function result or error object.
 * @example
 *
 * attempt(JSON.parse, '{bad json}')
 * // => SyntaxError(...)
 */
export function attempt<TArgs extends readonly unknown[], TResult>(
	fn: (...args: TArgs) => TResult,
	...args: TArgs
): TResult | Error {
	try {
		return fn(...args);
	} catch (error) {
		return error instanceof Error ? error : new Error(String(error));
	}
}

export default attempt;
