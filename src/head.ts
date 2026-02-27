import { head } from "./internal/array-native.js";

/**
 * Exposes `head` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `head`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * head(1)
 * // => undefined
 */
export { head };

export default head;
