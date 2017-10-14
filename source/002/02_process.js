var {argv, argv0, execArgv, execPath} = process;

console.log("arg:");
for(var _arg of argv){
    console.log(_arg);
}
console.log("argv0 = ", argv0);

console.log("execArgv:");
for(var _execArg of execArgv){
    console.log(_execArg);
}

console.log("execPath = ", execPath);

var {env} = process;
console.log(env);