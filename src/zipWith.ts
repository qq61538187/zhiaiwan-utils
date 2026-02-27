import { zipWith } from "./internal/array-native.js";

/**
 * Exposes `zipWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `zipWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * zipWith()
 * // => []
 */
export { zipWith };

export default zipWith;
