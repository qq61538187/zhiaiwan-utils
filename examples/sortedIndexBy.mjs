import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ x: 4 }, { x: 5 }];
zhiaiwanUtils.sortedIndexBy(objects, { x: 4 }, (o) => o.x);
// => 0
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sortedIndexBy(objects, { x: 4 }, "x");
// => 0
