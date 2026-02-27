import { padStart } from "./internal/string-native.js";

/**
 * Exposes `padStart` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `padStart`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * padStart()
 * // => ''
 */
export { padStart };

export default padStart;
