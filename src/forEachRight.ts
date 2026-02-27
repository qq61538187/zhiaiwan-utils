import { forEachRight } from "./internal/collection-native.js";

/**
 * Exposes `forEachRight` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `forEachRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * forEachRight()
 * // => undefined
 */
export { forEachRight };

export default forEachRight;
