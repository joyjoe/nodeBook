/**
 * assert
 * assert.equal
 * assert.strictEqual
 * assert.deepEqual
 * assert.deepStrictEqual
 * 
 * assert.notEqual
 * assert.notStrictEqual
 * assert.notDeepEqual
 * assert.notDeepStrictEqual
 */

const assert = require("assert");

function User(name){
  this.name = name;
  this.permission = {
    "admin": 1
  };
}

function login(name){
  var user = new User(name);
  user.permission.admin = true;
  return user;
}

const actual = login("joyjoe");
const expected = new User("joyjoe");

// not pass, even through new User("joyjoe") and new User("joyjoe")
// 对象/原始值 == 比较
// assert.equal(actual, expected, "the user state was not correct.");

// 对象各属性原始值 == 比较
// assert.deepEqual(actual, expected, "the user state was not correct in deep.");

// 对象各属性原始值 === 比较
// assert.deepStrictEqual(actual, expected, "the user state was not correct in deep strict.");
