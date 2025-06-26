/**
 * 检查 `value` 是否为 ECMAScript 语言类型中的 `Object` 类型。
 * (包括：数组、函数、普通对象、正则表达式、`new Number(0)`、`new String('')` 等)
 *
 * @static
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果 `value` 是对象类型则返回 `true`，否则返回 `false`
 * @example
 *
 */
function isObject(value) {
  // 获取值的类型
  var type = typeof value;
  // 检查值不为 null 且类型是 object 或 function
  return value != null && (type === 'object' || type === 'function');
}
