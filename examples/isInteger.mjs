import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isInteger(3);
// => true
zhiaiwanUtils.isInteger(Number.MIN_VALUE);
// => false
zhiaiwanUtils.isInteger(Infinity);
// => false
zhiaiwanUtils.isInteger("3");
// => false
