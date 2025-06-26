/**
 * 判断颜色字符串是否为合法的十六进制颜色格式
 *
 * @param {string} color - 要检查的颜色字符串，例如 "#fff"、"#ffffff"
 * @returns {boolean} 如果是合法的十六进制颜色格式，返回 true；否则返回 false
 */
function isHexColor(color) {
  // 正则匹配：# 开头，后跟 3 或 6 位十六进制数字（不区分大小写）
  var hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  return hexRegex.test(color);
}
