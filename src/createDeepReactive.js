/**
 * 创建一个深度响应式的代理对象，监听所有属性变更、数组操作、删除等。
 * 使用proxy代理实现不支持ie11以下
 * @since 1.0.3
 * @category Object
 * @param {Object} obj - 需要代理的原始对象。
 * @param {string} path - 当前属性路径（内部递归使用，一般初始为空字符串）。
 * @param {Function} callBack - 当属性变更时触发的回调函数 (path, newValue, oldValue)。
 * @param {Array<string>} internalPrivacyList - 不触发监听的路径列表（白名单）。
 * @param {number} maxDepth - 最大递归深度，防止栈溢出。
 * @returns {Proxy} - 返回代理后的响应式对象。
 */
function createDeepReactive(
  obj,
  path,
  callBack,
  internalPrivacyList,
  maxDepth,
) {
  path = path || '';
  callBack = callBack || function () {};
  internalPrivacyList = internalPrivacyList || [];
  maxDepth = typeof maxDepth === 'number' ? maxDepth : 50;

  var proxyCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;

  /**
   * 构建新的路径（统一使用 ["key"] 格式）。
   * @param {string} path - 当前路径
   * @param {string|number} key - 当前键名
   * @returns {string} - 新路径
   */
  function buildPath(path, key) {
    return path
      ? path + '[' + JSON.stringify(key) + ']'
      : '[' + JSON.stringify(key) + ']';
  }

  /**
   * 判断路径是否属于不需要监听的私有路径列表。
   * @param {string} fullPath
   * @returns {boolean}
   */
  function isPrivacyPath(fullPath) {
    for (var i = 0; i < internalPrivacyList.length; i++) {
      if (internalPrivacyList[i] === fullPath) return true;
    }
    return false;
  }

  /**
   * 内部创建递归代理对象。
   * @param {Object} obj - 当前对象
   * @param {string} path - 当前路径
   * @param {number} depth - 当前递归深度
   * @returns {Proxy}
   */
  function internalCreate(obj, path, depth) {
    if (proxyCache && proxyCache.has(obj)) return proxyCache.get(obj);
    if (typeof obj !== 'object' || obj === null) return obj;
    if (depth > maxDepth) return obj;

    var handler = {
      get: function (target, key, receiver) {
        if (typeof key === 'symbol') return target[key];

        var result = target[key];
        var newPath = buildPath(path, key);

        // 包装数组方法
        if (
          typeof result === 'function' &&
          Object.prototype.toString.call(target) === '[object Array]'
        ) {
          var mutatingMethods = [
            'push',
            'pop',
            'shift',
            'unshift',
            'splice',
            'sort',
            'reverse',
          ];
          if (mutatingMethods.indexOf(key) !== -1) {
            return function () {
              var oldSnapshot = target.slice();
              var returnValue = result.apply(target, arguments);
              if (!isPrivacyPath(path)) {
                callBack(path, target, oldSnapshot);
              }
              return returnValue;
            };
          }
        }

        if (typeof result === 'object' && result !== null) {
          return internalCreate(result, newPath, depth + 1);
        }

        return result;
      },

      set: function (target, key, value, receiver) {
        if (typeof key === 'symbol') {
          target[key] = value;
          return true;
        }

        var newPath = buildPath(path, key);
        if (isPrivacyPath(newPath)) return false;

        var oldValue = target[key];
        var result = Reflect.set(target, key, value, receiver);

        if (oldValue !== value) {
          callBack(newPath, value, oldValue);
        }

        return result;
      },

      deleteProperty: function (target, key) {
        var newPath = buildPath(path, key);
        if (isPrivacyPath(newPath)) return false;

        var oldValue = target[key];
        var result = delete target[key];

        if (result) {
          callBack(newPath, undefined, oldValue);
        }

        return result;
      },
    };

    var proxy = typeof Proxy !== 'undefined' ? new Proxy(obj, handler) : obj;
    if (proxyCache) proxyCache.set(obj, proxy);
    return proxy;
  }

  return internalCreate(obj, path, 0);
}
