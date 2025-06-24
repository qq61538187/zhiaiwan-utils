/**
 * 获取对象指定键的值
 *
 * @private
 * @param {Object} [object] - 要查询的对象（可选）
 * @param {string} key - 要获取的属性键名
 * @returns {*} 返回属性值，若对象不存在则返回 undefined
 */
function getValue(object, key) {
    // 对象为 null 或 undefined 时返回 undefined，否则返回对应属性值
    return object == null ? undefined : object[key];
}
