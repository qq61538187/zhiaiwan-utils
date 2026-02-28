import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.mixin({ foo: zhiaiwanUtils.constant("foo") });
var lodash = zhiaiwanUtils.runInContext();
lodash.mixin({ bar: lodash.constant("bar") });
zhiaiwanUtils.isFunction(zhiaiwanUtils.foo);
// => true
zhiaiwanUtils.isFunction(zhiaiwanUtils.bar);
// => false
lodash.isFunction(lodash.foo);
// => false
lodash.isFunction(lodash.bar);
// => true
// Create a suped-up `defer` in Node.js.
var _defer = zhiaiwanUtils.runInContext({ setTimeout: setImmediate }).defer;
