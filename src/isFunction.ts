import { isFunction } from "./internal/lang-native.js";

/**
 * Exposes `isFunction` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isFunction`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isFunction(1)
 * // => false
 */
export { isFunction };

export default isFunction;
