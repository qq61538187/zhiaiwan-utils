import { concat } from "./internal/array-native.js";

/**
 * Exposes `concat` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `concat`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * concat()
 * // => []
 */
export { concat };

export default concat;
