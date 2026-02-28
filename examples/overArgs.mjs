import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function doubled(n) {
	return n * 2;
}
function square(n) {
	return n * n;
}
var func = zhiaiwanUtils.overArgs((x, y) => [x, y], [square, doubled]);
func(9, 3);
// => [81, 6]
func(10, 5);
// => [100, 10]
