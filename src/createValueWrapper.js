var LazyWrapper = require('./_LazyWrapper.js');
var ValueWrapper = require('./_ValueWrapper.js');
var baseWrapper = require('./_baseWrapper.js');
var isArray = require('./isArray.js');
var isObjectLike = require('./isObjectLike.js');
var wrapperClone = require('./_wrapperClone.js');

/** 用于原生方法引用的对象原型 */
var objectProto = Object.prototype;

/** 用于检查对象自身属性 */
/*eslint no-shadow-restricted-names: ["error", { "reportGlobalThis": true }]*/
var hasOwn = objectProto.hasOwnProperty;

/**
 * 创建值包装器实例
 * @param {*} value - 需要包装的值
 * @returns {Object} 返回包装器实例
 */
function createValueWrapper(value) {
    // 处理类对象但不是数组和LazyWrapper的情况
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        // 如果已经是ValueWrapper实例则直接返回
        if (value instanceof ValueWrapper) {
            return value;
        }
        // 如果对象有__wrapped__属性则克隆包装器
        if (hasOwn.call(value, '__wrapped__')) {
            return wrapperClone(value);
        }
    }
    // 创建新的包装器实例
    return new ValueWrapper(value);
}

// 确保包装器继承自baseWrapper
createValueWrapper.prototype = baseWrapper.prototype;
createValueWrapper.prototype.constructor = createValueWrapper;
