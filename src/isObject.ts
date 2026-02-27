import { isObject } from "./internal/lang-native.js";

/**
 * Exposes `isObject` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isObject`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isObject(1)
 * // => false
 */
export { isObject };

export default isObject;
