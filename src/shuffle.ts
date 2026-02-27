import { shuffle } from "./internal/collection-native.js";

/**
 * Exposes `shuffle` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `shuffle`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * shuffle()
 * // => []
 */
export { shuffle };

export default shuffle;
