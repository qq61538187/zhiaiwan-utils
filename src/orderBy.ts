import { orderBy } from "./internal/collection-native.js";

/**
 * Exposes `orderBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `orderBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * orderBy()
 * // => []
 */
export { orderBy };

export default orderBy;
