var isObject = require('./isObject.js');

/** 内置方法引用 */
var objectCreate = Object.create;

/**
 * `create` 方法的基础实现（不支持属性赋值）
 *
 * @private
 * @param {Object} proto - 要继承的原型对象
 * @returns {Object} 返回新创建的对象
 */
var baseCreate = (() => {
    // 空构造函数（用于原型继承）
    function object() {}
    return (proto) => {
        // 如果 proto 不是对象，返回空对象
        if (!isObject(proto)) {
            return {};
        }
        // 优先使用原生 Object.create
        if (objectCreate) {
            return objectCreate(proto);
        }
        // 兼容旧环境实现
        object.prototype = proto; // 设置原型
        var result = new object(); // 创建实例
        object.prototype = undefined; // 重置原型（避免污染）
        return result;
    };
})();
