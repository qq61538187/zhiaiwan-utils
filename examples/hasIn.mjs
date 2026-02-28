import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = zhiaiwanUtils.create({ a: zhiaiwanUtils.create({ b: 2 }) });
zhiaiwanUtils.hasIn(object, "a");
// => true
zhiaiwanUtils.hasIn(object, "a.b");
// => true
zhiaiwanUtils.hasIn(object, ["a", "b"]);
// => true
zhiaiwanUtils.hasIn(object, "b");
// => false
