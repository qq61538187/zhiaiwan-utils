import { zipObject } from "./internal/array-native.js";

/**
 * Exposes `zipObject` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Array
 * @param {...unknown} args The arguments forwarded to `zipObject`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * zipObject([1, 2, 3], 2)
 * // => { '1': undefined, '2': undefined, '3': undefined }
 */
export { zipObject };

export default zipObject;
