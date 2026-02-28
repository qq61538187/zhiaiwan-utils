import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
}
function Bar() {
	this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
zhiaiwanUtils.extend({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
