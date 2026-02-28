import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function square(n) {
	return n * n;
}
var addSquare = zhiaiwanUtils.flow([zhiaiwanUtils.add, square]);
addSquare(1, 2);
// => 9
