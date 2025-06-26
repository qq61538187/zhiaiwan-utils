/**
 * 根据基础颜色生成包含渐变色系的数组（可同时包含浅色和深色系列）
 * @param {string} theme - 基础颜色（十六进制格式，如 "#1890ff"）
 * @param {boolean} [includeDark=false] - 是否包含深色系列（默认false）
 * @param {number} [steps=10] - 每种系列的渐变步数（默认10步）
 * @returns {Array<string>} - 返回颜色数组[基础色,浅色1...浅色N,深色1...深色N]（如果包含深色）
 */
function colorGenerateGradientSeries(theme, includeDark, steps) {
  // ES5 默认参数处理
  includeDark = typeof includeDark === 'boolean' ? includeDark : false;
  steps = typeof steps === 'number' ? Math.max(1, steps) : 10;

  /**
   * 生成比基础色浅的色调
   * @param {string} color - 不带#的十六进制颜色值
   * @param {number} tint - 浅色系数（0-1）
   * @returns {string} - 返回RGB或十六进制格式颜色
   */
  var tintColor = (color, tint) => {
    var red = Number.parseInt(color.slice(0, 2), 16);
    var green = Number.parseInt(color.slice(2, 4), 16);
    var blue = Number.parseInt(color.slice(4, 6), 16);

    if (tint === 0) {
      return 'rgb(' + [red, green, blue].join(',') + ')';
    }

    red += Math.round(tint * (255 - red));
    green += Math.round(tint * (255 - green));
    blue += Math.round(tint * (255 - blue));

    return (
      '#' +
      padZero(red.toString(16)) +
      padZero(green.toString(16)) +
      padZero(blue.toString(16))
    );
  };

  /**
   * 生成比基础色深的色调
   * @param {string} color - 不带#的十六进制颜色值
   * @param {number} shade - 深色系数（0-1）
   * @returns {string} - 返回十六进制格式颜色
   */
  var shadeColor = (color, shade) => {
    var red = Number.parseInt(color.slice(0, 2), 16);
    var green = Number.parseInt(color.slice(2, 4), 16);
    var blue = Number.parseInt(color.slice(4, 6), 16);

    red = Math.round(red * (1 - shade));
    green = Math.round(green * (1 - shade));
    blue = Math.round(blue * (1 - shade));

    return (
      '#' +
      padZero(red.toString(16)) +
      padZero(green.toString(16)) +
      padZero(blue.toString(16))
    );
  };

  /**
   * 补零函数（确保十六进制两位数）
   * @param {string} str - 十六进制字符串
   * @returns {string} - 补零后的字符串
   */
  var padZero = (str) => (str.length === 1 ? '0' + str : str);

  // 初始化色系数组（总是包含原始颜色）
  var colorSeries = [theme];
  // 生成浅色系列（从10%到100%）
  for (var i = 1; i <= steps; i++) {
    var tintValue = i / steps;
    if (includeDark) {
      colorSeries.push(tintColor(theme.replace('#', ''), tintValue));
    } else {
      colorSeries.push(shadeColor(theme.replace('#', ''), shadeValue));
    }
  }
  return colorSeries;
}
