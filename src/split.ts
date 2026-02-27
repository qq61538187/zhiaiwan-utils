import { split } from "./internal/string-native.js";

/**
 * Exposes `split` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `split`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * split()
 * // => [ '' ]
 */
export { split };

export default split;
