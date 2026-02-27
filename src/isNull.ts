import { isNull } from "./internal/lang-native.js";

/**
 * Exposes `isNull` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isNull`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isNull(1)
 * // => false
 */
export { isNull };

export default isNull;
