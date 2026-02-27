import { dropRight } from "./internal/array-native.js";

/**
 * Exposes `dropRight` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `dropRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * dropRight()
 * // => []
 */
export { dropRight };

export default dropRight;
