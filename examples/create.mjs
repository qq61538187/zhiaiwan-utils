import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function Shape() {
	this.x = 0;
	this.y = 0;
}
function Circle() {
	Shape.call(this);
}
Circle.prototype = zhiaiwanUtils.create(Shape.prototype, {
	constructor: Circle,
});
var circle = new Circle();
circle instanceof Circle;
// => true
circle instanceof Shape;
// => true
