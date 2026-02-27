import { compact } from "./internal/array-native.js";

/**
 * Exposes `compact` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `compact`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
export { compact };

export default compact;
