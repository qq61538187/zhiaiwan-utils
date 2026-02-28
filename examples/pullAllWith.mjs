import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [
	{ x: 1, y: 2 },
	{ x: 3, y: 4 },
	{ x: 5, y: 6 },
];
zhiaiwanUtils.pullAllWith(array, [{ x: 3, y: 4 }], zhiaiwanUtils.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
