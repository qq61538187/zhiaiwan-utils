import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.endsWith("abc", "c");
// => true
zhiaiwanUtils.endsWith("abc", "b");
// => false
zhiaiwanUtils.endsWith("abc", "b", 2);
// => true
