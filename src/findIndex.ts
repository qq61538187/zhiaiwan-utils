import { findIndex } from "./internal/array-native.js";

/**
 * Exposes `findIndex` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `findIndex`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * findIndex()
 * // => -1
 */
export { findIndex };

export default findIndex;
