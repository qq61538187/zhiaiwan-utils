import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const _ = undefined;

var object = {
	user: "fred",
	greet: function (greeting, punctuation) {
		return `${greeting} ${this.user}${punctuation}`;
	},
};
var bound = zhiaiwanUtils.bindKey(object, "greet", "hi");
bound("!");
// => 'hi fred!'
object.greet = function (greeting, punctuation) {
	return `${greeting}ya ${this.user}${punctuation}`;
};
bound("!");
// => 'hiya fred!'
// Bound with placeholders.
var boundWithPlaceholder = zhiaiwanUtils.bindKey(object, "greet", _, "!");
boundWithPlaceholder("hi");
// => 'hiya fred!'
