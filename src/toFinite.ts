import { toFinite } from "./internal/lang-native.js";

/**
 * Exposes `toFinite` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toFinite`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toFinite("3.2")
 * // => 3.2
 */
export { toFinite };

export default toFinite;
