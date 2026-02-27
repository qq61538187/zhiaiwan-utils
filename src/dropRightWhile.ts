import { dropRightWhile } from "./internal/array-native.js";

/**
 * Exposes `dropRightWhile` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `dropRightWhile`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * dropRightWhile()
 * // => []
 */
export { dropRightWhile };

export default dropRightWhile;
