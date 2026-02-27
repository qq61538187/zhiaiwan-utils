/**
 * Returns a new empty object.
 *
 * @since +0.1.0
 * @category Util
 * @param {never} _ This method accepts no arguments.
 * @returns {Record<string, never>} Returns the new empty object.
 * @example
 *
 * stubObject()
 * // => {}
 */
export function stubObject(): Record<string, never> {
	return {};
}

export default stubObject;
