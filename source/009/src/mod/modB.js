module.exports.square = function(number){
  return number * number;
}

module.exports.randomTimeout = function(cb){
  console.log("in randomTimeout");
  setTimeout(cb, Math.random() * 500);
}