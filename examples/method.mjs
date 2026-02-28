import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [{ a: { b: zhiaiwanUtils.constant(2) } }, { a: { b: zhiaiwanUtils.constant(1) } }];
zhiaiwanUtils.map(objects, zhiaiwanUtils.method("a.b"));
// => [2, 1]
zhiaiwanUtils.map(objects, zhiaiwanUtils.method(["a", "b"]));
// => [2, 1]
