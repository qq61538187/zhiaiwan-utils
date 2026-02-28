import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
zhiaiwanUtils.meanBy(objects, (o) => o.n);
// => 5
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.meanBy(objects, "n");
// => 5
