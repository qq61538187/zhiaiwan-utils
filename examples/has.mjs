import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: { b: 2 } };
var other = zhiaiwanUtils.create({ a: zhiaiwanUtils.create({ b: 2 }) });
zhiaiwanUtils.has(object, "a");
// => true
zhiaiwanUtils.has(object, "a.b");
// => true
zhiaiwanUtils.has(object, ["a", "b"]);
// => true
zhiaiwanUtils.has(other, "a");
// => false
