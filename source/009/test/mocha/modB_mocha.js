const { square, randomTimeout } = require("../../src/mod/modB");

const assert = require("assert");

describe("Amazing mathematical operations", ()=>{
  it("should square numbers", ()=>{
    assert.equal(square(4), 16, "not expected");
  });

  it("should run a callback after a delay", (done)=>{
    randomTimeout(()=>{
      console.log("in mocha test");
      assert(true);
      done();
    });
  })
});