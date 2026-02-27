import { repeat } from "./internal/string-native.js";

/**
 * Exposes `repeat` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `repeat`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * repeat()
 * // => ''
 */
export { repeat };

export default repeat;
