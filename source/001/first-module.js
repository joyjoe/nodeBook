// 使用module.exports对外暴露接口
var number = 100;
function getNumber(){
    console.log("number = ", number);
}
// 对外暴露一个属性和一个方法
module.exports.number = number;
module.exports.getNumber = getNumber;