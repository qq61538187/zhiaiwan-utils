const fs = require('node:fs');
const path = require('node:path');
/**
 * 递归删除文件夹
 * @param {string} folderPath - 要删除的文件夹路径
 */
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath); // 如果是文件夹，则递归删除该文件夹
      } else {
        fs.unlinkSync(curPath); // 如果是文件，则删除该文件
      }
    });
    fs.rmdirSync(folderPath); // 删除文件夹
  }
}

// nodeJs同步读取指定文件一行一行的内容
function readFileSync(filePath, lineCallback) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lineCallback(lines[i]);
  }
}

/**
 * 创建文件夹并清空文件夹
 * @param {string} folderPath - 文件夹路径
 */
function createFolderAndClear(folderPath) {
  deleteFolderRecursive(folderPath);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
}

/**
 * 复制指定文件夹下的所有内容包括文件夹
 * @param {string} sourceDir - 源文件夹路径
 * @param {string} destinationDir - 目标文件夹路径
 */
function copyFolderContents(sourceDir, destinationDir, options = {}) {
  const defaultOptions = {
    isRecursion: true,
    isCopy: true,
    getFile: void 0,
    validate: void 0,
    success: void 0,
  };
  // 合并选项
  const mergedOptions = Object.assign({}, defaultOptions, options);
  // 若目标文件夹不存在，则创建目标文件夹
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
  }

  // 遍历源文件夹下的所有文件和文件夹
  fs.readdirSync(sourceDir).forEach((file) => {
    const sourceFilePath = path.join(sourceDir, file);
    const destinationFilePath = path.join(destinationDir, file);

    // 判断是否为文件夹
    if (
      fs.statSync(sourceFilePath).isDirectory() &&
      mergedOptions.isRecursion
    ) {
      // 若为文件夹，则递归复制文件夹内容
      copyFolderContents(sourceFilePath, destinationFilePath, mergedOptions);
    } else {
      // 当前遍历的文件
      mergedOptions.getFile && mergedOptions.getFile(sourceFilePath);
      if (mergedOptions.isCopy) {
        if (!mergedOptions.validate) {
          // 若为文件，则复制文件内容
          fs.copyFileSync(sourceFilePath, destinationFilePath);
        } else if (
          mergedOptions.validate &&
          mergedOptions.validate(sourceFilePath)
        ) {
          // 若为文件，则复制文件内容
          fs.copyFileSync(sourceFilePath, destinationFilePath);
        }
      }
    }
  });
  mergedOptions.success && mergedOptions.success();
}

module.exports = {
  createFolderAndClear,
  deleteFolderRecursive,
  copyFolderContents,
  readFileSync,
};
