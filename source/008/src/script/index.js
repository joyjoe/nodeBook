// import { square } from "./math";
// import "../style/index.css";
// import _ from "lodash";

// function component(){
//   var element = document.createElement("div");
//   // element.innerHTML = ["Hello webpack","5 square is equal to "+square(5)].join("\n\n");
//   element.innerHTML = _.join(["Hello webpack","5 square is equal to "+square(5)],"\n\n");
//   // element.classList.add("hello");

//   var button = document.createElement("button");
//   button.innerHTML = "click me and look at the conosle";
//   var br = document.createElement("br");
//   element.appendChild(br);
//   element.appendChild(button);

//   button.addEventListener("click", (e)=>{
//     // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
//     import(/*webpackChunkName: "print" */"./print").then(module=>{
//       var print = module.default;
//       print();
//     });
//   })
//   return element;
// }

// document.body.appendChild(component());


// if(process.env.NODE_ENV !== "production"){
//   console.log("looks like we are in development mode!");
// }

