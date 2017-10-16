const { add, multi } = require("../../src/mod/modA")
const assert = require("assert");

try{
  assert.equal(add(2, 3), 50, "result is not expected");
}catch(e){
  console.log(e.message);
}



