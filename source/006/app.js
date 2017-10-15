var http = require("http");
var chalk = require("chalk");
var config = require("./config/default");

http.createServer((req, res)=>{
  res.setHeader("200", {"Content-Type": "text/html"});
  res.write("<html><body>");
  res.write("<h1>Welcome to my world!</h1>");
  res.write("</body></html>");
  res.end();
}).listen(config.port, ()=>{
  console.log(`server start at ${chalk.green(config.hostname)}:${config.port}`);
});