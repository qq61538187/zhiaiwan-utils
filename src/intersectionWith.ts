import { intersectionWith } from "./internal/array-native.js";

/**
 * Exposes `intersectionWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `intersectionWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * intersectionWith()
 * // => []
 */
export { intersectionWith };

export default intersectionWith;
