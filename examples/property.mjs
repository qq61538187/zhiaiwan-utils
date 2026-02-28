import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ a: { b: 2 } }, { a: { b: 1 } }];
zhiaiwanUtils.map(objects, zhiaiwanUtils.property("a.b"));
// => [2, 1]
zhiaiwanUtils.map(zhiaiwanUtils.sortBy(objects, zhiaiwanUtils.property(["a", "b"])), "a.b");
// => [1, 2]
