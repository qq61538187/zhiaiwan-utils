import { zip } from "./internal/array-native.js";

/**
 * Exposes `zip` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `zip`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * zip()
 * // => []
 */
export { zip };

export default zip;
