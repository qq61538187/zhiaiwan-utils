import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1 };
var other = { a: 1 };
zhiaiwanUtils.isEqual(object, other);
// => true
object === other;
// => false
