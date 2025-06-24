var baseCreate = require('./_baseCreate.js');
var baseWrapper = require('./_baseWrapper.js');

/** 用于表示数组的最大可能长度和索引值 */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * 创建一个惰性求值包装对象
 *
 * @private
 * @constructor
 * @param {*} value - 需要包装的值
 */
function LazyWrapper(value) {
    this.__wrapped__ = value; // 被包装的原始值
    this.__actions__ = []; // 待执行的函数操作队列
    this.__dir__ = 1; // 迭代方向（1表示正向）
    this.__filtered__ = false; // 是否已过滤的标志
    this.__iteratees__ = []; // 迭代函数集合
    this.__takeCount__ = MAX_ARRAY_LENGTH; // 最大取值数量限制
    this.__views__ = []; // 视图操作集合
}

// 确保 LazyWrapper 继承自 baseWrapper
LazyWrapper.prototype = baseCreate(baseWrapper.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
