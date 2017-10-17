# webpack入门

## webpack参考文档
[中文官网](https://doc.webpack-china.org/)  


## 模块
webpack不会更改代码中除import和expect语句以外的部分。也就是需要使用babel-loader转换ES2015语法。

## 配置文件
webpack的配置文件默认名`webpack.config.js`    
可以使用`webpack --config webpack.config.js`指令来编译打包   
使用配置文件可以很灵活的指定`loader`, `rules`, `plugins`, `resolve options`等  

## 资源管理
* css
安装`style-loader`和`css-loader` 
* 加载图片
安装`file-loader` 
* 字体

## 入门小案例
项目源码参考目录source/008
