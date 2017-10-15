var zlib = require("zlib");

module.exports.zlib = function(readStream, req, res){
  var encoding = req.headers["accept-encoding"];
  if(!encoding || !(new RegExp(/\b(gzip|deflate)\b/).test(encoding)) ){
    console.log("compress style is error");
    return readStream;
  }else if(new RegExp(/\bgzip\b/).test(encoding)){
    res.setHeader("Content-Encoding", "gzip");
    console.log("gzip");
    return readStream.pipe(zlib.createGzip());
  }else if(new RegExp(/\bdeflate\b/).test(encoding)){
    res.setHeader("Content-Encoding", "deflate");  
    console.log("deflate");
    return readStream.pipe(zlib.createDeflate());
  }else{
    console.log("not compress");
    return readStream;
  }
};