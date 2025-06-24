/**
 * 将源数组的值复制到目标数组中
 *
 * @private
 * @param {Array} source - 要复制的源数组
 * @param {Array} [array=[]] - 要复制到的目标数组（默认为空数组）
 * @returns {Array} 返回复制后的目标数组
 */
function copyArray(source, array) {
    var index = -1;
    var length = source.length;

    var result = array || Array(length); // 使用新变量而不是修改参数
    // 遍历源数组进行复制
    while (++index < length) {
        result[index] = source[index];
    }
    return result;
}
