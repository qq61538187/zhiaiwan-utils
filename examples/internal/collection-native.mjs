import { find, partition } from "../../dist/es/internal/collection-native.js";

const users = [
	{ name: "a", active: true },
	{ name: "b", active: false },
];
console.log(find(users, ["active", false]));
console.log(partition(users, "active"));
