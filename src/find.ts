import { find } from "./internal/collection-native.js";

/**
 * Exposes `find` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `find`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * find()
 * // => undefined
 */
export { find };

export default find;
