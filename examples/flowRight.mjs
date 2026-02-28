import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function square(n) {
	return n * n;
}
var addSquare = zhiaiwanUtils.flowRight([square, zhiaiwanUtils.add]);
addSquare(1, 2);
// => 9
