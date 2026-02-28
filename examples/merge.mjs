import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = {
	a: [{ b: 2 }, { d: 4 }],
};
var other = {
	a: [{ c: 3 }, { e: 5 }],
};
zhiaiwanUtils.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
