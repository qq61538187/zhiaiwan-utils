import { toPairsIn } from "./internal/object-native.js";

/**
 * Exposes `toPairsIn` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `toPairsIn`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toPairsIn()
 * // => []
 */
export { toPairsIn };

export default toPairsIn;
