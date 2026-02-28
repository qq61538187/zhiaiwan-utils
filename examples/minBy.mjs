import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ n: 1 }, { n: 2 }];
zhiaiwanUtils.minBy(objects, (o) => o.n);
// => { 'n': 1 }
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.minBy(objects, "n");
// => { 'n': 1 }
