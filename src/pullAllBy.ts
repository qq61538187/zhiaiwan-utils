import { pullAllBy } from "./internal/array-native.js";

/**
 * Exposes `pullAllBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `pullAllBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * pullAllBy([1, 2], [2, 3])
 * // => []
 */
export { pullAllBy };

export default pullAllBy;
