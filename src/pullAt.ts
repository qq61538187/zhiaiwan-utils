import { pullAt } from "./internal/array-native.js";

/**
 * Exposes `pullAt` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `pullAt`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * pullAt([1, 2], [2, 3])
 * // => []
 */
export { pullAt };

export default pullAt;
