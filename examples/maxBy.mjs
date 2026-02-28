import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ n: 1 }, { n: 2 }];
zhiaiwanUtils.maxBy(objects, (o) => o.n);
// => { 'n': 2 }
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.maxBy(objects, "n");
// => { 'n': 2 }
