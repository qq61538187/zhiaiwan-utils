import { unzipWith } from "./internal/array-native.js";

/**
 * Exposes `unzipWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `unzipWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * unzipWith([1, 2, 3])
 * // => []
 */
export { unzipWith };

export default unzipWith;
