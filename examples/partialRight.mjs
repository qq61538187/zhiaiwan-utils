import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const _ = undefined;

function greet(greeting, name) {
	return `${greeting} ${name}`;
}
var greetFred = zhiaiwanUtils.partialRight(greet, "fred");
greetFred("hi");
// => 'hi fred'
// Partially applied with placeholders.
var sayHelloTo = zhiaiwanUtils.partialRight(greet, "hello", _);
sayHelloTo("fred");
// => 'hello fred'
