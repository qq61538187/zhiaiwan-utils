import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: true },
	{ user: "fred", active: false },
	{ user: "pebbles", active: false },
];
zhiaiwanUtils.takeRightWhile(users, (o) => !o.active);
// => objects for ['fred', 'pebbles']
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, { user: "pebbles", active: false });
// => objects for ['pebbles']
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, ["active", false]);
// => objects for ['fred', 'pebbles']
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.takeRightWhile(users, "active");
// => []
