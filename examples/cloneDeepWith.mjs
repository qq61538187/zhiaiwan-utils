import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function customizer(value) {
	if (zhiaiwanUtils.isElement(value)) {
		return value.cloneNode(true);
	}
}
var el = zhiaiwanUtils.cloneDeepWith(document.body, customizer);
console.log(el === document.body);
// => false
console.log(el.nodeName);
// => 'BODY'
console.log(el.childNodes.length);
// => 20
