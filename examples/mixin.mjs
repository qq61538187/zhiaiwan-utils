import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

function vowels(string) {
	return zhiaiwanUtils.filter(string, (v) => /[aeiou]/i.test(v));
}
zhiaiwanUtils.mixin({ vowels: vowels });
zhiaiwanUtils.vowels("fred");
// => ['e']
_("fred").vowels().value();
// => ['e']
zhiaiwanUtils.mixin({ vowels: vowels }, { chain: false });
_("fred").vowels();
// => ['e']
