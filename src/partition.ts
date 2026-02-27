import { partition } from "./internal/collection-native.js";

/**
 * Exposes `partition` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `partition`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * partition()
 * // => [ [], [] ]
 */
export { partition };

export default partition;
