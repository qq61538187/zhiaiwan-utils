import { lowerFirst } from "./internal/string-native.js";

/**
 * Exposes `lowerFirst` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `lowerFirst`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * lowerFirst()
 * // => ''
 */
export { lowerFirst };

export default lowerFirst;
