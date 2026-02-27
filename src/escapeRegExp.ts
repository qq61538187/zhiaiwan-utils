import { escapeRegExp } from "./internal/string-native.js";

/**
 * Exposes `escapeRegExp` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `escapeRegExp`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * escapeRegExp()
 * // => ''
 */
export { escapeRegExp };

export default escapeRegExp;
