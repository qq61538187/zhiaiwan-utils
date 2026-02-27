import { sortedUniqBy } from "./internal/array-native.js";

/**
 * Exposes `sortedUniqBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `sortedUniqBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortedUniqBy(1)
 * // => []
 */
export { sortedUniqBy };

export default sortedUniqBy;
