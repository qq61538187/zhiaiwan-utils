import { pad } from "./internal/string-native.js";

/**
 * Exposes `pad` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `pad`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * pad()
 * // => ''
 */
export { pad };

export default pad;
