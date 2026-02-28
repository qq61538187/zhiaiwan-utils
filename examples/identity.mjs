import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1 };
console.log(zhiaiwanUtils.identity(object) === object);
// => true
