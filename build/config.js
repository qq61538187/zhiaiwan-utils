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
  import isObject from './isObject.js';
  import ${umdModuleName} from './wrapperLodash.js';

  var VERSION = '${VERSION}';

  ${umdModuleName}.VERSION = VERSION;
  ${umdModuleName}.isObject = isObject;
  ${esInitContentCategoryAfterFlag}

  export default ${umdModuleName};
`;

const cjsInitContent = '';

module.exports = {
  VERSION,
  category: new Hash({
    lang: ['isObject', 'isNull'],
  }),
  esInitContent,
  esInitContentCategoryBeforeFlag,
  esInitContentCategoryAfterFlag,
  esPkg: {
    name: 'zhiaiwan-utils-es-template',
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
    contributors: [
      'John-David Dalton <john.david.dalton@gmail.com>',
      'Mathias Bynens <mathias@qiwi.be>',
    ],
    scripts: {
      test: 'echo "See https://github.com/qq61538187/zhiaiwan-utils for testing details."',
    },
  },
  cjsInitContent,
  umdModuleName,
};
