import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
// => [{ 'x': 1 }, { 'x': 2 }]
