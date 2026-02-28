import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function greet(greeting, punctuation) {
	return `${greeting} ${this.user}${punctuation}`;
}

const object = { user: "fred" };
const bound = zhiaiwanUtils.bind(greet, object, "hi");

console.log(bound("!"));
// => hi fred!
