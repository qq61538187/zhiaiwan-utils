import { replace } from "./internal/string-native.js";

/**
 * Exposes `replace` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `replace`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * replace()
 * // => ''
 */
export { replace };

export default replace;
