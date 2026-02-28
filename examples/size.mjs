import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.size([1, 2, 3]);
// => 3
zhiaiwanUtils.size({ a: 1, b: 2 });
// => 2
zhiaiwanUtils.size("pebbles");
// => 7
