import { unionWith } from "./internal/array-native.js";

/**
 * Exposes `unionWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `unionWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * unionWith()
 * // => []
 */
export { unionWith };

export default unionWith;
