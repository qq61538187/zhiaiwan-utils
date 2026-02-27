import { forOwn } from "./internal/object-native.js";

/**
 * Exposes `forOwn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `forOwn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * forOwn(1)
 * // => 1
 */
export { forOwn };

export default forOwn;
