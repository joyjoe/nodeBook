// 两个模块相互引用 模块A中会引用模块B 模块B中会引用模块A
var modA = require("./mod/modA");
var modB = require("./mod/modB");

console.log("in mutual require file, modA.number = ", modA.number);
console.log("in mutual require file, modB.number = ", modB.number);