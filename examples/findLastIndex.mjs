import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var users = [
	{ user: "barney", active: true },
	{ user: "fred", active: false },
	{ user: "pebbles", active: false },
];
zhiaiwanUtils.findLastIndex(users, (o) => o.user === "pebbles");
// => 2
// The `zhiaiwanUtils.matches` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, { user: "barney", active: true });
// => 0
// The `zhiaiwanUtils.matchesProperty` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, ["active", false]);
// => 2
// The `zhiaiwanUtils.property` iteratee shorthand.
zhiaiwanUtils.findLastIndex(users, "active");
// => 0
