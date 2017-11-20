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
  modules: true
* style-loader
* html-loader (https://doc.webpack-china.org/loaders/html-loader/)
* babel-loader
  配置选项    
  * cacheDirectory     

## plugin
* html-webpack-plugin
  安装`npm install --save-dev html-webpack-plugin`    
  配置选项    
    * template
    * filename
    * title
    * inject : true | false | "head" | "body"
    * favicon
    * minify
    * hash
    * cache
    * showErrors
    * chunks
    * chunksSortMode
    * excludeChunks


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


* banner-plugin
  这个是webpack内置的plugin,为每个chunk文件的头部添加banner     
  使用方法:   
  ```
  new webpack.BannerPlugin(banner)
  banner: string

  new webpack.BannerPlugin(option)
  option: object
  {
    banner: string,
    raw: boolean
    entryOnly: boolean,
    test: string | RegExp | Array,
    include: string | RegExp | Array,
    exclude: string | RegExp | Array
  }
  ```
* commons-chunk-plugin
  这个是webpack内置的plugin    
  (https://doc.webpack-china.org/plugins/commons-chunk-plugin/)   
  ```
  new webpack.CommonsChunkPlugin(option)
  ```

* ProvidePlugin
  用于自动加载模块(https://doc.webpack-china.org/plugins/provide-plugin/)    

* DefinePlugin


* DLLPlugin
* DLLReferencePlugin
* CopyWebpackPlugin