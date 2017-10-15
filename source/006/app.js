var http = require("http");
var path = require("path");
var fs = require("fs");
var chalk = require("chalk");
var config = require("./config/default");
var mime = require("./http/mime");
var compress = require("./http/compress");
var range = require("./http/range");

http.createServer((req, res)=>{
  var requestPath = path.join(config.root, req.url);
  fs.stat(requestPath, (err, stats) => {
    if(err){
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end(`<html><head><title>404</title></head><body><h1>找不到指定页面</h1><p>错误原因:${err.message}</p></body></html>`);
      return;
    }else if(stats.isFile()){
      var result = range(stats.size, req, res);
      console.log("result =", result);
      let {code, start, end} = result;
      console.log(code, start, end);
      let rs;
      if(code === 200){
        res.statusCode = 200;
        rs = fs.createReadStream(requestPath);
      }else if(code == 206){
        res.statusCode = code;
        rs = fs.createReadStream(requestPath, {start, end});
        res.setHeader("Accept-Ranges", "bytes");
        res.setHeader("Content-Range", `bytes ${start}-${end}/${stats.size}`);
      }else if(code == 416){
        res.writeHead(code, {"Content-Type": "text/html"});
        res.end(`<html><head><title>${code}</title></head><body><h1>请求范围不正确</h1></body></html>`);
      }

      if(config.regCompass && (new RegExp(config.regCompass)).test(requestPath)){
        console.log("compress");
        rs = compress.zlib(rs, req, res);
      }
      res.writeHead(200, {
        "Content-Type": mime(requestPath).type + "; charset=utf-8"
      });
      rs.pipe(res);
      return;
    }else if(stats.isDirectory()){
      fs.readdir(requestPath, (err, files) => {
        if(err){
          res.setHeader("404", {"Content-Type": "text/html"});
          res.end("<html><head><title>目录无法访问</title></head><body><h1>当前目录无法访问</h1></body></html>");
          return;
        }else{
          let items = "";
          const title = path.basename(requestPath);
          for(const file of files){
            let relDir = path.relative(config.root, requestPath);
            let dir = path.join(`${relDir}`, `${file}`);
            let item = `<li><a href="/${dir}">[${mime(file).icon}]${file}</a></li>`;
            items += item;
          }
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
          });
          res.end(`<html><head><title>${title}</title><style>a{display:inline-block;}</style></head><body><h1></h1><ul>${items}</ul></h1></body></html>`);
          return;
        }
      });
    }else{
      res.setHeader("404", {"Content-Type": "text/html"});
      res.end("<html><head><title>找不到指定内容</title></head><body><h1>找不到指定内容</h1></body></html>");
      return;
    }
  });
}).listen(config.port, ()=>{
  console.log(`server start at ${chalk.green(config.hostname)}:${config.port}`);
});