import { cloneDeepWith } from "./internal/lang-native.js";

/**
 * Exposes `cloneDeepWith` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Lang
 * @param {...unknown} args The arguments forwarded to `cloneDeepWith`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * cloneDeepWith({ a: 1 }, (value) => (typeof value === "number" ? value + 1 : undefined))
 * // => { a: 2 }
 */
export { cloneDeepWith };

export default cloneDeepWith;
