import { startCase } from "./internal/string-native.js";

/**
 * Exposes `startCase` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category String
 * @param {...unknown} args The arguments forwarded to `startCase`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * startCase()
 * // => ''
 */
export { startCase };

export default startCase;
