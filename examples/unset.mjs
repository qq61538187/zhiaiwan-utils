import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: [{ b: { c: 7 } }] };
zhiaiwanUtils.unset(object, "a[0].b.c");
// => true
console.log(object);
// => { 'a': [{ 'b': {} }] };
zhiaiwanUtils.unset(object, ["a", "0", "b", "c"]);
// => true
console.log(object);
// => { 'a': [{ 'b': {} }] };
