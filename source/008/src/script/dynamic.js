// import _ from "lodash";

// import Print from "./print";

function getComponent(){
  // /* webpackChunkName: "lodash" */
  return import(/* webpackChunkName: "lodash" */"lodash").then(_=>{
    var element = document.createElement("div");
    element.innerHTML = _.join(["Hello", "Webpack", " "]);
    // element.onclick = Print.bind(null, "hello webpack!!!!!!");

    return element;
  }).catch(err=>"an error occurred while loading the component");
}

getComponent().then(component=>{
  document.body.appendChild(component);
})
