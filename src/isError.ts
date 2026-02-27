import { isError } from "./internal/lang-native.js";

/**
 * Exposes `isError` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isError`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isError(1)
 * // => false
 */
export { isError };

export default isError;
