/**
 * Checks whether `value` is within the half-open range `[start, end)`.
 *
 * If `end` is omitted, the range becomes `[0, start)`.
 * Bounds are normalized when `start > end`.
 *
 * @since +0.1.0
 * @category Number
 * @param {number} value The number to check.
 * @param {number} start The range start, or range end when `end` is omitted.
 * @param {number} [end] The range end (exclusive).
 * @returns {boolean} Returns `true` when value is in range.
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 */
export function inRange(value: number, start: number, end?: number): boolean {
	let begin = Number(start);
	let finish = end === undefined ? begin : Number(end);
	if (end === undefined) {
		begin = 0;
	}
	if (begin > finish) {
		const temp = begin;
		begin = finish;
		finish = temp;
	}
	const n = Number(value);
	return n >= begin && n < finish;
}

export default inRange;
