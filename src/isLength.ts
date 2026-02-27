import { isLength } from "./internal/lang-native.js";

/**
 * Exposes `isLength` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isLength`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isLength(1)
 * // => true
 */
export { isLength };

export default isLength;
