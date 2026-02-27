import { isSet } from "./internal/lang-native.js";

/**
 * Exposes `isSet` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isSet`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isSet(1)
 * // => false
 */
export { isSet };

export default isSet;
