# babel入门

## babel安装
```
npm install babel babel-core
```
仅仅安装babel是不够的，还需要安装preset   
```
npm install babel-preset-env babel-preset-react babel-preset-es2015
```
如果使用自动化工具gulp,webpack等，还需要额外安装插件
```
npm install gulp-babel babel-loader
```
除了官方提供的preset之外，还可以额外使用插件来加强代码的构建
```
npm install babel-plugin-transform-object-assign
```

## babel使用
需要创建一个.babelrc文件  
```
.babelrc
{
  "preset": ["env"],
  "plugins": ["transform-object-assign"]
}
```