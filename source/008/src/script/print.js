// es6 module
// export default function print(){
//   var a = 5;
//   var b = 10;
//   console.log(a+b);
// } 

// import _ from "lodash";
// console.log(_.join(["print", "module", "loaded"]));

console.log("the print.js module has loaded! See the network tab in dev tools...");

export default ()=>{
  console.log("button clicked: here is some text");
}