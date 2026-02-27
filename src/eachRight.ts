import { forEachRight } from "./forEachRight.js";

/**
 * Alias of forEachRight. Thin wrapper around method eachRight/forEachRight.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `eachRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * eachRight([1, 2], (v) => v)
 * // => [1, 2]
 */
export const eachRight = forEachRight;
export default eachRight;
