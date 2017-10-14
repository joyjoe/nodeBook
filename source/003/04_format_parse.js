var {parse, format} = require("path");

var parseResult = parse(__filename);
console.log(parseResult);

var parseResult2 = parse(__dirname);
console.log(parseResult2);