import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.truncate("hi-diddly-ho there, neighborino");
// => 'hi-diddly-ho there, neighbo...'
zhiaiwanUtils.truncate("hi-diddly-ho there, neighborino", {
	length: 24,
	separator: " ",
});
// => 'hi-diddly-ho there,...'
zhiaiwanUtils.truncate("hi-diddly-ho there, neighborino", {
	length: 24,
	separator: /,? +/,
});
// => 'hi-diddly-ho there...'
zhiaiwanUtils.truncate("hi-diddly-ho there, neighborino", {
	omission: " [...]",
});
// => 'hi-diddly-ho there, neig [...]'
