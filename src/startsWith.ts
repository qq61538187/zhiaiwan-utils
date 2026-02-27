import { startsWith } from "./internal/string-native.js";

/**
 * Exposes `startsWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `startsWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * startsWith()
 * // => true
 */
export { startsWith };

export default startsWith;
