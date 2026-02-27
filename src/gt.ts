import { gt } from "./internal/lang-native.js";

/**
 * Exposes `gt` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `gt`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * gt(3, 1)
 * // => true
 */
export { gt };

export default gt;
