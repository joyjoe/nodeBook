# CommonJS
NodeJS是遵循CommonJS规范的  
1. 每一个文件都是一个单独的模块，都有独立的作用域  
2. 模块内部module变量代表模块本身，而module.exports变量代表模块对外暴露的接口  
3. 通过`require`语法引用[导入]其他模块，可以是绝对路径/，也可以是相对路径./，甚至可以是内置模块名或者第三方模块名  
具体代码演示都在`/source/001`目录下  
### module.exports与exports的区别
```
exports = module.exports
```
在NodeJS内部使用了上面这条语句，所以可以通过`exports.name`和`exports[name]`两种语法来快速的实现对外接口暴露。但是如果修改了exports的引用(如直接赋值)则该模块对外不会暴露任何接口，因为模块对外暴露接口的真正实现是`module.exports`，`exports`只是一个简洁的变量，引用了`module.exports`变量，所以修改`exports`的引用并不会改变`module.exports`对象。  