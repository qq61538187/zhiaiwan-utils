const pkg = require('../package.json');
function Hash(properties) {
  // 创建一个纯净的哈希对象（无原型链）
  const hash = Object.create(null);
  // 如果提供了 properties 参数，复制其自有可枚举属性
  if (properties != null) {
    // 使用 Object.keys 获取自有可枚举属性
    const keys = Object.keys(properties);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      hash[key] = properties[key];
    }
  }
  return hash;
}

const VERSION = pkg.version;
const umdModuleName = 'ZhiAiWanUtils';
const esInitContentCategoryBeforeFlag = '<%insert-category-before%>';
const esInitContentCategoryAfterFlag = '<%insert-category-after%>';
const esInitContent = `
${esInitContentCategoryBeforeFlag}
const ${umdModuleName} =  {};
var VERSION = '${VERSION}';

${umdModuleName}.VERSION = VERSION;
${esInitContentCategoryAfterFlag}

export default ${umdModuleName};
`;


const cjsInitContent = `
(function() {
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function('return this')();
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
  
  <%insert-function-before%>

  /**
  * 链式方法基类
  */
 function UtilsInstance() {
    if (!(this instanceof UtilsInstance)) {
      return new UtilsInstance();
    }

    this.VERSION = '${VERSION}';
    this.__chain__ = false;
    this.__wrapped__ = null;
  }
  // 链式调用入口
  UtilsInstance.prototype.chain = function(value) {
    this.__chain__ = true;
    this.__wrapped__ = value;
    return this;
  };
  
  // 值提取方法
  UtilsInstance.prototype.value = function() {
    var result = this.__wrapped__;
    this.__wrapped__ = null;
    this.__chain__ = false;
    return result;
  };

  var ${umdModuleName} = new UtilsInstance();
  // 添加工具方法
  <%insert-function-after%>
   if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    root.${umdModuleName} = ${umdModuleName};
    define(function() {
      return ${umdModuleName};
    });
  }
  else if (freeModule) {
    (freeModule.exports = ${umdModuleName}).${umdModuleName} = ${umdModuleName};
    freeExports.${umdModuleName} = ${umdModuleName};
  }
  else {
    root.${umdModuleName} = ${umdModuleName};
  }
}.call(this));
`
module.exports = {
  VERSION,
  category: new Hash({
    verification: ['isObject', 'isNull', 'isArray', 'isObjectLike','isHexColor','isDarkColor'],
    string: ['highlightTextSafely'],
    random: ['randomIPs','randomPasswords']
  }),
  esInitContent,
  esInitContentCategoryBeforeFlag,
  esInitContentCategoryAfterFlag,
  esPkg: {
    name: 'zhiaiwan-utils-es',
    version: VERSION,
    description: '智ai湾 es版前端常用工具库',
    keywords: 'zhiaiwan, 智ai湾, utils, es ',
    homepage: 'https://github.com/qq61538187',
    bugs: 'https://github.com/qq61538187/zhiaiwan-utils/issues',
    license: 'MIT',
    type: 'module',
    'jsnext:main': `${umdModuleName}.js`,
    main: `${umdModuleName}.js`,
    module: `${umdModuleName}.js`,
    sideEffects: false,
    author: 'Robin Li <61538187@qq.com>',
    scripts: {
      test: 'echo "See https://github.com/qq61538187/zhiaiwan-utils for testing details."',
    },
  },
  cjsInitContent,
  cjsPkg: {
    name: 'zhiaiwan-utils',
    version: VERSION,
    description: '智ai湾 前端常用工具库',
    keywords: 'zhiaiwan, 智ai湾, utils ',
    homepage: 'https://github.com/qq61538187',
    bugs: 'https://github.com/qq61538187/zhiaiwan-utils/issues',
    license: 'MIT',
    main: `${umdModuleName}.js`,
    author: 'Robin Li <61538187@qq.com>',
    scripts: {
      test: 'echo "See https://github.com/qq61538187/zhiaiwan-utils for testing details."',
    },
  },
  umdModuleName,
};
