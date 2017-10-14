module.exports.number = 100;

// require module A
var modA = require("./modA");
console.log("in modB file, print modA.number = ", modA.number);

module.exports.number = 200;