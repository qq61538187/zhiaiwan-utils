var baseCreate = require('./_baseCreate.js');
var baseWrapper = require('./_baseWrapper.js');

/**
 * Lodash 包装对象的基类构造函数
 *
 * @private
 * @param {*} value - 需要包装的值
 * @param {boolean} [chainAll] - 是否启用显式方法链式调用
 */
function ValueWrapper(value, chainAll) {
    this.__wrapped__ = value; // 被包装的原始值
    this.__actions__ = []; // 待执行的操作队列
    this.__chain__ = !!chainAll; // 链式调用标志（强制转换为布尔值）
    this.__index__ = 0; // 当前操作索引位置
    this.__values__ = undefined; // 缓存的计算结果值
}

// 设置原型继承关系
ValueWrapper.prototype = baseCreate(baseWrapper.prototype);
// 修复构造函数指向
ValueWrapper.prototype.constructor = ValueWrapper;
