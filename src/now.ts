/**
 * Gets the current Unix timestamp in milliseconds.
 *
 * @since +0.1.0
 * @category Date
 * @param {never} _ This method accepts no arguments.
 * @returns {number} Returns the current timestamp.
 * @example
 *
 * now()
 * // => 1710000000000
 */
export function now(): number {
	return Date.now();
}

export default now;
