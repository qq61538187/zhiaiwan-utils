import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isSafeInteger(3);
// => true
zhiaiwanUtils.isSafeInteger(Number.MIN_VALUE);
// => false
zhiaiwanUtils.isSafeInteger(Infinity);
// => false
zhiaiwanUtils.isSafeInteger("3");
// => false
