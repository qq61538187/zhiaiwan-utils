import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", age: 36, active: true },
	{ user: "fred", age: 40, active: false },
];
zhiaiwanUtils.filter(users, (o) => !o.active);
// => objects for ['fred']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.filter(users, { age: 36, active: true });
// => objects for ['barney']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.filter(users, ["active", false]);
// => objects for ['fred']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.filter(users, "active");
// => objects for ['barney']
// Combining several predicates using `zhiaiwanUtils.overEvery` or `zhiaiwanUtils.overSome`.
zhiaiwanUtils.filter(users, zhiaiwanUtils.overSome([{ age: 36 }, ["age", 40]]));
// => objects for ['fred', 'barney']
