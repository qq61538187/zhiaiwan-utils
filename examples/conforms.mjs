import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ a: 2, b: 1 },
	{ a: 1, b: 2 },
];
zhiaiwanUtils.filter(objects, zhiaiwanUtils.conforms({ b: (n) => n > 1 }));
// => [{ 'a': 1, 'b': 2 }]
