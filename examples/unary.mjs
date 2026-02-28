import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.map(["6", "8", "10"], zhiaiwanUtils.unary(parseInt));
// => [6, 8, 10]
