import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1 };
var other = { a: 1 };
zhiaiwanUtils.eq(object, object);
// => true
zhiaiwanUtils.eq(object, other);
// => false
zhiaiwanUtils.eq("a", "a");
// => true
zhiaiwanUtils.eq("a", Object("a"));
// => false
zhiaiwanUtils.eq(NaN, NaN);
// => true
