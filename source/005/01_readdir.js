var fs = require("fs");

fs.readdir("../", (err, files)=>{
    if(err) throw err;

    console.log(files);
    files.forEach((file, index, files) => {
        console.log(file);
        fs.stat("../"+file, (err, stat) => {
            if(err) throw err;

            var info = stat.isFile()? "file" : (stat.isDirectory()? "Directory" : "");
            console.log(`${file} is ${info}`);
        });
    });
});