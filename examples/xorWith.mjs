import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
var others = [
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
];
zhiaiwanUtils.xorWith(objects, others, zhiaiwanUtils.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
