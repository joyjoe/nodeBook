// 引用FS模块
var fs = require("fs");

fs.readFile("./mod/modA.js", function(err, buffer){
    if(err) return console.log(err);
    console.log("system read file end");
    console.log("-----data-----");
    console.log(buffer.toString());
});
console.log("system is reading file ...");