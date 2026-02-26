/**
 * Splits an array into groups the length of `size`.
 *
 * Non-integer values are truncated and values less than 1 return an empty array.
 *
 * @since +0.1.0
 * @category Array
 * @param {readonly T[]} array The array to process.
 * @param {number} size The length of each chunk.
 * @returns {T[][]} Returns the array of chunks.
 * @example
 *
 * chunk([1, 2, 3, 4, 5], 2)
 * // => [[1, 2], [3, 4], [5]]
 */
export function chunk<T>(array: readonly T[], size: number): T[][] {
  const normalizedSize = Number.isFinite(size) ? Math.trunc(size) : 0
  if (!Array.isArray(array) || normalizedSize <= 0) {
    return []
  }
  const result: T[][] = []
  for (let i = 0; i < array.length; i += normalizedSize) {
    result.push(array.slice(i, i + normalizedSize))
  }
  return result
}

export default chunk
