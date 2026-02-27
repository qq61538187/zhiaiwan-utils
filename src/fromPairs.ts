import { fromPairs } from "./internal/array-native.js";

/**
 * Exposes `fromPairs` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `fromPairs`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * fromPairs()
 * // => {}
 */
export { fromPairs };

export default fromPairs;
