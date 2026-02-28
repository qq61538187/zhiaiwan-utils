import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function customizer(objValue, srcValue) {
	return zhiaiwanUtils.isUndefined(objValue) ? srcValue : objValue;
}

const result = zhiaiwanUtils.assignInWith({ a: 1 }, { b: 2, a: 3 }, customizer);
console.log(result);
// => { a: 1, b: 2 }
