import { takeWhile } from "./internal/array-native.js";

/**
 * Exposes `takeWhile` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `takeWhile`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * takeWhile()
 * // => []
 */
export { takeWhile };

export default takeWhile;
