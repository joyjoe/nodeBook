const http = require("http");
const { square, randomTimeout } = require("../mod/modB");

http.createServer((req, res)=>{
  var str = "";
  req.on("data", (chunk)=>{
    str += chunk;
    console.log(`in server: write chunk: ${chunk}`);
  });
  req.on("end", ()=>{
    console.log(`in server: write: ${str}`);
  });
  if(req.url.match(/^\/square/)){
    var params = req.url.split("/");
    console.log(req.url);
    var number;
    if(params.length > 1 && params[2]){
      number = parseInt(params[2], 10);
      res.writeHead(200);
      res.write(square(number).toString());
      res.end();
    }else{
      res.writeHead(500);
      res.end("invalid input");
    }
  }else{
    res.writeHead(404);
    res.end("not found");
  }
}).listen(3000, ()=>{
  console.log("server start");
});