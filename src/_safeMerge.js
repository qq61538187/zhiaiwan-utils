var isObject = require('./isObject.js');
var isArray = require('./isArray.js');

/**
 * 安全合并对象
 * @param {Object} target - 目标对象
 * @param {Object} source - 源对象
 * @returns {Object} 合并后的对象
 */
function safeMerge(target, source) {
    // 边界检查
    if (!isObject(target)) return isObject(source) ? source : {};
    if (!isObject(source)) return target;

    // 获取所有属性（包括 Symbol）
    var keys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
        keys = keys.concat(Object.getOwnPropertySymbols(source));
    }

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var targetVal = target[key];
        var sourceVal = source[key];

        // 处理数组类型
        if (isArray(targetVal)) {
            target[key] = isArray(sourceVal) ? sourceVal : targetVal;
            continue;
        }

        // 仅当两个值都是对象时才递归合并
        if (isObject(targetVal)) {
            if (isObject(sourceVal)) {
                target[key] = safeMerge(targetVal, sourceVal);
            } else {
                // 源值不是对象，直接覆盖
                target[key] = sourceVal;
            }
        } else {
            // 目标值不是对象，直接覆盖
            target[key] = sourceVal;
        }
    }

    return target;
}
