import { toPlainObject } from "./internal/lang-native.js";

/**
 * Exposes `toPlainObject` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `toPlainObject`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * toPlainObject(Object.create({ a: 1 }))
 * // => { a: 1 }
 */
export { toPlainObject };

export default toPlainObject;
