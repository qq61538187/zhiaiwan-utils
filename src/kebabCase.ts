const kebabCaseWords = (input: string): string[] =>
	String(input)
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((word) => word.toLowerCase());

/**
 * Converts `string` to kebab case.
 *
 * @since +0.1.0
 * @category String
 * @param {string} input The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 */
export function kebabCase(input: string): string {
	return kebabCaseWords(input).join("-");
}

export default kebabCase;
