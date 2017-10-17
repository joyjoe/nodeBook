const assert = require("assert");
const util = require("util");

function User(name){
  this.name = name;
  this.permissions = {
    "admin": false
  }
}

function loginAdmin(name){
  var user = new User(name);
  user.permissions.admin = true;
  if(!user.permissions.admin){
    throw new PermissionError("You are not an administrator");
    // throw new Error("You are not an administrator");
  }
  return user;
}

function PermissionError(message){
  // Error.call(this, message);
}

util.inherits(PermissionError, Error);


assert.throws(()=>{
  loginAdmin("joyjoe");
}, PermissionError, "A PermissionError was expected.");


