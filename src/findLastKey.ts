import { findLastKey } from "./internal/object-native.js";

/**
 * Exposes `findLastKey` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `findLastKey`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * findLastKey()
 * // => undefined
 */
export { findLastKey };

export default findLastKey;
