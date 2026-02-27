import { isMap } from "./internal/lang-native.js";

/**
 * Exposes `isMap` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `isMap`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * isMap(1)
 * // => false
 */
export { isMap };

export default isMap;
