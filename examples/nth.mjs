import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = ["a", "b", "c", "d"];
zhiaiwanUtils.nth(array, 1);
// => 'b'
zhiaiwanUtils.nth(array, -2);
// => 'c';
