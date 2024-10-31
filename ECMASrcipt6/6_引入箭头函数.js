/**
 * 箭头函数
 * 1 箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
 * 2 箭头函数不可作为构造函数
 * 3 不可使用 arguments 变量(但是可以使用 ES6推荐使用 剩余参数,即(...args))
 * 4 箭头函数可以被简写
 *  4.1 当形参只有一个时，可以省略掉此形参外面的括号
 *  4.2 当语句只有一行时，可以省略【花括号和return】
 * */
let myOldFunction = function (a) {
    console.log(`Log ${a}!`);
    console.log("输出普通方法的this", this);
    /**
     * global {global: global, clearImmediate: Function, setImmediate: Function,
     * clearInterval: Function, clearTimeout: Function, ...}*/
}
//改写为：
let myNewFunction = (a, ...cs) => {
    console.log(`Log ${a}!`);
    console.log(cs[0],cs[1]);
    console.log("输出箭头函数的this", this);
    /**
     * Object {}
     * */
}
myOldFunction("普通函数")
myNewFunction("箭头函数","a",100);
// 缩写箭头函数
let abbreviationArrow1st = (theOnlyParameter) =>{
    console.log(theOnlyParameter);
}
let abbreviationArrow2nd = theOnlyParameter =>{
    console.log(theOnlyParameter);
}
let abbreviationArrow3rd = theOnlyParameter => console.log(theOnlyParameter);
let abbreviationArrow4th = num => num * num;
console.log(abbreviationArrow4th(4));