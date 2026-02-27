const snakeCaseWords = (input: string): string[] =>
	String(input)
		.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
		.replace(/[^a-zA-Z0-9]+/g, " ")
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.map((word) => word.toLowerCase());

/**
 * Converts `string` to snake case.
 *
 * @since +0.1.0
 * @category String
 * @param {string} input The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 */
export function snakeCase(input: string): string {
	return snakeCaseWords(input).join("_");
}

export default snakeCase;
