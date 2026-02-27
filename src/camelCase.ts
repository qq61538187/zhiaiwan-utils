const camelCaseWords = (input: string): string[] =>
	String(input)
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((word) => word.toLowerCase());

/**
 * Converts `string` to camel case.
 *
 * Word boundaries are detected from separators and transitions between lower/upper letters.
 *
 * @since +0.1.0
 * @category String
 * @param {string} input The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 */
export function camelCase(input: string): string {
	const words = camelCaseWords(input);
	if (words.length === 0) {
		return "";
	}
	return words
		.map((word, index) =>
			index === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`,
		)
		.join("");
}

export default camelCase;
