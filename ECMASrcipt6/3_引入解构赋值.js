/**
 * 数组解构赋值、对象解构赋值
 * 对象解构赋值需要两个属性名称一致
 * */
// 数组解构赋值
const FAMILY = ["Daddy Pig",
    "Mummy Pig",
    "Peppa Pig",
    "George Pig"];
let [father, mather, daughter, son] = FAMILY;
console.log(father, mather, daughter, son);
// 对象解构赋值
const pig = {
    name: "Peppa",
    age: 4,
    haveSomeFood: function (food){
        console.log(`${name} is having some ${food}.She thinks it is delicious!`)
    }
};
let {name, age, haveSomeFood} = pig;
console.log(name, age);
haveSomeFood("forks");