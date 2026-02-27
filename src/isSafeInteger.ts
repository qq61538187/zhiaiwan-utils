import { isSafeInteger } from "./internal/lang-native.js";

/**
 * Exposes `isSafeInteger` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isSafeInteger`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isSafeInteger(1)
 * // => true
 */
export { isSafeInteger };

export default isSafeInteger;
