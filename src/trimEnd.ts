import { trimEnd } from "./internal/string-native.js";

/**
 * Exposes `trimEnd` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `trimEnd`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * trimEnd()
 * // => ''
 */
export { trimEnd };

export default trimEnd;
