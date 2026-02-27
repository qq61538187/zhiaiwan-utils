import { toPairs } from "./internal/object-native.js";

/**
 * Exposes `toPairs` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `toPairs`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toPairs(1)
 * // => []
 */
export { toPairs };

export default toPairs;
