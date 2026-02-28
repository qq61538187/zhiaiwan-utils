import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ a: 1, b: 2, c: 3 },
	{ a: 4, b: 5, c: 6 },
];
zhiaiwanUtils.find(objects, zhiaiwanUtils.matchesProperty("a", 4));
// => { 'a': 4, 'b': 5, 'c': 6 }
// Checking for several possible values
zhiaiwanUtils.filter(
	objects,
	zhiaiwanUtils.overSome([
		zhiaiwanUtils.matchesProperty("a", 1),
		zhiaiwanUtils.matchesProperty("a", 4),
	]),
);
// => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
