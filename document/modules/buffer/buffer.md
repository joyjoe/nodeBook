# buffer缓存
Buffer缓存，就是计算机内存中的一部分二进制数组。  
在ES6尚未制定TypedArray，DataView,Buffer之前，NodeJS就已经定义了Buffer这样一个对象。不过需要注意的是：在ES6中，Buffer指的是计算机中一段存放二进制数据的内存，该对象自身是不具备读写操作的，需要使用TypedArray或者DataView这样的数据视图来进行数据的读写操作。而在NodeJS中，Buffer既是计算机中一段存放二进制数据的内存，同时也具有数据读写操作，类似于Uint8Array数据视图对象。  
## Buffer实例的创建
采用构造函数创建Buffer实例的方法已经被废弃了，所以需要使用Buffer的静态方法来创建实例。  
```
Buffer.alloc(size,fill,encoding)
Buffer.from(array)
Buffer.from(arrayBuffer, byteOffset, length);
Buffer.from(buffer)
Buffer.from(string, encoding)
```
## Buffer静态方法
* Buffer.byteLength()
* Buffer.compare()
* Buffer.concat()
* Buffer.isBuffer()
* Buffer.isEncoding()

## Buffer属性和实例方法
* length
* toString()
* equals()
* includes()
* fill()
* indexOf()
* keys()
* slice()
* values()
* read系列方法
* write系列方法

具体代码演示参考source/004目录