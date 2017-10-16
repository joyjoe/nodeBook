const assert = require("assert");

it("should allow a test to fail", ()=>{
  assert(true);
  assert.equal("a", "b", "bad test");
});
