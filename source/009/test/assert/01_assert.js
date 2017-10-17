/**
 * assert
 * assert.ok(value, message)
 * assert(value, message)
 * assert.equal(!!value, true, message)
 */

const assert = require("assert");

function square(number){
  return Math.pow(number, 2) + 1;
}

const actual = square(5);
const expected = 25;

// assert(value, message) == assert.ok(value, message) == assert.equal(!!value, true, message)
assert.equal(actual, expected, "square(5) should have returned 25");

assert(actual, "square() should have returned a value");
