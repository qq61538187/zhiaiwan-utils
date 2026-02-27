import { lowerCase } from "./internal/string-native.js";

/**
 * Exposes `lowerCase` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `lowerCase`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * lowerCase()
 * // => ''
 */
export { lowerCase };

export default lowerCase;
