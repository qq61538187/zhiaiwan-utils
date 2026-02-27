import { reduceRight } from "./internal/collection-native.js";

/**
 * Exposes `reduceRight` as a public API method.
 *
 * This wrapper forwards all received arguments to the internal implementation.
 *
 * @since +0.1.0
 * @category Collection
 * @param {...unknown} args The arguments forwarded to `reduceRight`.
 * @returns {unknown} Returns the forwarded result.
 * @example
 *
 * reduceRight()
 * // => undefined
 */
export { reduceRight };

export default reduceRight;
