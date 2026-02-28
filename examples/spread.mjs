import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

var say = zhiaiwanUtils.spread((who, what) => `${who} says ${what}`);
say(["fred", "hello"]);
// => 'fred says hello'
var numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)]);
numbers.then(zhiaiwanUtils.spread((x, y) => x + y));
// => a Promise of 76
