import { sortBy } from "./internal/collection-native.js";

/**
 * Exposes `sortBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `sortBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * sortBy()
 * // => []
 */
export { sortBy };

export default sortBy;
