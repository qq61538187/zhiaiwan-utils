import { forOwnRight } from "./internal/object-native.js";

/**
 * Exposes `forOwnRight` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `forOwnRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * forOwnRight(1)
 * // => 1
 */
export { forOwnRight };

export default forOwnRight;
