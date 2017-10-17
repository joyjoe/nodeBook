# webpack入门

## webpack参考文档
[中文官网](https://doc.webpack-china.org/)  


## 模块
webpack不会更改代码中除`import`和`expect`语句以外的部分。也就是需要使用babel-loader转换ES2015语法。

## 配置文件
webpack的配置文件默认名`webpack.config.js`    
可以使用`webpack --config webpack.config.js`指令来编译打包   
使用配置文件可以很灵活的指定`loader`, `rules`, `plugins`, `resolve options`等  
### 配置选项
* devtool
开始source map功能，方便错误调试时显示源码  

## 资源管理
* css
安装`style-loader`和`css-loader` 
* 加载图片
安装`file-loader`和`url-loader`和`image-webpack-loader`
* 字体

## 常用插件
* html-webpack-plugin
`npm install html-webpack-plugin --save-dev`  
解决自动引入chunk的问题  

* html-webpack-template
`npm install html-webpack-template --save-dev`  
为`html-webpack-plugin`的默认模板提供更强大的特性,是对`html-webpack-plugin`的一个补充. 
官方文档: https://github.com/jaketrent/html-webpack-template  

* clean-webpack-plugin
每次编译打包都会生成一大堆的文件，久而久之dist文件夹就会越来越大，是不是只能手动删除目录呢？这时候就要用到这个插件了。 
`npm install clean-webpack-plugin --save-dev` 

## 自动编译打包
* webpack watch mode  
添加脚本`"watch":"webpack --watch"`可以实现文件修改后自动打包  

* webpack-dev-server
安装`npm install webpack-dev-server --save-dev` 
提供一个服务器并且实时重新加载避免了手动刷新页面  
需要在配置文件中添加
```
devServer:{
  contentBase: "./dist"
}
```
只需运行`npm run start`脚本 

* webpack-dev-middleware
安装`npm install webpack-dev-middleware --save-dev` 
配合`express`等框架作为一个中间件使用 

## 热更新HotModuleReplacement

## 精简输出
有时候我们引用的模块只使用了其中一小部分功能函数，但是打包时却会将整个模块功能函数全都打包。此时可以使用`uglifyjs-webpack-plugin` 
安装`npm install uglifyjs-webpack-plugin --save-dev`   
有两个前提:
* 使用`import`和`export`语法 
切记是export方式导出 
* 使用`uglifyjsPlugin`  
如果配置了`babel-loader`则需要关闭`modules`转换 
```
"presets": [["env", {"modules": false}]]
```

## 入门小案例
项目源码参考目录source/008
