import { isArrayBuffer } from "./internal/lang-native.js";

/**
 * Exposes `isArrayBuffer` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isArrayBuffer`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isArrayBuffer(1)
 * // => false
 */
export { isArrayBuffer };

export default isArrayBuffer;
