/**
 * Divides `dividend` by `divisor`.
 *
 * Non-numeric inputs are converted with `Number(...)`.
 *
 * @since +0.1.0
 * @category Math
 * @param {number} dividend The number to divide.
 * @param {number} divisor The number to divide by.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(8, 2)
 * // => 4
 */
export function divide(dividend: number, divisor: number): number {
	return Number(dividend) / Number(divisor);
}

export default divide;
