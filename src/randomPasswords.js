/**
 * 生成随机密码列表
 *
 * @param {Object} options - 配置选项
 * @param {boolean} [options.includeNumbers=true] - 是否包含数字（0-9）
 * @param {boolean} [options.includeLowercase=true] - 是否包含小写字母（a-z）
 * @param {boolean} [options.includeUppercase=true] - 是否包含大写字母（A-Z）
 * @param {boolean} [options.includeSymbols=true] - 是否包含特殊符号
 * @param {string}  [options.symbols="!@#$%^&*()_+[]{}|;:,.<>?/"] - 可用的特殊符号集合（如要启用 includeSymbols）
 * @param {string}  [options.excludeChars=""] - 要排除的字符（如：'0O1lI'）
 * @param {boolean} [options.noRepeat=false] - 是否禁止密码中字符重复
 * @param {number}  [options.length=12] - 每个密码的长度
 * @param {number}  [options.count=1] - 要生成的密码数量
 *
 * @returns {Array<string>} 返回生成的密码字符串数组；如果配置错误（如字符集为空），返回空数组
 */
function randomPasswords(options) {
    // 默认配置
    var defaultOptions = {
        includeNumbers: true,
        includeLowercase: true,
        includeUppercase: true,
        includeSymbols: true,
        symbols: "!@#$%^&*()_+[]{}|;:,.<>?/",
        excludeChars: "",
        noRepeat: false,
        length: 12,
        count: 1
    };

    // 合并默认配置
    var opt = {};
    for (var key in defaultOptions) {
        if (options.hasOwnProperty(key)) {
            opt[key] = options[key];
        } else {
            opt[key] = defaultOptions[key];
        }
    }

    // 字符集定义
    var numberChars = '0123456789';
    var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var symbolChars = opt.symbols || '';

    // 构建字符池
    var candidate = '';
    if (opt.includeNumbers) candidate += numberChars;
    if (opt.includeLowercase) candidate += lowerChars;
    if (opt.includeUppercase) candidate += upperChars;
    if (opt.includeSymbols) candidate += symbolChars;

    // 移除排除字符
    if (opt.excludeChars) {
        var filtered = '';
        for (var i = 0; i < candidate.length; i++) {
            if (opt.excludeChars.indexOf(candidate.charAt(i)) === -1) {
                filtered += candidate.charAt(i);
            }
        }
        candidate = filtered;
    }

    // 如果字符集为空，返回空结果
    if (!candidate || candidate.length === 0) {
        return [];
    }

    // 工具函数：从字符池中随机取字符
    function getRandomChar(charSet) {
        var index = Math.floor(Math.random() * charSet.length);
        return charSet.charAt(index);
    }

    var result = [];

    // 生成多个密码
    for (var c = 0; c < opt.count; c++) {
        var password = '';
        var usedChars = {};

        for (var j = 0; j < opt.length; j++) {
            var tries = 0;
            var ch;

            do {
                ch = getRandomChar(candidate);
                tries++;
            } while (opt.noRepeat && usedChars[ch] && tries < 100);

            // 防止陷入死循环：可用字符不足
            if (opt.noRepeat && tries >= 100) {
                password = '[Error: not enough unique characters]';
                break;
            }

            password += ch;
            if (opt.noRepeat) {
                usedChars[ch] = true;
            }
        }

        result.push(password);
    }

    return result;
}
