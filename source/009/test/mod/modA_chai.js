const { add, multi } = require("../../src/mod/modA");

const { assert, expect, should } = require("chai");
should();

var foo = "foo";

foo.should.be.a("string");

// foo.should.equal("bar");

// eslint-disable-next-line
foo.should.have.lengthOf(5, 'length is not 5');
