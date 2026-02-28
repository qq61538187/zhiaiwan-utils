import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.clamp(-10, -5, 5);
// => -5
zhiaiwanUtils.clamp(10, -5, 5);
// => 5
