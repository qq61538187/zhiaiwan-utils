import { indexOf } from "./internal/array-native.js";

/**
 * Exposes `indexOf` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `indexOf`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * indexOf()
 * // => -1
 */
export { indexOf };

export default indexOf;
