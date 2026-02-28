import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.forInRight(new Foo(), (_value, key) => {
	console.log(key);
});
// => Logs 'c', 'b', then 'a' assuming `zhiaiwanUtils.forIn` logs 'a', 'b', then 'c'.
