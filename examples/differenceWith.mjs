import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
zhiaiwanUtils.differenceWith(objects, [{ x: 1, y: 2 }], zhiaiwanUtils.isEqual);
// => [{ 'x': 2, 'y': 1 }]
