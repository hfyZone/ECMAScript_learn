// 新增let
// 1 let只在块级作用域内生效，之前的var为全局作用域
{
    let age = 18;
    console.log(age);
}
// 2 let不存在变量提升，即编译时不会将声明调到最前面
//console.log(name);//Uncaught ReferenceError: Cannot access 'name' before initialization
let name;
name = "jane";
console.log(address);
var address = "ON THE EARTH";
// 3 let在for循环中相比var可以直接依据索引访问；,因为循环会被编译为多个代码块{}
// 因为var是全局变量，所以每个{}里的var变量都是最后一个var变量的值。
for (let i = 0; i < 10; i++) {
    console.log(i);
}