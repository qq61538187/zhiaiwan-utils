import { isInteger } from "./internal/lang-native.js";

/**
 * Exposes `isInteger` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isInteger`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isInteger(1)
 * // => true
 */
export { isInteger };

export default isInteger;
