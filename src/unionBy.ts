import { unionBy } from "./internal/array-native.js";

/**
 * Exposes `unionBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `unionBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * unionBy()
 * // => []
 */
export { unionBy };

export default unionBy;
