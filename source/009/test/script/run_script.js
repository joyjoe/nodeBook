/**
 * 创建一个测试脚本
 * package.json
 * script
 */

const assert = require("assert");
var exitCode = 0;
var filenames = process.argv.slice(2);

it = function(name, test){
  let err;
  try {
    test();
  } catch (e) {
    err = e;
  }

  console.log("-- it ", name, err?"[FAIL]":"[OK]");

  if(err){
    console.log(err);
    console.log(err.stack);
    exitCode = 1;
  }
}

filenames.forEach((filename)=>{
  console.log(filename);
  const path = require("path");
  require(path.resolve(__dirname, filename));
});


process.on("exit", ()=>{
  process.exit(exitCode);
});
