import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = {
	barney: { age: 36, active: true },
	fred: { age: 40, active: false },
	pebbles: { age: 1, active: true },
};
zhiaiwanUtils.findKey(users, (o) => o.age < 40);
// => 'barney' (iteration order is not guaranteed)
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findKey(users, { age: 1, active: true });
// => 'pebbles'
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findKey(users, ["active", false]);
// => 'fred'
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findKey(users, "active");
// => 'barney'
