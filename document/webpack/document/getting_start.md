# webpack入门

## webpack参考文档
[中文官网](https://doc.webpack-china.org/)  


## 模块
webpack不会更改代码中除`import`和`expect`语句以外的部分。也就是需要使用babel-loader转换ES2015语法。

## 配置文件
webpack的配置文件默认名`webpack.config.js`    
可以使用`webpack --config webpack.config.js`指令来编译打包，同时可以使用一些额外参数获取更多信息，如：`--display-reasons`   
使用配置文件可以很灵活的指定`loader`, `rules`, `plugins`, `resolve options`等  
开发环境和生产环境的构建目标差异很大，在开发环境下，需要实时重新加载或热模块替换能力的source map和localhost server。而在生产环境下，则关注更下的bundle、更轻量的source map和资源优化。因此可以为每个环境编写独立的webpack配置文件。  
```
npm install webpack-merge --save-dev
```
创建config.js, common.js, dev.js, prod.js等不同环境下的配置文件，然后使用webpack-merge可以避免在不同配置文件中编写重复的配置。  
区别不同环境的第二种做法就是在全局变量中指定环境process.env.NODE_ENV  
* 使用webpack内置的DefinePlugin
```
new webpack.DefinePlugin({
  "process.env":{
    "NODE_ENV": JSON.Stringify("prodution")
  }
})
```
* 使用webpack的cli额外参数
`--define process.env.NODE_ENV = "'production'"`

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
配置参数: 
  ** template

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
添加脚本`webpack-dev-server --open`或`webpack-dev-server --hotOnly` 

* webpack-dev-middleware
安装`npm install webpack-dev-middleware --save-dev` 
配合`express`等框架作为一个中间件使用 

## 热更新HotModuleReplacement

## 精简输出
有时候我们引用的模块只使用了其中一小部分功能函数，但是打包时却会将整个模块功能函数全都打包。此时可以使用`uglifyjs-webpack-plugin` 
安装`npm install uglifyjs-webpack-plugin --save-dev`   
**CLI替代选项**`--optimize-minimize`
有两个前提:
* 使用`import`和`export`语法 
切记是export方式导出 
* 使用`uglifyjsPlugin`  
如果配置了`babel-loader`则需要关闭`modules`转换 
```
"presets": [["env", {"modules": false}]]
```
在生成环境下可以选择启用source-map，但是与开发环境不一样的是，可以将sourceMap单独打包成一个文件。具体做法就是`devtool`设置为`source-map`，然后在`uglifyJsPlugin`中设置`sourceMap`选项为true 
除了`uglifyjs-webpack-plugin`之外，还有两个受欢迎的压缩插件  
* BabelMinifyWebpackPlugin  
* ClosureCompilerPlugin 

## 代码分离
实现代码分离的方法有三种  
* 入口起点
使用entry手动的分离代码  
entry可以指定string,array,或者object
* 防止重复
使用CommonsChunkPlugin去重和分离chunk，可以将runtime单独打包，甚至可以通过显式的vendor chunks功能分离vendor模块，注意vendor要在runtime之前引入。
  ** ExtraTextPlugin
  ** bundle-loader
  ** promise-loader 


* 动态导入
通过模块的内联函数调用来分离代码  

## 懒加载
也叫按需加载，可以很好的优化网页和应用   
与动态导入一致，也是使用ES6的import()语法来动态导入模块 

## 缓存
如何使用缓存，使得编译打包后的文件能够被浏览器缓存，同时内容发生变化时能够请求新的文件 
* output.filename
文件名替换，可以确保浏览器获取到修改后的文件。可以使用的变量有[hash] [chunkhash] [name] [id] 其中hash是指当前构建的hash, chunkhash是指与当前chunk有关的构建时的hash 
分离vendor模块时，需要注意的是，如果只是修改某个entry的内容，并没有修改到某些类库时，依然会改变vendor的hash值，这样达不到利用缓存的效果。此时可以使用内置的`HashedModuleIdsPlugin`插件
```
new webpack.HashedModuleIdsPlugin()
```

## 入门小案例
项目源码参考目录source/008
