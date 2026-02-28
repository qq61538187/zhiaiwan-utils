import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.toArray({ a: 1, b: 2 });
// => [1, 2]
zhiaiwanUtils.toArray("abc");
// => ['a', 'b', 'c']
zhiaiwanUtils.toArray(1);
// => []
zhiaiwanUtils.toArray(null);
// => []
