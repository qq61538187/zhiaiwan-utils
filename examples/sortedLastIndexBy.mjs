import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ x: 4 }, { x: 5 }];
zhiaiwanUtils.sortedLastIndexBy(objects, { x: 4 }, (o) => o.x);
// => 1
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sortedLastIndexBy(objects, { x: 4 }, "x");
// => 1
