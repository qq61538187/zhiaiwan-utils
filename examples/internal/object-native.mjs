import { assignIn, valuesIn } from "../../dist/es/internal/object-native.js";

function Foo() {
	this.a = 1;
}
Foo.prototype.b = 2;

console.log(assignIn({}, new Foo()));
console.log(valuesIn(new Foo()));
