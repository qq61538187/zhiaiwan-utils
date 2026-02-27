/**
 * Adds two numbers.
 *
 * Non-numeric inputs are converted with `Number(...)` before calculation.
 *
 * @since +0.1.0
 * @category Math
 * @param {number} augend The first number to add.
 * @param {number} addend The second number to add.
 * @returns {number} Returns the sum.
 * @example
 *
 * add(4, 6)
 * // => 10
 */
export function add(augend: number, addend: number): number {
	return Number(augend) + Number(addend);
}

export default add;
