import { trimStart } from "./internal/string-native.js";

/**
 * Exposes `trimStart` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `trimStart`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * trimStart()
 * // => ''
 */
export { trimStart };

export default trimStart;
