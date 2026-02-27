/**
 * Subtracts `subtrahend` from `minuend`.
 *
 * Non-numeric inputs are converted with `Number(...)` before calculation.
 *
 * @since +0.1.0
 * @category Math
 * @param {number} minuend The number to subtract from.
 * @param {number} subtrahend The number to subtract.
 * @returns {number} Returns the difference.
 * @example
 *
 * subtract(10, 3)
 * // => 7
 */
export function subtract(minuend: number, subtrahend: number): number {
	return Number(minuend) - Number(subtrahend);
}

export default subtract;
