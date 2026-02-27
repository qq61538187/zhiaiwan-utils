import { toSafeInteger } from "./internal/lang-native.js";

/**
 * Exposes `toSafeInteger` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toSafeInteger`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toSafeInteger(3.8)
 * // => 3
 */
export { toSafeInteger };

export default toSafeInteger;
