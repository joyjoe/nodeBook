var {exec} = require("child_process");

module.exports = {
  "os": process.platform,
  "open": function(url){
    console.log(url);
    console.log(this.os);
    switch(this.os){
      case "darwin":
        exec(`open ${url}`);
        break;
      case "win32":
        exec(`start ${url}`);
        break;
      default:
        exec(`open ${url}`);
        break;
    }
  } 
}