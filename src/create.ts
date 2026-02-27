import { create } from "./internal/object-native.js";

/**
 * Exposes `create` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `create`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * const proto = { a: 1 }
 * const obj = create(proto)
 * Object.getPrototypeOf(obj) === proto
 * // => true
 */
export { create };

export default create;
