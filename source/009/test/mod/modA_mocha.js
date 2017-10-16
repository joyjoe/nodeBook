const { add, multi } = require("../../src/mod/modA");
const { expect, should } = require("chai");
const assert = require("assert");


describe("moduleA", () => {
  describe("#add", () => {
    it("should be return 5 when 2 + 3", () => {
      assert.equal(5, add(2,3));
    });
  });
});
