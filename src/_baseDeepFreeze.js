// 改进的深冻结实现（兼容旧浏览器）
function baseDeepFreeze(obj) {
    // 参数类型检查
    if (!isObject(obj)) {
        return obj;
    }

    // 使用内部函数处理递归和循环引用
    function deepFreezeInner(o, seen) {
        // 检查循环引用
        if (seen.has(o)) return o;
        seen.add(o);

        // 尝试冻结对象（可能失败如密封对象）
        try {
            Object.freeze(o);
        } catch (e) {
            // 非严格模式下冻结失败时继续处理
        }

        var props = Object.getOwnPropertyNames(o);
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            var desc = Object.getOwnPropertyDescriptor(o, prop);

            // 跳过不可配置属性
            if (desc && desc.configurable === false) continue;

            // 处理访问器属性
            if (desc && (desc.get || desc.set)) {
                try {
                    Object.defineProperty(o, prop, {
                        configurable: false,
                        enumerable: desc.enumerable,
                        get: desc.get,
                        set: desc.set
                    });
                } catch (e) {
                    // 设置失败时跳过
                }
                continue;
            }

            // 冻结嵌套对象
            var value = o[prop];
            if (value && typeof value === 'object') {
                deepFreezeInner(value, seen);
            }
        }

        // 处理 Symbol 属性（如果支持）
        if (typeof Object.getOwnPropertySymbols === 'function') {
            var symbols = Object.getOwnPropertySymbols(o);
            for (var j = 0; j < symbols.length; j++) {
                var sym = symbols[j];
                var symValue = o[sym];
                if (symValue && typeof symValue === 'object') {
                    deepFreezeInner(symValue, seen);
                }
            }
        }

        return o;
    }

    // 创建 WeakSet 的替代方案（兼容旧浏览器）
    var seen =
        typeof WeakSet === 'function'
            ? new WeakSet()
            : {
                  set: [],
                  has: function (obj) {
                      return this.set.indexOf(obj) !== -1;
                  },
                  add: function (obj) {
                      this.set.push(obj);
                  }
              };

    return deepFreezeInner(obj, seen);
}
