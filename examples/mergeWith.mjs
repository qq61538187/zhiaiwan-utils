import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function customizer(objValue, srcValue) {
	if (zhiaiwanUtils.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}
var object = { a: [1], b: [2] };
var other = { a: [3], b: [4] };
zhiaiwanUtils.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
