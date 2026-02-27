/**
 * Converts the first character of `string` to upper case and the remaining to lower case.
 *
 * @since +0.1.0
 * @category String
 * @param {string} input The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
export function capitalize(input: string): string {
	const value = String(input);
	if (value.length === 0) {
		return "";
	}
	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export default capitalize;
