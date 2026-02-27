import { uniqWith } from "./internal/array-native.js";

/**
 * Exposes `uniqWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `uniqWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * uniqWith('a')
 * // => [ 'a' ]
 */
export { uniqWith };

export default uniqWith;
