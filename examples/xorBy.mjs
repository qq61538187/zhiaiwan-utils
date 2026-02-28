import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
// => [{ 'x': 2 }]
