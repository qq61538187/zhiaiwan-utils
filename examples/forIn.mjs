import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Foo() {
	this.a = 1;
	this.b = 2;
}
Foo.prototype.c = 3;
zhiaiwanUtils.forIn(new Foo(), (_value, key) => {
	console.log(key);
});
// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
