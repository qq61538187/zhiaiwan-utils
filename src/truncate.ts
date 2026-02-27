import { truncate } from "./internal/string-native.js";

/**
 * Exposes `truncate` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `truncate`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * truncate()
 * // => ''
 */
export { truncate };

export default truncate;
