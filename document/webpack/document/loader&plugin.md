# 常用loader和plugin

## loader
* postcss-loader  
* sass-loader
  配置选项    
  * outputStyle
* file-loader
* url-loader
* babel-loader
* css-loader
* style-loader

## plugin
* html-webpack-plugin
  安装`npm install --save-dev html-webpack-plugin`    
  配置选项    
    * template
    * filename
    * title
    * inject
    * favicon
    * hash
    * showErrors
    * chunks


* extra-text-webpack-plugin
  作用就是将CSS提取成文件   
  安装`npm install --save-dev extra-text-webpack-plugin`    
  ```
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ExtraTextPlugin.extract({
          use: [loader...],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins:[
    new ExtraTextPlugin(filename)
  ]
  ```
  options包括
    * filename
    * allChunks

* clean-webpack-plugin
  作用就是删除目录    
  安装`npm install --save-dev clean-webpack-plugin`   
  ```
  plugins:[
    new cleanWebpackPlugin()
  ]
  ```

* webpack.LoaderOptionsPlugin
  内置插件，用来处理外部加载的Loader配置项   
  ```
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function(){
        return [
          require("autoprefixer")({
            browsers: ['ie>=8','>1% in CN']
          })
        ];
      }
    }
  })
  ```

* uglifyjs-webpack-plugin   

