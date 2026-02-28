import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toInteger(3.2);
// => 3
zhiaiwanUtils.toInteger(Number.MIN_VALUE);
// => 0
zhiaiwanUtils.toInteger(Infinity);
// => 1.7976931348623157e+308
zhiaiwanUtils.toInteger("3.2");
// => 3
