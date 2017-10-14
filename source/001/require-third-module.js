// 引用FS模块
var fs = require("fs");
var chalk = require("chalk");

fs.readFile("./mod/modA.js", function(err, buffer){
    if(err) return console.log(err);
    console.log(chalk.blue("system read file end"));
    console.log(chalk.bgRed("-----data-----"));
    console.log(chalk.bold.italic.magenta(buffer.toString()));
});
console.log(chalk.yellow("system is reading file ..."));