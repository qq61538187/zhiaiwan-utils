import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 1, y: 2 },
];
zhiaiwanUtils.uniqWith(objects, zhiaiwanUtils.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
