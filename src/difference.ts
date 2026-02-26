/**
 * Creates an array of values from `array` not included in `values`.
 *
 * If `values` is empty, a shallow copy of `array` is returned.
 *
 * @since +0.1.0
 * @category Array
 * @param {TArray} array The source array.
 * @param {TValueArray} values The values to exclude.
 * @returns {Array<Exclude<TArray[number], TValueArray[number]>>} Returns the filtered array.
 * @example
 *
 * difference([1, 2, 3, 4] as const, [2, 4] as const)
 * // => [1, 3]
 */
export function difference<
  const TArray extends readonly unknown[],
  const TValueArray extends readonly unknown[]
>(
  array: TArray,
  values: TValueArray
): Array<Exclude<TArray[number], TValueArray[number]>> {
  if (!Array.isArray(array)) {
    return []
  }
  if (!Array.isArray(values) || values.length === 0) {
    return [...array] as Array<Exclude<TArray[number], TValueArray[number]>>
  }
  const excludes = new Set(values)
  return array.filter((item) => !excludes.has(item)) as Array<Exclude<TArray[number], TValueArray[number]>>
}

export default difference
