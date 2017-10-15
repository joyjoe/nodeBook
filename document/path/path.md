# path路径模块
path模块常用方法  
* normalize
* join  
* dirname
* basename(path, ext)
* extname
* sep
* delimiter
* resolve 将路径片段从右至左拼接成一个绝对路径  
* relative

具体代码演示参考source/003目录  

在node中使用路径时，需要注意的几点:  
1. `__dirname`和`__filename`永远都是绝对路径
2. `process.cwd()`表示当前node启动的路径,与执行文件的绝对路径无关
3. require()中使用的相对路径，是相对于当前文件所在绝对路径而言的
4. 在其他地方使用的路径都是与node启动的路径有关,与执行文件的绝对路径无关