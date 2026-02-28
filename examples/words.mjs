import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

zhiaiwanUtils.words("fred, barney, & pebbles");
// => ['fred', 'barney', 'pebbles']
zhiaiwanUtils.words("fred, barney, & pebbles", /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
