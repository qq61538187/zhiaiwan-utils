import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.castArray(1);
// => [1]
zhiaiwanUtils.castArray({ a: 1 });
// => [{ 'a': 1 }]
zhiaiwanUtils.castArray("abc");
// => ['abc']
zhiaiwanUtils.castArray(null);
// => [null]
zhiaiwanUtils.castArray(undefined);
// => [undefined]
zhiaiwanUtils.castArray();
// => []
var array = [1, 2, 3];
console.log(zhiaiwanUtils.castArray(array) === array);
// => true
