# 配置

## 完整选项
* entry
**string|object|array**
* output
  * output.path
    **必须是绝对路径**
  * output.filename
    **string|[name]|[id]|[chunkhash]|[hash]**
  * output.publicPath
    **输出解析文件相对于HTML页面的路径**
  * library
  * libraryTarget 配置如何暴露library
    umd amd commonjs commonjs2 this var
  * pathinfo
  * chunkFilename
    动态加载(懒加载)时为新的chunkFilename指定生成的文件名       
  * jsonpFunction
  * sourceMapFilename
  * devtoolModuleFilenameTemplate
  * devtoolFallbackModuleFilenameTemplate
  * umdNamedDefine
  * crossOriginLoading
* module
  * module.noParse
  * module.rules
    * module.rule.test
    * module.rule.include
    * module.rule.exclude
        /node_modules/    
    * module.rule.issuer
    * module.rule.enforce
    * module.rule.loader
    * module.rule.options
* plugins
  * CommonsChunkPlugin
    使用CommonsChunkPlugin插件进行代码分离时，可以为需要分离的chunks指定生成后的chunk名和文件名，分别是name及filename参数   
* resolve
  * extension
  * alias
    用别名可以缩短某些模块导入时非常长的相对路径字符串   
* devServer
  * inline
  * progress
  * hot
* externals
  外部扩展

## 配置类型
* 导出为对象
* 导出为函数
* 导出为Promise对象
* 导出为多个配置对象