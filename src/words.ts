import { words } from "./internal/string-native.js";

/**
 * Exposes `words` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `words`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * words()
 * // => []
 */
export { words };

export default words;
