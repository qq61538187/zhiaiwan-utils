var users = [
	{ user: "barney", age: 36 },
	{ user: "fred", age: 40 },
	{ user: "pebbles", age: 1 },
];
var _youngest = _.chain(users)
	.sortBy("age")
	.map((o) => `${o.user} is ${o.age}`)
	.head()
	.value();
// => 'pebbles is 1'
