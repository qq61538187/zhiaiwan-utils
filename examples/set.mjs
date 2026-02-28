import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: 3 } }] };
zhiaiwanUtils.set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// => 4
zhiaiwanUtils.set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z);
// => 5
