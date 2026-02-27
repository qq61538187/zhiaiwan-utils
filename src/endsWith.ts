import { endsWith } from "./internal/string-native.js";

/**
 * Exposes `endsWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `endsWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * endsWith()
 * // => true
 */
export { endsWith };

export default endsWith;
