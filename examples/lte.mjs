import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.lte(1, 3);
// => true
zhiaiwanUtils.lte(3, 3);
// => true
zhiaiwanUtils.lte(3, 1);
// => false
