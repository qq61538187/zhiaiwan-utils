import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isLength(3);
// => true
zhiaiwanUtils.isLength(Number.MIN_VALUE);
// => false
zhiaiwanUtils.isLength(Infinity);
// => false
zhiaiwanUtils.isLength("3");
// => false
