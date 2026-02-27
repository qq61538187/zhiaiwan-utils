import { uniq } from "./internal/array-native.js";

/**
 * Exposes `uniq` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `uniq`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * uniq()
 * // => []
 */
export { uniq };

export default uniq;
