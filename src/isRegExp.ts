import { isRegExp } from "./internal/lang-native.js";

/**
 * Exposes `isRegExp` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isRegExp`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isRegExp(1)
 * // => false
 */
export { isRegExp };

export default isRegExp;
