var {normalize} = require("path");

var path1 = normalize("/usr/local//bin///node");
var path2 = normalize("/usr/local/bin//n/../node");

console.log(path1);
console.log(path2);