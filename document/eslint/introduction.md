## ESLint

### 安装
`npm install eslint --save-dev`

### 命令行
`eslint [option] [file.js] [dir]`   
例如 `eslint --cache src/ webpack.*.js` 表示检测src目录下的所有文件以及满足webpack.*.js匹配条件的文件是否符合eslint规范并且只检测内容有过更改的文件
有个小坑:如果是在全局安装`eslint`,`babel-eslint`这两个依赖包那么可以直接在终端中运行检测命令`eslint [file.js]`       
如果是局部安装那么建议使用`./node_modules/.bin/eslint`这样的指令或者脚本来检测文件   

### 如何在webpack中配置
通过`eslint-loader`来实现，安装`npm install eslint-loader --save-dev`   
在`webpack.config.js`文件中,给`module`选项下检测`js文件`的`test`匹配规则下的`use`选项添加一个`eslint-loader`同时可以指定options(可以添加`fix:true`来自动修复一些简单的语法错误),也可以在项目中添加`.eslintrc.js`文件从外部导入规则       
