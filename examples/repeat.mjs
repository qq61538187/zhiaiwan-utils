import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.repeat("*", 3);
console.log("🚀 ~ zhiaiwanUtils.repeat('*', 3):", zhiaiwanUtils.repeat("*", 3));
// => '***'
zhiaiwanUtils.repeat("abc", 2);
// => 'abcabc'
zhiaiwanUtils.repeat("abc", 0);
// => ''
