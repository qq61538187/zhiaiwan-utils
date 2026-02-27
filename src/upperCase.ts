import { upperCase } from "./internal/string-native.js";

/**
 * Exposes `upperCase` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `upperCase`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * upperCase()
 * // => ''
 */
export { upperCase };

export default upperCase;
