import { toUpper } from "./internal/string-native.js";

/**
 * Exposes `toUpper` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `toUpper`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toUpper()
 * // => ''
 */
export { toUpper };

export default toUpper;
