module.exports.number = 100;

// require module B
var modB = require("./modB");
console.log("in modA file, print modB.number = ", modB.number);

module.exports.number = 200;