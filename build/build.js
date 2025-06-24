const { exec } = require('child_process');
const path = require('node:path');
const fileUtils = require('./utils/file-utils');
const fs = require('node:fs');
const config = require('./config');
var UglifyJS = require('uglify-js');

const requireRegex = /require\(\s*['"]([^'"]+)['"]\s*\)/;
var buildMode = process.argv[2];
if(buildMode){
  buildMode = buildMode.split('=')[1];
}
/**
 * 获取源文件夹的 API
 * @returns {array} 源文件夹的 API 列表
 */
function getSrcFolderApi() {
  const srcFolderApi = [];
  const srcDirPath = path.resolve(__dirname, '../src');
  fs.readdirSync(srcDirPath).forEach((file) => {
    const sourceFilePath = path.join(srcDirPath, file);
    // 判断是否为文件夹
    if (!fs.statSync(sourceFilePath).isDirectory()) {
      srcFolderApi.push(path.basename(file, '.js'));
    }
  });
  return srcFolderApi;
}

function buildEs(srcFolderApi) {
  // 添加分组js
  var outputPath = path.resolve(__dirname, `../dist`);
  Object.keys(config.category).forEach((category) => {
    let categoryDefaultJsText = config.category[category]
      .map((fileName) => `import ${fileName} from './${fileName}.js';`)
      .join('\n');
    categoryDefaultJsText += `\nexport default {\n${config.category[category].join(' ,\n')}\n}\n`;
    fs.writeFileSync(
      `${outputPath}/${category.toLowerCase()}.default.js`,
      categoryDefaultJsText,
    );
    let categoryJsText = config.category[category]
      .map((fileName) => {
        return `export { default as ${fileName} } from './${fileName}.js';`;
      })
      .join('\n');
    categoryJsText += `\nexport { default } from './${category.toLowerCase()}.default.js';`;
    fs.writeFileSync(
      `${outputPath}/${category.toLowerCase()}.js`,
      categoryJsText,
    );
  });
  // 处理函数方法 生成 export default
  fileUtils.copyFolderContents(path.resolve(__dirname, '../src'), outputPath, {
    isCopy: false,
    getFile: (lodashApiFile) => {
      if (lodashApiFile.endsWith('.js')) {
        // 如果是.js文件，则将其路径添加到jsFiles数组中
        let newJsContent = '';
        fileUtils.readFileSync(lodashApiFile, (line) => {
          var match = line.match(requireRegex);
          if (match) {
            const requireFile =
              match[1].split('/')[match[1].split('/').length - 1];
            newJsContent += `import ${requireFile.split('.')[0].replace(/^_/, '')} from './${requireFile}';\n`;
          } else {
            newJsContent += line + '\n';
          }
        });
        const fileName = path.basename(lodashApiFile, '.js').replace(/^_/, '');
        newJsContent += `export default ${fileName};`;
        fs.writeFileSync(
          path.resolve(outputPath, `${path.basename(lodashApiFile, '.js')}.js`),
          newJsContent,
          'utf-8',
        );
      }
    },
  });
  let esDefaultBeforeContent = '';
  let esDefaultAfterContent = '';
  let esContent = '';

  Object.keys(config.category).forEach((category) => {
    esDefaultBeforeContent += `import ${category} from './${category}.js';\n`;
    esDefaultAfterContent += config.category[category]
      .map(
        (fileName) =>
          `${config.umdModuleName}.${fileName} = ${category}.${fileName};`,
      )
      .join('\n');
  });

  // 处理 es 版本js 文件
  srcFolderApi.forEach((fileName) => {
    if (fileName.startsWith('_')) return; // 忽略以 _ 开头的文件
    esContent += `export { default as ${fileName} } from './${fileName}.js';\n`;
  });
  esContent += `export { default } from './${config.umdModuleName}.default.js';`;
  fs.writeFileSync(
    path.resolve(outputPath, `${config.umdModuleName}.js`),
    esContent,
    'utf-8',
  );
  // 处理 es.default.js 文件
  fs.writeFileSync(
    path.resolve(outputPath, `${config.umdModuleName}.default.js`),
    config.esInitContent
      .replace(/<%insert-category-before%>/gm, esDefaultBeforeContent)
      .replace(/<%insert-category-after%>/gm, esDefaultAfterContent),
    'utf-8',
  );
  fs.writeFileSync(
    path.resolve(outputPath, 'package.json'),
    JSON.stringify(config.esPkg, null, 2),
    'utf-8',
  );
}

function build() {
  fileUtils.createFolderAndClear(path.resolve(__dirname, '../dist'));
  const srcFolderApi = getSrcFolderApi();
  if(buildMode == 'es'){
    buildEs(srcFolderApi);
  }
}

function preLint() {
  exec('npm run lint', (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
   
    build();
  });
}

preLint();
