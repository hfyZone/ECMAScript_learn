/**
 * 可以将 属性名称：属性值；在同名的情况下直接携程属性名称；
 * */
let name = "Peppa Pig";
let age = 4;
let haveSomeFood = function (food) {
    console.log(`${name} is having some ${food}.She thinks it is delicious!`)
}
const pig = {
    name,
    age,
    haveSomeFood
}
// const oldPig = {
//     name: name,
//     age: age,
//     haveSomeFood: haveSomeFood
// }