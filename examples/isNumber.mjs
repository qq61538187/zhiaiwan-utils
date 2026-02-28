import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isNumber(3);
// => true
zhiaiwanUtils.isNumber(Number.MIN_VALUE);
// => true
zhiaiwanUtils.isNumber(Infinity);
// => true
zhiaiwanUtils.isNumber("3");
// => false
