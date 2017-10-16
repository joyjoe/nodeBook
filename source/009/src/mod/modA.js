module.exports = {
  add(...args){
    return args.reduce((prev, curr)=>{
      return prev + curr;
    });
  },
  multi(...args){
    return args.reduce((prev, curr)=>{
      return prev * curr;
    });
  }
}