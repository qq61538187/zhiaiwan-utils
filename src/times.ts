/**
 * Invokes `iteratee` `n` times and returns an array of results.
 *
 * @since +0.1.0
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {(index: number) => TResult} [iteratee] The function invoked per iteration.
 * @returns {TResult[]} Returns the array of results.
 * @example
 *
 * times(3, String)
 * // => ['0', '1', '2']
 */
export function times<TResult = number>(
	n: number,
	iteratee: (index: number) => TResult = (value: number) =>
		value as unknown as TResult,
): TResult[] {
	const total = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
	const result: TResult[] = [];
	for (let index = 0; index < total; index += 1) {
		result.push(iteratee(index));
	}
	return result;
}

export default times;
