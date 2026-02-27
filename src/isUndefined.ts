import { isUndefined } from "./internal/lang-native.js";

/**
 * Exposes `isUndefined` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isUndefined`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isUndefined(1)
 * // => false
 */
export { isUndefined };

export default isUndefined;
