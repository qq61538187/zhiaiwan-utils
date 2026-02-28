import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c1: 3, c2: zhiaiwanUtils.constant(4) } }] };
zhiaiwanUtils.result(object, "a[0].b.c1");
// => 3
zhiaiwanUtils.result(object, "a[0].b.c2");
// => 4
zhiaiwanUtils.result(object, "a[0].b.c3", "default");
// => 'default'
zhiaiwanUtils.result(object, "a[0].b.c3", zhiaiwanUtils.constant("default"));
// => 'default'
