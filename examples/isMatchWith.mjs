import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function isGreeting(value) {
	return /^h(?:i|ello)$/.test(value);
}
function customizer(objValue, srcValue) {
	if (isGreeting(objValue) && isGreeting(srcValue)) {
		return true;
	}
}
var object = { greeting: "hello" };
var source = { greeting: "hi" };
zhiaiwanUtils.isMatchWith(object, source, customizer);
// => true
