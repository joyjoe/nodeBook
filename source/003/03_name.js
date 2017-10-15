var {dirname, basename, extname} = require("path");
var chalk = require("chalk");

var filepath = __filename;
var filepath2 = "lib/jquery/jquery.min.js";
console.log("filepath = ", filepath);
var _dirname = dirname(filepath);
var _basename = basename(filepath);
var _basename1 = basename(filepath, "js");
var _basename2 = basename(filepath, ".js");
var _extname = extname(filepath);
var _extname2 = extname(filepath2);

console.log(chalk.red(`dirname = ${_dirname}`));
console.log(chalk.red(`basename = ${_basename}`));
console.log(chalk.blue(`basename = ${_basename1}`));
console.log(chalk.blue(`basename = ${_basename2}`));
console.log(chalk.red(`extname = ${_extname}`));
console.log(chalk.green(`extname = ${_extname2}`));