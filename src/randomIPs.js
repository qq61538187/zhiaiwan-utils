/**
 * 生成指定类型的随机IP地址列表
 *
 * @param {string} type - IP地址类型：'A'、'B'、'C' 或 'D'
 * @param {number} count - 要生成的IP地址数量
 * @returns {Array} 包含生成的随机IP地址字符串数组；如果类型无效，则返回 ['Invalid IP class type']
 */
function generateRandomIPs(type, count) {
    /**
     * 生成指定范围内的随机整数
     *
     * @param {number} min - 最小值（含）
     * @param {number} max - 最大值（含）
     * @returns {number} 随机整数
     */
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * 根据IP类型获取第一个字节的范围
     *
     * @param {string} type - IP类型（A/B/C/D）
     * @returns {Array|null} 第一个字节的范围 [min, max]，如果类型无效返回 null
     */
    function getFirstOctetRange(type) {
        switch (type.toUpperCase()) {
            case 'A': return [1, 126];     // A类IP地址
            case 'B': return [128, 191];   // B类IP地址
            case 'C': return [192, 223];   // C类IP地址
            case 'D': return [224, 239];   // D类IP地址（多播）
            default: return null;          // 非法类型
        }
    }

    var result = [];                      // 存储结果的数组
    var range = getFirstOctetRange(type); // 获取第一个字节的合法范围

    // 如果输入的类型无效，返回错误信息
    if (!range) {
        return ['Invalid IP class type'];
    }

    // 生成指定数量的随机IP地址
    for (var i = 0; i < count; i++) {
        var first = getRandom(range[0], range[1]);   // 第一段
        var second = getRandom(0, 255);              // 第二段
        var third = getRandom(0, 255);               // 第三段
        var fourth = getRandom(1, 254);              // 第四段，避免网络地址(0)和广播地址(255)

        // 拼接成完整IP地址
        result.push(first + '.' + second + '.' + third + '.' + fourth);
    }

    return result; // 返回IP地址数组
}
