function test(a,b){
    if(a>b){
        console.log("a>b");
    }else if(a<b){
        console.log("a<b");
    }else{
        console.log("a=b");
    }
}

var a = parseInt(Math.random() * 30 + 10, 10);
var b = parseInt(Math.random() * 30 + 10, 10);
test(a,b);

console.log("debug method 1");