import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.startsWith("abc", "a");
// => true
zhiaiwanUtils.startsWith("abc", "b");
// => false
zhiaiwanUtils.startsWith("abc", "b", 1);
// => true
