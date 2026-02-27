import { padEnd } from "./internal/string-native.js";

/**
 * Exposes `padEnd` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `padEnd`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * padEnd()
 * // => ''
 */
export { padEnd };

export default padEnd;
