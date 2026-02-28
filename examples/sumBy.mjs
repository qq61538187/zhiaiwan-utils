import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
zhiaiwanUtils.sumBy(objects, (o) => o.n);
// => 20
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.sumBy(objects, "n");
// => 20
