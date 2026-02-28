import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.isFinite(3);
// => true
zhiaiwanUtils.isFinite(Number.MIN_VALUE);
// => true
zhiaiwanUtils.isFinite(Infinity);
// => false
zhiaiwanUtils.isFinite("3");
// => false
