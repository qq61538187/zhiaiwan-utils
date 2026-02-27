import { forIn } from "./internal/object-native.js";

/**
 * Exposes `forIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `forIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * forIn()
 * // => undefined
 */
export { forIn };

export default forIn;
