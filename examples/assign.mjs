import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
}
function Bar() {
	this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;

const result = zhiaiwanUtils.assign({ a: 0 }, new Foo(), new Bar());
console.log(result);
// => { a: 1, c: 3 }
