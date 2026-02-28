import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x");
// => [{ 'x': 1 }]
