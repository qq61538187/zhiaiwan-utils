import { isBuffer } from "./internal/lang-native.js";

/**
 * Exposes `isBuffer` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isBuffer`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isBuffer(1)
 * // => false
 */
export { isBuffer };

export default isBuffer;
