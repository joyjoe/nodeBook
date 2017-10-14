var {dirname, basename, extname} = require("path");
var chalk = require("chalk");

var filepath = __filename;
console.log("filepath = ", filepath);
var _dirname = dirname(filepath);
var _basename = basename(filepath);
var _basename1 = basename(filepath, 'js');
var _basename2 = basename(filepath, '.js');
var _extname = extname(filepath);

console.log(chalk.red(`dirname = ${_dirname}`));
console.log(chalk.red(`basename = ${_basename}`));
console.log(chalk.blue(`basename = ${_basename1}`));
console.log(chalk.blue(`basename = ${_basename2}`));
console.log(chalk.red(`extname = ${_extname}`));