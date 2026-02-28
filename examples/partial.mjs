import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const _ = undefined;

function greet(greeting, name) {
	return `${greeting} ${name}`;
}
var sayHelloTo = zhiaiwanUtils.partial(greet, "hello");
sayHelloTo("fred");
// => 'hello fred'
// Partially applied with placeholders.
var greetFred = zhiaiwanUtils.partial(greet, _, "fred");
greetFred("hi");
// => 'hi fred'
