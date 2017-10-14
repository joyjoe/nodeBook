setImmediate((a)=>{
    console.log("setiImmediate, a = ", a);
}, 12);

setTimeout(()=>{
    console.log("set timeout");
}, 0);

process.nextTick(()=>{
    console.log("nextTick");
});
