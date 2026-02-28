import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };
var values = zhiaiwanUtils.memoize(zhiaiwanUtils.values);
values(object);
// => [1, 2]
values(other);
// => [3, 4]
object.a = 2;
values(object);
// => [1, 2]
// Modify the result cache.
values.cache.set(object, ["a", "b"]);
values(object);
// => ['a', 'b']
// Replace `zhiaiwanUtils.memoize.Cache`.
zhiaiwanUtils.memoize.Cache = WeakMap;
