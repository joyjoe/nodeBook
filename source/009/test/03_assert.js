/**
 * assert
 * 
 * assert.throw(block, error, message)
 * assert.ifError(vaule)
 */


const assert = require("assert");
const fs = require("fs");

function readConfigFile(cb){
  fs.readFile("config.cfg", (err, data)=>{
    if(err && err.code == "ENOENT"){
      // cb(err, { "database": "psql://localhost/test"});
      cb(null, { "database": "psql://localhost/test"});
    }else if(err){
      cb(err);
    }else{
      cb(null, data);
    }
  });
}

readConfigFile((err, data)=>{
  assert.ifError(err);
});
