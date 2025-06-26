/**
 *  获取数据类型的基础函数
 * @returns {string} 返回值的类型字符串
 */
function baseGetType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
