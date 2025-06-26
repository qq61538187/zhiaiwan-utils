var baseGetType = require('./_baseGetType.js');
/**
 * 检查 `value` 是否为 `null`。
 * @static
 * @category Lang
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 `value` 是 `null` 则返回 `true`，否则返回 `false`。
 * @example
 *
 */
function isNull(value) {
  return baseGetType(value) === 'null';
}
