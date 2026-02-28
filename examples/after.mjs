import zhiaiwanUtils from "../dist/es/zhiaiwanUtils.js";

const saves = ["profile", "settings"];
const done = zhiaiwanUtils.after(saves.length, () => "done saving!");

console.log(done()); // 第一次调用还不会执行回调
console.log(done()); // 第二次开始执行回调
// => undefined
// => done saving!
