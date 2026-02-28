import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var array = [
	{ dir: "left", code: 97 },
	{ dir: "right", code: 100 },
];
zhiaiwanUtils.keyBy(array, (o) => String.fromCharCode(o.code));
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
zhiaiwanUtils.keyBy(array, "dir");
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
