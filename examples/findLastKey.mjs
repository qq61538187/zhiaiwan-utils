import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = {
	barney: { age: 36, active: true },
	fred: { age: 40, active: false },
	pebbles: { age: 1, active: true },
};
zhiaiwanUtils.findLastKey(users, (o) => o.age < 40);
// => returns 'pebbles' assuming `zhiaiwanUtils.findKey` returns 'barney'
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, { age: 36, active: true });
// => 'barney'
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, ["active", false]);
// => 'fred'
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findLastKey(users, "active");
// => 'pebbles'
