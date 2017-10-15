# Event事件模块
Event事件模块是NodeJS中最重要的一个模块，模块对外暴露一个对象EventEmitter。因为其他很多内置模块以及第三方模块都是继承或者混合这个对象而开发的。
## EventEmitter类的方法
* addListener
* removeListener
* removeAllListeners
* on
* once
* prependListener
* prependOnceListener
* emit
* getMaxListeners
* setMaxListeners
* listeners
* listenerCount
* eventNames