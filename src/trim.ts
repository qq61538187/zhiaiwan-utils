const escapeRegex = (value: string) =>
	value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @since +0.1.0
 * @category String
 * @param {string} input The string to trim.
 * @param {string} [chars] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * trim('-_-abc-_-', '_-')
 * // => 'abc'
 */
export function trim(input: string, chars?: string): string {
	const value = String(input);
	if (value.length === 0) {
		return "";
	}
	if (chars === undefined) {
		return value.trim();
	}
	if (chars === "") {
		return value;
	}
	const pattern = new RegExp(
		`^[${escapeRegex(chars)}]+|[${escapeRegex(chars)}]+$`,
		"g",
	);
	return value.replace(pattern, "");
}

export default trim;
