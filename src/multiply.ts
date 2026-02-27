/**
 * Multiplies two numbers.
 *
 * Non-numeric inputs are converted with `Number(...)` before calculation.
 *
 * @since +0.1.0
 * @category Math
 * @param {number} multiplier The first number.
 * @param {number} multiplicand The second number.
 * @returns {number} Returns the product.
 * @example
 *
 * multiply(3, 7)
 * // => 21
 */
export function multiply(multiplier: number, multiplicand: number): number {
	return Number(multiplier) * Number(multiplicand);
}

export default multiply;
