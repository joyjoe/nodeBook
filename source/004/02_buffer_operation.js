var chalk = require("chalk");
// buffer methods

var buffer1 = Buffer.from("I ");
var buffer2 = Buffer.from("am ");
var buffer3 = Buffer.from("from ");
var buffer4 = Buffer.from("China!");
var buffer = Buffer.concat([buffer1, buffer2, buffer3, buffer4]);
var subBuffer = Buffer.concat([buffer1, buffer2, buffer3, buffer4], 11);

console.log(buffer);
console.log(buffer.length);
console.log(Buffer.byteLength(buffer));
console.log(buffer.toString());
console.log(buffer.toString("base64"));

console.log(chalk.red("--------"));

console.log(subBuffer);
console.log(subBuffer.toString());