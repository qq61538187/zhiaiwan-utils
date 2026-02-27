import { zipObjectDeep } from "./internal/array-native.js";

/**
 * Exposes `zipObjectDeep` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `zipObjectDeep`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * zipObjectDeep(1)
 * // => {}
 */
export { zipObjectDeep };

export default zipObjectDeep;
