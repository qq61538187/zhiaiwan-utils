import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function isGreeting(value) {
	return /^h(?:i|ello)$/.test(value);
}
function customizer(objValue, othValue) {
	if (isGreeting(objValue) && isGreeting(othValue)) {
		return true;
	}
}
var array = ["hello", "goodbye"];
var other = ["hi", "goodbye"];
zhiaiwanUtils.isEqualWith(array, other, customizer);
// => true
