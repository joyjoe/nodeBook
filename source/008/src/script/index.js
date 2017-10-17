import { square } from "./math";

function component(){
  var element = document.createElement("div");
  element.innerHTML = ["Hello webpack","5 square is equal to "+square(5)].join("\n\n");
  return element;
}

document.body.appendChild(component());

