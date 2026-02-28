import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.includes([1, 2, 3], 1);
// => true
zhiaiwanUtils.includes([1, 2, 3], 1, 2);
// => false
zhiaiwanUtils.includes({ a: 1, b: 2 }, 1);
// => true
zhiaiwanUtils.includes("abcd", "bc");
// => true
