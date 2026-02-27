import { toInteger } from "./internal/lang-native.js";

/**
 * Exposes `toInteger` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toInteger`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toInteger(3.8)
 * // => 3
 */
export { toInteger };

export default toInteger;
