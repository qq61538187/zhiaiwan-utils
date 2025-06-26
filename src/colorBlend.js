var colorHexToRgb = require('./colorHexToRgb.js');
/**
 * 混合两种颜色并按指定比例生成新颜色
 * @param {string} primaryColorHex - 主色（十六进制格式，如 "#FF0000"）
 * @param {string} blendColorHex - 要混合的颜色（十六进制格式）
 * @param {number} [blendRatio=20] - 混合比例（0-100，默认20，表示主色占80%，混合色占20%）
 * @param {Object} [options] - 配置选项
 * @param {boolean} [options.isObject] - 是否返回RGB对象（默认返回RGB字符串）
 * @returns {string|Object} - 返回RGB字符串（如 "rgb(255,0,0)"）或对象（如 { r:255, g:0, b:0 }）
 */
function colorBlend(primaryColorHex, blendColorHex, blendRatio, options) {
  // 处理默认参数（ES5方式）
  blendRatio = typeof blendRatio === 'undefined' ? 20 : blendRatio;
  options = options || {};

  // 将十六进制颜色转换为RGB对象
  var primaryColorRgb = colorHexToRgb(primaryColorHex, { isObject: true });
  var blendColorRgb = colorHexToRgb(blendColorHex, { isObject: true });

  // 计算混合比例（0-1范围）
  var ratio = blendRatio / 100;

  // 按比例混合RGB通道
  var mixedRgb = {
    r: (
      (blendColorRgb.r - primaryColorRgb.r) * ratio +
      primaryColorRgb.r
    ).toFixed(),
    g: (
      (blendColorRgb.g - primaryColorRgb.g) * ratio +
      primaryColorRgb.g
    ).toFixed(),
    b: (
      (blendColorRgb.b - primaryColorRgb.b) * ratio +
      primaryColorRgb.b
    ).toFixed(),
  };

  // 根据选项返回不同格式
  return options.isObject
    ? mixedRgb
    : 'rgb(' + [mixedRgb.r, mixedRgb.g, mixedRgb.b].join(',') + ')';
}
