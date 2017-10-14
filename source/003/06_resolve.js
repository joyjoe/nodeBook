var {resolve} = require("path");
// resolve 将路径片段从右至左拼接成一个绝对路径
var path1 = resolve("/usr", "/bin", "node");
var path2 = resolve("/usr", "bin", "./node");
var path3 = resolve("/usr", "./bin", "./node");
var path4 = resolve("/usr", "/bin", "./node");
var path5 = resolve("/usr", "/bin", "../node");

var pathArr = [path1, path2, path3, path4, path5];
console.log(pathArr);