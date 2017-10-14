var {join} = require("path");

var path1 = join("/usr/","bin","./node");
var path2 = join("./usr/","./bin", "n", "../node/");
var path3 = join("usr", "bin", './n', '../node', '//', '..');

console.log(`join("/usr/","bin","./node") = ${path1}`);
console.log(`join("./usr/","./bin", "n", "../node/") = ${path2}`);
console.log(`join("usr", "bin", './n', '../node', '//', '..') = ${path3}`)