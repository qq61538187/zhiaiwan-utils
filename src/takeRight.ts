import { takeRight } from "./internal/array-native.js";

/**
 * Exposes `takeRight` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `takeRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * takeRight()
 * // => []
 */
export { takeRight };

export default takeRight;
