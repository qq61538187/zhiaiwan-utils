/**
 * 安全高亮文本中的搜索词
 * @param {string} content - 原始内容
 * @param {string} rawSearch - 搜索词
 * @param {boolean} [isDisabledSearch=false] - 是否禁用搜索高亮
 * @returns {string} 处理后的安全HTML字符串
 */
function highlightTextSafely(content, rawSearch, isDisabledSearch) {
  if (isDisabledSearch === void 0) {
    isDisabledSearch = false;
  }
  // 处理未定义或null的情况
  var safeText = String(content || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  // 如果没有搜索词或禁用搜索，直接返回安全文本
  if (!rawSearch || isDisabledSearch) {
    return safeText;
  }

  // 转义搜索词
  var safeSearch = String(rawSearch)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

  // 创建安全正则表达式
  var escapedForRegex = safeSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var safeRegex = new RegExp('(' + escapedForRegex + ')', 'gi');

  // 执行高亮替换
  return safeText.replace(safeRegex, '<span class="highlight">$1</span>');
}
