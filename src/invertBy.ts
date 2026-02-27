import { invertBy } from "./internal/object-native.js";

/**
 * Exposes `invertBy` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Object
 * @param {...unknown} args The arguments forwarded to `invertBy`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * invertBy(1)
 * // => {}
 */
export { invertBy };

export default invertBy;
