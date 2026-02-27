let uniqueIdCounter = 0;

/**
 * Generates a unique id string.
 *
 * If `prefix` is provided, the id is appended to it.
 *
 * @since +0.1.0
 * @category Util
 * @param {string} [prefix=''] The value to prefix the id with.
 * @returns {string} Returns the unique id.
 * @example
 *
 * uniqueId('contact_')
 * // => 'contact_1'
 */
export function uniqueId(prefix = ""): string {
	uniqueIdCounter += 1;
	return `${prefix}${uniqueIdCounter}`;
}

export default uniqueId;
