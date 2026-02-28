import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: 3 } }] };
zhiaiwanUtils.update(object, "a[0].b.c", (n) => n * n);
console.log(object.a[0].b.c);
// => 9
zhiaiwanUtils.update(object, "x[0].y.z", (n) => (n ? n + 1 : 0));
console.log(object.x[0].y.z);
// => 0
