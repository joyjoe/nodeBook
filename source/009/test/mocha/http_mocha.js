/**
 * 创建一个HTTP请求测试文件
 */

const http = require("http");
const assert = require("assert");

function request(method, url, cb){
  http.request({
    "hostname": "127.0.0.1",
    "port": 3000,
    "path": url,
    method
  }, (res)=>{
    res.body = "";
    res.on("data", (chunk)=>{
      res.body += chunk;
      console.log(`in client: received chunk: ${chunk}`);
    });
    res.on("end", ()=>{
      console.log(`in client: received: ${res.body}`);
      cb(res);
    });
  }).end();
  
  // request.write("sex=10");
  // request.end("name=joyjoe");
}

describe("example web app", ()=>{
  it("should square numbers", (done)=>{
    request("POST", "/square/4", (res)=>{
      assert.equal(res.statusCode, 200, "not 200");
      assert.equal(res.body, "16", "!== 16");
      done();
    });
  });

  it("should return a 500 statusCode for invalid square request", (done)=>{
    request("GET", "/square", (res)=>{
      assert.equal(res.statusCode, 500, "not 500");
      done();
    });
  })
});