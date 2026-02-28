import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function customizer(objValue, srcValue) {
	return zhiaiwanUtils.isUndefined(objValue) ? srcValue : objValue;
}
var defaults = zhiaiwanUtils.partialRight(zhiaiwanUtils.extendWith, customizer);
defaults({ a: 1 }, { b: 2 }, { a: 3 });
// => { 'a': 1, 'b': 2 }
