import { isNative } from "./internal/lang-native.js";

/**
 * Exposes `isNative` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isNative`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isNative(1)
 * // => false
 */
export { isNative };

export default isNative;
