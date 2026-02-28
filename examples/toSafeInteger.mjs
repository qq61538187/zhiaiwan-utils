import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toSafeInteger(3.2);
// => 3
zhiaiwanUtils.toSafeInteger(Number.MIN_VALUE);
// => 0
zhiaiwanUtils.toSafeInteger(Infinity);
// => 9007199254740991
zhiaiwanUtils.toSafeInteger("3.2");
// => 3
