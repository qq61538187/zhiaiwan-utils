import { xorWith } from "./internal/array-native.js";

/**
 * Exposes `xorWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `xorWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * xorWith()
 * // => []
 */
export { xorWith };

export default xorWith;
