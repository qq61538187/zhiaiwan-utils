/**
 * 将十六进制颜色值转换为RGB格式
 * @param {string} hex - 十六进制颜色值（如 "#FF0000" 或 "#F00"）
 * @param {Object} [options] - 配置选项
 * @param {boolean} [options.isObject] - 是否返回RGB对象（默认返回RGB字符串）
 * @returns {string|Object} - 返回RGB字符串（如 "rgb(255,0,0)"）或对象（如 { r:255, g:0, b:0 }）
 * @throws {Error} - 如果输入的十六进制颜色值无效
 */
function colorHexToRgb(hex, options) {
  // 处理默认参数（ES5方式）
  options = options || {};

  // 转换为小写并移除可能的空格
  var sHex = hex.toLowerCase().trim();

  // 验证十六进制颜色格式
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(sHex)) {
    throw new Error('Invalid hexadecimal color value');
  }

  // 处理缩写形式（如 #F00 转换为 #FF0000）
  if (sHex.length === 4) {
    var sColorNew = '#';
    for (var i = 1; i < 4; i += 1) {
      sColorNew += sHex.charAt(i) + sHex.charAt(i);
    }
    sHex = sColorNew;
  }

  // 解析RGB分量
  var sColorChange = [];
  for (var j = 1; j < 7; j += 2) {
    sColorChange.push(Number.parseInt('0x' + sHex.slice(j, j + 2), 10));
  }

  // 根据选项返回不同格式
  if (options.isObject) {
    return {
      r: sColorChange[0],
      g: sColorChange[1],
      b: sColorChange[2],
    };
  }

  return 'rgb(' + sColorChange.join(',') + ')';
}
