/**
 * 在调用方法时入参也可使用 ...参数名 的方式，将数组转换为逗号分隔的参数序列
 * 区分于剩余参数，剩余参数的位置是在方法声明的入参位置；
 * 1 扩展运算符可以合并两个数组
 * 2 可以用来克隆数组
 * 3 伪数组转换为真正数组，如const arr = [...fakeArray]
 * */

const FAMILY_A = ["Daddy Pig",
    "Mummy Pig",
    "Peppa Pig",
    "George Pig"];
const FAMILY_B = [
    "Peter Griffin",
    "Lois Griffin",
    "Meg Griffin",
    "Chris Griffin",
    "Stewie Griffin",
    "Brian Griffin"
];
// 1 扩展运算符可以合并两个数组
let party_gus = [...FAMILY_A, ...FAMILY_B];
console.log("Two families have joined the party!!", party_gus);
//2 可以用来克隆数组
let family_cloned = [...FAMILY_A];
console.log("A cloned family appears!", family_cloned);
function greetings() {

}