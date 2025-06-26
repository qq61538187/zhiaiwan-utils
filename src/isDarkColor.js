var isHexColor = require('./isHexColor.js');
/**
 * 判断一个十六进制颜色是否为暗色
 *
 * @param {string} hexColor - 十六进制颜色字符串，例如 "#000000"、"#fff"、"#1a2b3c"
 * @returns {boolean} 如果颜色亮度较低（暗色），返回 true；否则返回 false
 */
function isDarkColor(hexColor) {
  if (!isHexColor(hexColor)) {
    return false;
  }

  var hex = hexColor.replace('#', '');

  // 转换 3 位为 6 位
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // 使用 slice() 替代已弃用的 substr()
  var r = Number.parseInt(hex.slice(0, 2), 16);
  var g = Number.parseInt(hex.slice(2, 4), 16);
  var b = Number.parseInt(hex.slice(4, 6), 16);

  var brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness < 128;
}
