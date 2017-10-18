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
  * libraryTarget
  * pathinfo
  * chunkFilename
  * jsonpFunction
  * sourceMapFilename
  * devtoolModuleFilenameTemplate
  * devtoolFallbackModuleFilenameTemplate
  * umdNamedDefine
  * crossOriginLoading
* module
  * module.rules
    * module.rule.test
    * module.rule.include
    * module.rule.exclude
    * module.rule.issuer
    * module.rule.enforce
    * module.rule.loader
    * module.rule.options


## 配置类型
* 导出为对象
* 导出为函数
* 导出为Promise对象
* 导出为多个配置对象