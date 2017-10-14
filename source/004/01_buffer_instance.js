var buffer1 = Buffer.alloc(10);
var buffer2 = Buffer.alloc(10, 1);
var buffer3 = Buffer.alloc(10, "1");
var buffer4 = Buffer.alloc(5, buffer3);
var buffer5 = Buffer.alloc(15, buffer3);
var buffer6 = Buffer.alloc(10, "中国", "utf8");
var buffer7 = Buffer.alloc(21, buffer6, "utf8");

console.log([buffer1, buffer2, buffer3, buffer4, buffer5, buffer6, buffer7]);