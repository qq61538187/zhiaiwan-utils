/**
 * 检查 `value` 是否为类对象值。如果一个值不是 `null` 并且 `typeof` 结果为 "object"，
 * 则认为它是类对象值。
 *
 * @static
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是类对象值则返回 `true`，否则返回 `false`
 * @example
 *
 */
function isObjectLike(value) {
  // 检查值不为 null/undefined 且 typeof 结果为 "object"
  return value != null && typeof value === 'object';
}
