import { sampleSize } from "./internal/collection-native.js";

/**
 * Exposes `sampleSize` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `sampleSize`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sampleSize()
 * // => []
 */
export { sampleSize };

export default sampleSize;
