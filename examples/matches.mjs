import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ a: 1, b: 2, c: 3 },
	{ a: 4, b: 5, c: 6 },
];
zhiaiwanUtils.filter(objects, zhiaiwanUtils.matches({ a: 4, c: 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]
// Checking for several possible values
zhiaiwanUtils.filter(
	objects,
	zhiaiwanUtils.overSome([zhiaiwanUtils.matches({ a: 1 }), zhiaiwanUtils.matches({ a: 4 })]),
);
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
