# 核心概念

## 入口
* 单个入口  
```
entry: "./path/file.js"
entry: {
  "main": "./path/file.js"
}
```
* 多个入口
```
entry: {
  "app": "./path/file.js",
  "vendor": "./path/vendor.js"
}
```

## 出口
```
output.filename: [id]-[name]-[hash]-[chunkhash]
output.path
output.publicPath
```
也可以在入口起点设置`__webpack__public__path__`实现动态设置 

## Loader
webpack将每个文件都作为模块进行处理 
```
"module":{
  "rules": [
    {
      "test": //regexp
      "use": [
        {
          "loader": "",
          "options": {

          }
        },//loader
      ]
    },//rule
  ]
}
```
Loader支持链式传递，按照先后顺序进行编译。Loader可以是同步和异步的，接受options配置参数或者是查询参数。

## Plugins

## Modules
webpack支持的模块语法有`ES6, CommonJS, AMD, @import url()`等